import Head from "next/head";
import Layout from "../../../../components/Layout";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import nextCookie from "next-cookies";
import { loadStorage, storage } from "../../../../public/js/db";
import shortid from "shortid";

const Update = props => {
  // 해당 글의 기존 데이터
  const [data, setData] = useState(props.data);

  // 입력 값
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [category, setCategory] = useState(data.category);

  const [img, setImg] = useState(data.imgPath);
  const [imgName, setImgName] = useState("");
  const [imgChanged, setImgChanged] = useState(false);

  const [detailImg1, setDetailImg1] = useState(data.detailImg[0]);
  const [detailImg2, setDetailImg2] = useState(data.detailImg[1]);

  const [link, setLink] = useState(data.link);

  // input file element
  const inputFileEl = useRef(null);
  // detail input file elemenet
  const detailFileEl1 = useRef(null);
  const detailFileEl2 = useRef(null);

  const router = useRouter();
  const pid = router.query.pid;

  // 제목 입력
  const titleChange = e => {
    setTitle(e.target.value);
  };
  // 내용 입력
  const contentChange = e => {
    setContent(e.target.value);
  };
  // 카테고리 선택 / 해제
  const categoryChange = e => {
    const val = e.target.value;
    if (e.target.checked) {
      // 배열에 추가
      setCategory(category => [...category, val]);
    } else {
      // 배열에서 제거
      setCategory(category.filter(item => item !== val));
    }
  };

  // 이미지 업로드
  const onFileUpload = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setImg(preview);
    setImgName(e.target.files[0].name);
    setImgChanged(true);
    inputFileEl.current.focus();
    console.log(inputFileEl.current.files);
  };
  // 업로드 이미지 제거
  const fileRemove = e => {
    e.preventDefault();
    setImg("");
    setImgName("");
    inputFileEl.current.value = null;
  };

  const detailImg = data.detailImg;
  // 상세 이미지 업로드1
  const onDetailUpload1 = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setDetailImg1(preview);
    detailFileEl1.current.focus();
  };
  // 상세 업로드 이미지 제거1
  const detailRemove1 = e => {
    e.preventDefault();
    setDetailImg1("");
    detailImg[0] = "";
    detailFileEl1.current.value = null;
  };

  // 상세 이미지 업로드2
  const onDetailUpload2 = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setDetailImg2(preview);
    detailFileEl2.current.focus();
  };
  // 상세 업로드 이미지 제거2
  const detailRemove2 = e => {
    e.preventDefault();
    setDetailImg2("");
    detailImg[1] = "";
    detailFileEl2.current.value = null;
  };

  // 링크 입력
  const linkChange = e => {
    setLink(e.target.value);
  };

  // 취소 클릭
  const cancelSubmit = e => {
    e.preventDefault();
    const check = confirm("작성을 취소하시겠습니까?");
    if (check) {
      router.push("/admin/p/list");
    }
  };

  // 저장
  const handleSubmit = e => {
    e.preventDefault();

    /**
     *  data check here
     */
    if (!title || !content || !link) {
      alert("값을 모두 입력해주세요.");
      return;
    } else if (imgChanged && !imgName) {
      alert("값을 모두 입력해주세요.");
    }
    const check = confirm("등록하시겠습니까?");
    if (check) {
      let reqData = { title, content, link, category };

      // 이미지 firestore storage 에 저장
      uploadImg(reqData, uploadDetailImg);

      // -> 위에거 함수 호출 순서 변경 -> uploadPost 로 감싸고 그 안에서 await 로 uploadImg, uploadDetailImg
    }
  };

  // 이미지 firestore storage 에 저장
  const uploadImg = async (reqData, cb) => {
    const storage = await loadStorage();

    // 이미지 변경된 경우
    // firestore storage 에 업로드
    if (imgChanged) {
      console.log(inputFileEl);

      const sid = shortid.generate();
      const storageRef = storage.ref(`post/${sid}`);
      const uploadTask = storageRef.put(inputFileEl.current.files[0]);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        err => {
          switch (err.code) {
            case "storage/unauthorized":
              alert("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              alert("User canceled the upload");
              break;
            case "storage/unknown":
              alert("Unknown error occurred, inspect error.serverResponse");
              break;
          }

          console.log('error occured: 170;');
          console.log(err);
        },
        async () => {
          // 업로드된 이미지 url
          const downloadURL = await uploadTask.snapshot.ref
            .getDownloadURL()
            .then(downloadURL => {
              // console.log(`file uploaded..\n${downloadURL}`);
              return downloadURL;
            });

          const newData = {
            ...reqData,
            imgName: imgName,
            imgPath: downloadURL,
            imgSaveName: sid
          };

          cb(newData, uploadPost, storage); // uploadDetailImg
        }
      );
    }

    // 이미지 변경되지 않은 경우
    else {
      cb(reqData, uploadPost, storage); // uploadDetailImg
    }
  };

  const uploadDetailImg = async (reqData, cb, storage) => {
    const selectedImages = [];

    if (detailFileEl1.current.files[0] !== undefined)
      selectedImages.push(detailFileEl1.current.files[0]);
    if (detailFileEl2.current.files[0] !== undefined)
      selectedImages.push(detailFileEl2.current.files[0]);

    // detail img path 정리
    // add prev detailImg to reqData
    reqData.detailImg = detailImg.filter(path => path !== "");

    // detail image 변경 사항 있을 경우
    if (selectedImages.length) {
      const process = (item, i) => {
        return new Promise((resolve, reject) => {
          const sid = shortid.generate(); // sid => imgSaveName
          const storageRef = storage.ref(`post/${sid}`);

          // upload file
          const uploadTask = storageRef.put(item);

          //Update progress bar
          uploadTask.on(
            "state_changed",
            () => {},
            err => {
              console.log(err);
              reject();
            },
            async _ => {
              const url = await uploadTask.snapshot.ref
                .getDownloadURL()
                .then(url => url);
              reqData.detailImg.push(url);
              resolve();
            }
          );
        });
      };

      for (let i = 0; i < selectedImages.length; i++) {
        const item = selectedImages[i];
        await process(item, i);
      }

      cb(reqData);
    } else {
      cb(reqData); // uploadPost
    }
  };

  // DB update
  const uploadPost = reqData => {
    // console.log(reqData);
    // return;

    axios
      .patch(`${process.env.ASSET_PREFIX}/api/board/post/${pid}`, reqData, {
        headers: {
          Accept: "application/json",
          Headers: "content-type",
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        // console.log(`post uploaded..\n`);
        alert("업로드 되었습니다.");
        router.push("/admin/p/list");
      })
      .catch(err => {
        console.log(err);
        alert("uncaught error occured");
        router.push("/admin/p/list");
      });
  };

  return (
    <Layout>
      <Head>
        <title>Admin - Update</title>
      </Head>

      <div className={"content"}>
        <div className={"row box"}>
          <div className={"col col-sm-12"}>
            <h1 className={"header"}>XD 편집</h1>

            <div className={"row"}>
              <div className={"col col-sm-12"}>
                <form encType={"multipart/form-data"} onSubmit={handleSubmit}>
                  {/* 제목 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label">제목</label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={"제목을 입력하세요."}
                        maxLength="50"
                        value={title}
                        onChange={titleChange}
                      />
                    </div>
                  </div>

                  {/* 카테고리 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label">카테고리</label>
                    </div>
                    <div className={"input-area"}>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          defaultChecked={category.indexOf("UI KITS") > -1}
                          className="filled-in"
                          value={"UI KITS"}
                          onChange={categoryChange}
                        />
                        <span>UI KITS</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          defaultChecked={category.indexOf("Website") > -1}
                          className="filled-in"
                          value={"Website"}
                          onChange={categoryChange}
                        />
                        <span>Website</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          defaultChecked={category.indexOf("Mobile") > -1}
                          className="filled-in"
                          value={"Mobile"}
                          onChange={categoryChange}
                        />
                        <span>Mobile</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          defaultChecked={category.indexOf("Plug-in") > -1}
                          className="filled-in"
                          value={"Plug-in"}
                          onChange={categoryChange}
                        />
                        <span>Plug-in</span>
                      </label>
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label
                        className="col-form-label"
                        style={{ lineHeight: "20.4" }}
                      >
                        내용
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <textarea
                        className="form-control"
                        placeholder={"내용을 입력하세요."}
                        maxLength={"1000"}
                        value={content}
                        onChange={contentChange}
                      />
                    </div>
                  </div>

                  {/* 이미지 업로드 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label
                        className="col-form-label"
                        style={{ lineHeight: "9.4" }}
                      >
                        썸네일 이미지
                      </label>
                    </div>
                    <div className={" input-group input-area"}>
                      <div className="file-label">
                        {img === "" ? (
                          <label
                            htmlFor={"fileUploader"}
                            className={"add text-center"}
                          >
                            +<br />
                            이미지
                          </label>
                        ) : (
                          <div className={"added"}>
                            <img src={img} alt="업로드 이미지" />
                            <a
                              href="#"
                              className="btn-close"
                              onClick={fileRemove}
                            />
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        id="fileUploader"
                        className="form-control-file"
                        ref={inputFileEl}
                        onChange={onFileUpload}
                      />
                    </div>
                  </div>

                  {/* 상세 이미지 업로드 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label
                        className="col-form-label"
                        style={{ lineHeight: "9.4" }}
                      >
                        상세 이미지
                      </label>
                    </div>
                    {/* 상세 이미지 1 업로드 */}
                    <div
                      className={" input-group input-area detail-img-group"}
                      style={{ "margin-left": "17%" }}
                    >
                      <div className="file-label">
                        {detailImg1 === "" || !detailImg1 ? (
                          <label
                            htmlFor={"detailUploader1"}
                            className={"add text-center"}
                          >
                            +<br />
                            이미지
                          </label>
                        ) : (
                          <div className={"added"}>
                            <img src={detailImg1} alt="업로드 이미지" />
                            <a
                              href="#"
                              className="btn-close"
                              onClick={detailRemove1}
                            />
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        id="detailUploader1"
                        name={"img"}
                        className="form-control-file"
                        ref={detailFileEl1}
                        onChange={onDetailUpload1}
                      />
                    </div>

                    {/* 상세 이미지 2 업로드 */}
                    <div className={" input-group input-area detail-img-group"}>
                      <div className="file-label">
                        {detailImg2 === "" || !detailImg2 ? (
                          <label
                            htmlFor={"detailUploader2"}
                            className={"add text-center"}
                          >
                            +<br />
                            이미지
                          </label>
                        ) : (
                          <div className={"added"}>
                            <img src={detailImg2} alt="업로드 이미지" />
                            <a
                              href="#"
                              className="btn-close"
                              onClick={detailRemove2}
                            />
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        id="detailUploader2"
                        name={"img"}
                        className="form-control-file"
                        ref={detailFileEl2}
                        onChange={onDetailUpload2}
                      />
                    </div>
                  </div>

                  {/* 링크 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label">링크</label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={"링크를 입력하세요."}
                        maxLength="250"
                        value={link}
                        onChange={linkChange}
                      />
                    </div>
                  </div>

                  {/* 버튼 영역 */}
                  <div className={"row form-btn"}>
                    <div className={"col col-sm-12 text-center"}>
                      <button
                        className={"btn btn-lg btn-outline-lightgray"}
                        onClick={cancelSubmit}
                      >
                        취소
                      </button>
                      <button
                        type={"submit"}
                        className={"btn btn-lg btn-primary ml-3"}
                      >
                        저장
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .box {
          margin: 70px auto;
          border: 0 solid transparent;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          background-color: #fff;
        }
        .header {
          margin: 33px 35px 0;
          padding: 0 0 34px;
          font-weight: bold;
          line-height: 1;
          border-bottom: 3px solid #96959a;
        }
        form {
          margin: 0 35px;
        }
        .form-group {
          position: relative;
        }
        .label-area {
          position: absolute;
          width: 17%;
          top: 20px;
          left: 0;
          padding-left: 10px;
          font-size: 18px;
        }
        .input-area {
          width: 83%;
          margin-left: 17%;
          padding-right: 10px;
        }

        .detail-img-group {
          width: auto;
          display: inline-block;
          margin-left: 10px;
        }

        textarea {
          height: 381px;
          line-height: 30px;
          resize: none;
        }
        .file-label {
          position: relative;
          width: 321px;
          height: 182px;
          border: 1px solid #eaeaea;
          overflow: hidden;
          .add {
            display: block;
            //display: none;
            margin: 0 auto;
            padding: 69px 0;
            color: #96959a;
          }
          .added {
            position: relative;
            width: 319px;
            height: 180px;
            overflow: hidden;
            img {
              position: absolute;
              left: 0;
              top: 0;
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
            }
            .btn-close {
              position: absolute;
              top: 0;
              right: 0;
              background-color: #000;
              width: 30px;
              height: 30px;
              background-image: url("/img/common/btn-close.png");
              background-repeat: no-repeat;
              background-size: 71%;
              background-position: center;
            }
            .btn-close {
              position: absolute;
              top: 0;
              right: 0;
              background-color: #000;
              width: 30px;
              height: 30px;
              background-image: url("/img/common/btn-close.png");
              background-repeat: no-repeat;
              background-size: 71%;
              background-position: center;
            }
          }
        }
        input[type="file"] {
          display: none;
        }
        .form-btn {
          margin: 40px auto;
        }
      `}</style>
    </Layout>
  );
};

Update.getInitialProps = async function(ctx) {
  const { token } = nextCookie(ctx);
  const auth = !!token;
  // if (!auth) {
  //     ctx.res.writeHead(302, { Location: '/admin/login' });
  //     ctx.res.end();
  // }

  const pid = ctx.query.pid;
  const res = await fetch(`${process.env.ASSET_PREFIX}/api/board/post/${pid}`);
  const result = await res.json();

  return {
    data: result.data
  };
};

export default Update;

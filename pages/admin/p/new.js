import Head from "next/head";
import Layout from "../../../components/Layout";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import nextCookie from "next-cookies";
import { loadStorage, storage } from "../../../public/js/db";
import shortid from "shortid";

const New = props => {
  // 입력값
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);

  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");

  const [detailImg1, setDetailImg1] = useState("");
  const [detailImgName1, setDetailImgName1] = useState("");
  const [detailImg2, setDetailImg2] = useState("");
  const [detailImgName2, setDetailImgName2] = useState("");

  const [link, setLink] = useState("");

  // input file element
  const inputFileEl = useRef(null);
  // detail input file elemenet
  const detailFileEl1 = useRef(null);
  const detailFileEl2 = useRef(null);

  const router = useRouter();

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

    inputFileEl.current.focus();
  };
  // 업로드 이미지 제거
  const fileRemove = e => {
    e.preventDefault();
    setImg("");
    setImgName("");
    inputFileEl.current.value = null;
  };

  // 상세 이미지 업로드1
  const onDetailUpload1 = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setDetailImg1(preview);
    setDetailImgName1(e.target.files[0].name);
    detailFileEl1.current.focus();
  };
  // 상세 업로드 이미지 제거1
  const detailRemove1 = e => {
    e.preventDefault();
    setDetailImg1("");
    setDetailImgName1("");
    detailFileEl1.current.value = null;
  };

  // 상세 이미지 업로드2
  const onDetailUpload2 = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setDetailImg2(preview);
    setDetailImgName2(e.target.files[0].name);
    detailFileEl2.current.focus();
  };
  // 상세 업로드 이미지 제거2
  const detailRemove2 = e => {
    e.preventDefault();
    setDetailImg2("");
    setDetailImgName2("");
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
  const handleSubmit = async e => {
    e.preventDefault();

    /**
     *  data check here
     */
    if (!title || !content || !imgName || !link) {
      alert("값을 모두 입력해주세요.");
      return;
    }

    const check = confirm("등록하시겠습니까?");
    if (check) {
      const reqData = {
        title,
        content,
        category,
        imgName,
        link,
        imgPath: "",
        imgSaveName: "",
        detailImg: []
        // detailImgName: []
      }; // db insert data

      // firestore storage 에 업로드
      const storage = await loadStorage();

      const img = inputFileEl.current.files[0];
      const sid = shortid.generate(); // sid => imgSaveName
      const storageRef = storage.ref(`post/${sid}`);
      const uploadTask = storageRef.put(img);

      reqData.imgSaveName = sid;

      const selectedImages = [];
      if (detailImg1 !== "")
        selectedImages.push(detailFileEl1.current.files[0]);
      if (detailImg2 !== "")
        selectedImages.push(detailFileEl2.current.files[0]);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
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
          // reject();
        },
        () => {
          // 업로드된 이미지 url
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            reqData.imgPath = url;

            // detail image upload
            uploadDetailImg();
          });
        }
      );
      /* End of main img upload task */

      const uploadDetailImg = async () => {
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

        dbInsert();
      };

      const dbInsert = () => {
        axios
          .post(`${process.env.ASSET_PREFIX}/api/board/create`, reqData, {
            headers: {
              Accept: "application/json",
              Headers: "content-type",
              "Content-Type": "application/json"
            }
          })
          .then(() => {
            alert("업로드 되었습니다.");
            router.push("/admin/p/list");
          })
          .catch(err => {
            console.log(err);
            alert("uncaught error occured");
            router.push("/admin/p/list");
          });
      };
    }
  };

  return (
    <Layout>
      <Head>
        <title>Admin - New</title>
      </Head>

      <div className={"content"}>
        <div className={"row box"}>
          <div className={"col col-sm-12"}>
            <h1 className={"header"}>XD 글쓰기</h1>

            <div className={"row"}>
              <div className={"col col-sm-12"}>
                <form encType={"multipart/form-data"} onSubmit={handleSubmit}>
                  {/* 제목 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label" htmlFor={"title"}>
                        제목
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        id={"title"}
                        type="text"
                        name={"title"}
                        className="form-control"
                        placeholder={"제목을 입력하세요."}
                        maxLength="50"
                        onChange={titleChange}
                      />
                    </div>
                  </div>

                  {/* 카테고리 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label
                        className="col-form-label bold"
                        htmlFor={"category"}
                      >
                        카테고리
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          className="filled-in"
                          value={"UI KITS"}
                          onChange={categoryChange}
                        />
                        <span>UI KITS</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          className="filled-in"
                          value={"Website"}
                          onChange={categoryChange}
                        />
                        <span>Website</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
                          className="filled-in"
                          value={"Mobile"}
                          onChange={categoryChange}
                        />
                        <span>Mobile</span>
                      </label>
                      <label className="checkbox checkbox_single">
                        <input
                          type="checkbox"
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
                        htmlFor={"description"}
                      >
                        내용
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <textarea
                        id={"description"}
                        className="form-control"
                        name={"content"}
                        placeholder={"내용을 입력하세요."}
                        maxLength={"1000"}
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
                        name={"img"}
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
                      className={"input-group input-area detail-img-group"}
                      style={{ "margin-left": "17%" }}
                    >
                      <div className="file-label">
                        {detailImg1 === "" ? (
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
                    <div className={"input-group input-area detail-img-group"}>
                      <div className="file-label">
                        {detailImg2 === "" ? (
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
                        name={"link"}
                        className="form-control"
                        placeholder={"링크를 입력하세요."}
                        maxLength="250"
                        onChange={linkChange}
                      />
                    </div>
                  </div>

                  {/* 버튼 영역 */}
                  <div className={"row form-btn"}>
                    <div className={"col col-sm-12 text-center"}>
                      <button
                        href="#"
                        className={"btn btn-lg btn-outline-lightgray"}
                        onClick={cancelSubmit}
                      >
                        취소
                      </button>
                      <button
                        href="#"
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
        .detail-input-area {
          display: inline-block;
          width: calc(27.6% - 1px);
          margin-left: 0;
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
          .add {
            display: block;
            margin: 0 auto;
            padding: 69px 0;
            color: #96959a;
          }
          .added {
            width: 100%;
            height: 182px;
            margin: auto;
            overflow: hidden;
            background: #d3d3d3;
            text-align: center;
            img {
              width: auto;
              height: 100%;
              max-width: 100%;
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

New.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const auth = !!token;
  // if (!auth) {
  //     ctx.res.writeHead(302, { Location: '/admin/login' });
  //     ctx.res.end();
  // }

  const page = ctx.query.page || "1";
  const res = await fetch(
    `${process.env.ASSET_PREFIX}/api/board/list/5?page=${page}`
  );
  const result = await res.json();

  return {
    auth: auth,
    data: result.data,
    page: Number(page)
  };
};

export default New;

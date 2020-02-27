import Head from "next/head";
import Layout from "../../../components/Layout";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import nextCookie from "next-cookies";
import { loadStorage, storage } from "../../../public/js/db";
import shortid from "shortid";

const Playlist = props => {
  const { idx, link, onChange } = props;
  const playlistChange = e => {
    onChange(e.target.value, idx);
  };

  return (
    <>
      <input
        type="text"
        name={"playlist"}
        value={link}
        className="form-control"
        placeholder={"https://www.youtube.com/watch?v=Ljw1Hcn15C"}
        maxLength="250"
        onChange={playlistChange}
      />
      <style jsx>{`
        input {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

const New = props => {
  // 입력값
  const [title, setTitle] = useState("");
  const [hash, setHash] = useState("");
  const [playlist, setPlaylist] = useState(["", "", ""]);
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const router = useRouter();

  // 제목 입력
  const titleChange = e => {
    setTitle(e.target.value);
  };
  // 제목 입력
  const hashChange = e => {
    setHash(e.target.value);
  };
  // 내용 입력
  const contentChange = e => {
    setContent(e.target.value);
  };

  // 링크 입력
  const linkChange = e => {
    setLink(e.target.value);
  };

  const addPlaylist = e => {
    e.preventDefault();
    setPlaylist(playlist => [...playlist, ""]);
  };

  const handlePlaylistChange = (val, idx) => {
    setPlaylist(playlist.map((item, i) => (idx === i ? val : item)));
  };

  // 취소 클릭
  const cancelSubmit = e => {
    e.preventDefault();
  };

  // 저장
  const handleSubmit = async e => {
    e.preventDefault();

    /**
     *  data check here
     */
    if (!title || !hash || !content || !link) {
      alert("값을 모두 입력해주세요.");
      return;
    }

    const check = confirm("등록하시겠습니까?");
    if (check) {
      const reqData = {
        title,
        hash: hash.split(","),
        content,
        link
      }; // db insert data

      // playlist 있는 경우에만 추가
      const play = playlist.filter(item => item !== "");
      if (play.length) reqData.playlist = play;

      axios
        .post(`${process.env.ASSET_PREFIX}/api/lecture/create`, reqData, {
          headers: {
            Accept: "application/json",
            Headers: "content-type",
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          alert("업로드 되었습니다.");
          router.push("/admin/lecture");
        })
        .catch(err => {
          console.log(err);
          alert("uncaught error occured");
          router.push("/admin/lecture");
        });
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
            <h1 className={"header"}>강의 글쓰기</h1>

            <div className={"row"}>
              <div className={"col col-sm-12"}>
                <form encType={"multipart/form-data"} onSubmit={handleSubmit}>
                  {/* 제목 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label" htmlFor={"title"}>
                        제목 *
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        id={"title"}
                        type="text"
                        name={"title"}
                        className="form-control"
                        placeholder={"제목을 입력해 주세요"}
                        maxLength="50"
                        onChange={titleChange}
                      />
                    </div>
                  </div>

                  {/* 태그 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label" htmlFor={"hash"}>
                        태그달기 *
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        id={"hash"}
                        type="text"
                        name={"hash"}
                        className="form-control"
                        placeholder={"태그를 ','로 입력해 주세요"}
                        maxLength="50"
                        onChange={hashChange}
                      />
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
                        내용 *
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <textarea
                        id={"description"}
                        className="form-control"
                        name={"content"}
                        placeholder={"내용을 입력해 주세요"}
                        maxLength={"1000"}
                        onChange={contentChange}
                      />
                    </div>
                  </div>

                  {/* 유튜브 링크 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label" htmlFor={"link"}>
                        유튜브 링크 *
                      </label>
                    </div>
                    <div className={"input-area"}>
                      <input
                        id={"link"}
                        type="text"
                        name={"link"}
                        className="form-control"
                        placeholder={
                          "https://www.youtube.com/watch?v=Ljw1Hcn15C"
                        }
                        maxLength="250"
                        onChange={linkChange}
                      />
                    </div>
                  </div>

                  {/* 플레이 리스트 */}
                  <div className={"form-group"}>
                    <div className={"label-area"}>
                      <label className="col-form-label">플레이 리스트</label>
                    </div>
                    <div className={"input-area"}>
                      {playlist.map((item, idx) => (
                        <Playlist
                          key={idx}
                          idx={idx}
                          link={item}
                          onChange={handlePlaylistChange}
                        />
                      ))}

                      <button
                        onClick={addPlaylist}
                        className={"btn-sm btn-gray-7"}
                      >
                        + 추가
                      </button>
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
  //   ctx.res.writeHead(302, { Location: "/admin/login" });
  //   ctx.res.end();
  // }

  return {
    auth: auth
  };
};

export default New;

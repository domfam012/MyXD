import Head from "next/head";
import Layout from '../../../../include/Layout';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import nextCookie from "next-cookies";
import { loadStorage, storage } from './../../../../lib/js/db';
import shortid from 'shortid';

const Update = props => {
    const [ data, setData ] = useState(props.data);
    const [ title, setTitle ] = useState(data.title);
    const [ content, setContent ] = useState(data.content);
    const [ category, setCategory ] = useState(data.category);
    const [ img, setImg ] = useState(data.imgPath);
    const [ imgName, setImgName ] = useState('');
    const [ imgChanged, setImgChanged ] = useState(false);
    const [ link, setLink ] = useState(data.link);
    const inputFileEl = useRef(null);
    const router = useRouter();
    const pid = router.query.pid;

    const titleChange = e => {
        setTitle(e.target.value);
    };
    const contentChange = e => {
        setContent(e.target.value);
    };
    const categoryChange = e => {
        const val = e.target.value;
        if (e.target.checked) { // 배열에 추가
            setCategory(category => [ ...category, val ]);
        }
        else { // 배열에서 제거
            setCategory(category.filter(item => item !== val));
        }
    };
    const onFileUpload = e => {
        const preview = URL.createObjectURL(e.target.files[0]);
        setImg(preview);
        setImgName(e.target.files[0].name);
        setImgChanged(true);
        inputFileEl.current.focus();
    };
    const fileRemove = e => {
        e.preventDefault();
        setImg('');
        setImgName('');
        inputFileEl.current.value = null;
    };
    const linkChange = e => {
        setLink(e.target.value);
    };

    const cancelSubmit = (e) => {
        e.preventDefault();
        const check = confirm('작성을 취소하시겠습니까?');
        if (check) {
            router.push('/admin/p/list');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        /**
         *  data check here
         */
        if (!title || !content || !link) {
            alert('값을 모두 입력해주세요.');
            return;
        }
        else if (imgChanged && !imgName) {
            alert('값을 모두 입력해주세요.');
        }
        const check = confirm('등록하시겠습니까?');
        if (check) {
            let reqData = { title, content, link, category };
            uploadFile(reqData, uploadPost);
        }
    };

    const uploadFile = async (reqData, cb) => {
        if (imgChanged) {
            const sid = shortid.generate();
            const storage = await loadStorage();
            const storageRef = storage.ref(`post/${sid}`);
            const uploadTask = storageRef.put(inputFileEl.current.files[0]);
            uploadTask.on('state_changed',
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                err => {
                    switch (err.code) {
                        case 'storage/unauthorized':
                            alert("User doesn't have permission to access the object");
                            break;
                        case 'storage/canceled':
                            alert("User canceled the upload");
                            break;
                        case 'storage/unknown':
                            alert("Unknown error occurred, inspect error.serverResponse");
                            break;
                    }
                },
                async () => {
                    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
                        .then(downloadURL => {
                            console.log(`file uploaded..\n${downloadURL}`);
                            return downloadURL;
                        });

                    const newData = {
                        ...reqData, imgName: imgName, imgPath: downloadURL, imgSaveName: sid
                    };

                    cb(newData);
                }
            );
        }
        else {
            cb(reqData);
        }
    };

    const uploadPost = (reqData) => {

        axios.patch(`http://myxd.co.kr/api/board/post/${pid}`, reqData, {
                headers: {
                    'Accept': 'application/json',
                    'Headers': 'content-type',
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                console.log(`post uploaded..\n`);
                alert('업로드 되었습니다.');
                router.push('/admin/p/list');
            })
            .catch(err => {
                console.log(err);
                alert('uncaught error occured');
                router.push('/admin/p/list');
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

                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label">제목</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <input type="text" className="form-control" placeholder={"제목을 입력하세요."} maxLength="50"
                                                   value={title}
                                                   onChange={titleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label">카테고리</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <label className="checkbox checkbox_single">
                                                <input type="checkbox" className="filled-in" value={"UI KITS"} onChange={categoryChange}/>
                                                <span>UI KITS</span>
                                            </label>
                                            <label className="checkbox checkbox_single">
                                                <input type="checkbox" className="filled-in" value={"Website"} onChange={categoryChange}/>
                                                <span>Website</span>
                                            </label>
                                            <label className="checkbox checkbox_single">
                                                <input type="checkbox" className="filled-in" value={"Mobile"} onChange={categoryChange}/>
                                                <span>Mobile</span>
                                            </label>
                                            <label className="checkbox checkbox_single">
                                                <input type="checkbox" className="filled-in" value={"Plug-in"} onChange={categoryChange}/>
                                                <span>Plug-in</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label" style={{"lineHeight":"20.4"}}>내용</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <textarea className="form-control" placeholder={"내용을 입력하세요."} maxLength={"1000"}
                                                      value={content}
                                                      onChange={contentChange}
                                            />
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label" style={{"lineHeight":"9.4"}}>이미지 업로드</label>
                                        </div>
                                        <div className={" input-group input-area"}>
                                            <div className="file-label">
                                                { img === ''
                                                    ? (
                                                        <label htmlFor={"fileUploader"} className={"add text-center"}>+<br/>이미지</label>
                                                    )
                                                    : (
                                                        <div className={"added"}>
                                                            <img src={img} alt="업로드 이미지"/>
                                                            <a href="#" className="btn-close" onClick={fileRemove}></a>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <input type="file" id="fileUploader" className="form-control-file"
                                                   ref={inputFileEl}
                                                   onChange={onFileUpload}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label">링크</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <input type="text" className="form-control" placeholder={"링크를 입력하세요."} maxLength="250"
                                                   value={link}
                                                   onChange={linkChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={"row form-btn"}>
                                        <div className={"col col-sm-12 text-center"}>
                                            <button href="#" className={"btn btn-lg btn-outline-lightgray"} onClick={cancelSubmit}>취소</button>
                                            <button href="#" type={"submit"} className={"btn btn-lg btn-primary ml-3"}>저장</button>
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
                }
                .file-label .add {
                    display: block;
                    //display: none;
                    margin: 0 auto;
                    padding: 69px 0;
                    color: #96959a;
                }
                .file-label .added {
                    position: relative;
                    width: 319px;
                    height: 180px;
                    overflow: hidden;
                }
                .file-label .added img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    max-width: 100%;
                    max-height: 100%;
                    width: auto;
                    height: auto;
                }
                .file-label .added .btn-close {
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

Update.getInitialProps = async function (ctx) {
    const { token } = nextCookie(ctx);
    const auth = !!token;
    if (!auth) {
        ctx.res.writeHead(302, { Location: '/admin/login' });
        ctx.res.end();
    }

    const pid = ctx.query.pid;
    const res = await fetch(`http://myxd.co.kr/api/board/post/${pid}`);
    const result = await res.json();

    return {
        data: result.data
    }
};

export default Update;

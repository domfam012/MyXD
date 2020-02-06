import Head from "next/head";
import Layout from '../../../include/Layout';

import { useState } from 'react';
import FilePreview from 'react-preview-file';

const List = props => {
    const onFileUpload = e => {

        console.log(e);

        const { currentTarget: { file } } = e;

        setFile(file[0]);

        console.log(file);
    };


    const [ file, setFile ] = useState({});

    return (
        <Layout>
            <Head>
                <title>Admin - New</title>
            </Head>

            <div className={"content"}>
                <div className={"row box"}>
                    <div className={"col col-sm-12"}>

                        <h1 className={"header"}>XD 올리기</h1>

                        <div className={"row"}>
                            <div className={"col col-sm-12"}>
                                <form>

                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label">제목</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <input type="text" className="form-control" placeholder={"제목을 입력하세요."}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label" style={{"lineHeight":"20.4"}}>내용</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <textarea className="form-control" placeholder={"내용을 입력하세요."}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label" style={{"lineHeight":"9.4"}}>이미지 업로드</label>
                                        </div>
                                        <div className={" input-group input-area"}>
                                            <div className="file-label">
                                                <a href="#">
                                                    <label htmlFor={"fileUploader"} className={"add text-center"}>+<br/>이미지</label>
                                                </a>
                                                <div className={"added"}>
                                                    {/*<img src="/img/@tmp/upload-img.png" alt="업로드 이미지"/>*/}
                                                    {/*<FilePreview file={file}>*/}
                                                    {/*    {(preview) => <img src={preview} />}*/}
                                                    {/*</FilePreview>*/}
                                                    <a href="#" className="btn-close"></a>
                                                </div>
                                            </div>
                                            <input type="file" id="fileUploader" className="form-control-file" onChange={e => onFileUpload(e)}/>
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        <div className={"label-area"}>
                                            <label className="col-form-label">링크</label>
                                        </div>
                                        <div className={"input-area"}>
                                            <input type="text" className="form-control" placeholder={"링크를 입력하세요."}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className={"row form-btn"}>
                            <div className={"col col-sm-12 text-center"}>
                                <a href="#" className={"btn btn-lg btn-outline-lightgray"}>취소</a>
                                <a href="#" className={"btn btn-lg btn-primary ml-3"}>저장</a>
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
                    width: 280px;
                    height: 182px;
                    border: 1px solid #eaeaea;
                }
                .file-label .add {
                    display: block;
                    //display: none;
                    margin: 0 auto;
                    padding: 69px 0;
                    color: #96959a;
                }
                .file-label .added {
                    display: none;
                    //display: block;
                    width: 100%;
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

export default List;

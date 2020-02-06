import Head from "next/head";
import Layout from '../../../include/Layout';
import Pagination from "../../../components/Pagination";

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - List</title>
            </Head>
            {/*template*/}
            <div className={"content"}>
                <div className={"row box"}>
                    <div className={"col col-sm-12"}>
                        <h1 className={"header"}>목록</h1>

                        {/*workspace*/}

                        <div className={"damper"}></div>

                        <div className={"row pl-0 pr-0"}>
                            <div className={"col"}>

                                <div className={"box-list"}>
                                    <div className={"item row"}>
                                        <div className={"col item-box-1"}>
                                            <img className={"img-list"}src={"/img/main/main_02.png"}/>
                                        </div>
                                        <div className={"col item-box-2"}>
                                            <div className={"list-title"}>
                                                Wires, free wireframe kits for Adobe XD
                                                Wires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XD
                                            </div>

                                            <p className={"list-content"}>
                                                Adobe사에서 제공하는 무료 UI Kit<br/>
                                                종류별로 사이트를 관리하게에 좋은 디자인입니다.<br/>
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                            </p>

                                        </div>
                                        <div className={"col item-box-3"}>
                                            <button className={"btn-sm btn-gray-7 mr-3"}>삭제</button>
                                            <button className={"btn-sm btn-primary"}>편집</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={"box-list"}>
                                    <div className={"item row"}>
                                        <div className={"col item-box-1"}>
                                            <img className={"img-list"}src={"/img/main/main_02.png"}/>
                                        </div>
                                        <div className={"col item-box-2"}>
                                            <div className={"list-title"}>
                                                Wires, free wireframe kits for Adobe XD
                                                Wires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XD
                                            </div>

                                            <p className={"list-content"}>
                                                Adobe사에서 제공하는 무료 UI Kit<br/>
                                                종류별로 사이트를 관리하게에 좋은 디자인입니다.<br/>
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                            </p>

                                        </div>
                                        <div className={"col item-box-3"}>
                                            <button className={"btn-sm btn-gray-7 mr-3"}>삭제</button>
                                            <button className={"btn-sm btn-primary"}>편집</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={"box-list"}>
                                    <div className={"item row"}>
                                        <div className={"col item-box-1"}>
                                            <img className={"img-list"}src={"/img/main/main_02.png"}/>
                                        </div>
                                        <div className={"col item-box-2"}>
                                            <div className={"list-title"}>
                                                Wires, free wireframe kits for Adobe XD
                                                Wires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XD
                                            </div>

                                            <p className={"list-content"}>
                                                Adobe사에서 제공하는 무료 UI Kit<br/>
                                                종류별로 사이트를 관리하게에 좋은 디자인입니다.<br/>
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                            </p>

                                        </div>
                                        <div className={"col item-box-3"}>
                                            <button className={"btn-sm btn-gray-7 mr-3"}>삭제</button>
                                            <button className={"btn-sm btn-primary"}>편집</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={"box-list"}>
                                    <div className={"item row"}>
                                        <div className={"col item-box-1"}>
                                            <img className={"img-list"}src={"/img/main/main_02.png"}/>
                                        </div>
                                        <div className={"col item-box-2"}>
                                            <div className={"list-title"}>
                                                Wires, free wireframe kits for Adobe XD
                                                Wires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XD
                                            </div>

                                            <p className={"list-content"}>
                                                Adobe사에서 제공하는 무료 UI Kit<br/>
                                                종류별로 사이트를 관리하게에 좋은 디자인입니다.<br/>
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                            </p>

                                        </div>
                                        <div className={"col item-box-3"}>
                                            <button className={"btn-sm btn-gray-7 mr-3"}>삭제</button>
                                            <button className={"btn-sm btn-primary"}>편집</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={"box-list"}>
                                    <div className={"item row"}>
                                        <div className={"col item-box-1"}>
                                            <img className={"img-list"}src={"/img/main/main_02.png"}/>
                                        </div>
                                        <div className={"col item-box-2"}>
                                            <div className={"list-title"}>
                                                Wires, free wireframe kits for Adobe XD
                                                Wires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XDWires, free wireframe kits for Adobe XD
                                            </div>

                                            <p className={"list-content"}>
                                                Adobe사에서 제공하는 무료 UI Kit<br/>
                                                종류별로 사이트를 관리하게에 좋은 디자인입니다.<br/>
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                                웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.웹사이트 버전과 모바일 버젼으로 나뉘어서 작업 할 수 있습니다.
                                            </p>

                                        </div>
                                        <div className={"col item-box-3"}>
                                            <button className={"btn-sm btn-gray-7 mr-3"}>삭제</button>
                                            <button className={"btn-sm btn-primary"}>편집</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div>
                            <hr className={"bottom-line"}></hr>
                        </div>

                        <div className={"bottom-btn-area"}>
                            <button className={"btn-sm btn-primary"}>글쓰기</button>
                        </div>

                        <div className={"paging"}>
                            <Pagination/>
                        </div>


                    </div>
                </div>
            </div>

                        {/*workspace*/}



            <style jsx>{`
                .box {
                    margin: 70px auto;
                    border: 0 solid transparent;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                
                .damper{
                    height:20px;
                 }
                
                .item{
                    height:158px;
                }
                
                .item-box-1{
                    width:271px;
                    padding-left:49px;
                    padding-right:10px;                                        
                }
                 
                .item-box-2{
                    width:579px;
                    padding-left:1px;                  
                }
                 
                .item-box-3{
                    width:260px;
                    padding-right:50px;
                    text-align:right;
                }
                 
                .list-title{
                    width: 498px;
                    height: 35px;
                    font-family: NanumGothic;
                    font-size: 30px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.33;
                    letter-spacing: -1.5px;
                    text-align: left;
                    color: #333333;     
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;            
                }
                
                .list-content{
                    margin-top:23px;
                    width: 432px;
                    height: 98px;
                    font-family: NanumGothic;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.57;
                    letter-spacing: normal;
                    text-align: left;
                    color: #666666;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                
                .box-list {                    
                    padding-top: 40px;
                    padding-bottom: 39px;
                    height: 238px;
                    border: 0 solid transparent;
                    // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                 }
                 
                .img-list{
                    width: 244px;
                    height: 162px;
                }
                
                .bottom-line{
                    width: 1060px;
                    background-color: #fcfcfc;
                    margin-top:-12px;
                 }  
                 
                 .bottom-btn-area{
                    margin-top:20px;
                    margin-right:35px;
                    text-align: right;  
                 }
                 
                .paging{
                    margin-left: 461px;
                    margin-right: 465px;
                    margin-top: 32px;
                    margin-bottom: 31px;
                }

                .header {
                    margin: 33px 35px 0;
                    padding: 0 0 34px;
                    font-weight: bold;
                    line-height: 1;
                    border-bottom: 3px solid #96959A;
                }

            `}</style>

        </Layout>
    );
};

export default List;

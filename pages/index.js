import Head from "next/head";
import Layout from '../include/Layout';
import Aside from '../include/Aside';
const Index = props => {
    return (
        <Layout>
            <div className={"clearfix"}>
                <div className={"box-right"}>
                    <div className={"main_card"}>
                        <div className={"img"}><img src="/img/main/main_01.png" alt=""/></div>
                        <div className={"box_text"}>
                            <div className={"title"}>Wires, free wireframe kits for Adobe XD</div>
                            <div className={"text"}>
                                <span className={"secondary"}>Adobe</span>사에서 제공하는 무료 UI Kit <br/>
                                종류별로 사이트를 관리하기에 좋은 디자인입니다. <br/>
                                웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                            </div>
                            <div>
                                <button className={"btn btn-primary "}>더 보기</button>
                            </div>
                        </div>
                    </div>
                    <div className={"main_card"}>
                        <div className={"img"}><img src="/img/main/main_02.png" alt=""/></div>
                        <div className={"box_text"}>
                            <div className={"title"}>Wires, free wireframe kits for Adobe XD</div>
                            <div className={"text"}>
                                <span className={"secondary"}>Adobe</span>사에서 제공하는 무료 UI Kit <br/>
                                종류별로 사이트를 관리하기에 좋은 디자인입니다. <br/>
                                웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                            </div>
                            <div>
                                <button className={"btn btn-primary "}>더 보기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Aside/>
            </div>
            <style jsx>{`
                .box-left {
                    
                }
                .main_card {
                    width: 862px;
                    margin-right: 30px;
                    float: left;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color: #ffffff;
                    margin-bottom: 50px;
                }
                .main_card .img {
                    width: 100%;
                    height: 434px;
                }
                .main_card .img img {
                    width: 100%;
                    height: 100%;
                }
                .box_text {
                    padding: 33px 0 30px 30px;
                }
                .box_text .title{
                    font-size: 30px;
                    line-height: 40px;
                    letter-spacing: -1.5px;
                }
                .box_text .text{
                    font-size: 16px;
                    line-height: 25px;
                    color: #666666;
                    margin: 23px 0 40px;
                }
            `}</style>
        </Layout>
    );
};

export default Index;

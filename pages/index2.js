import Head from "next/head";
import Layout from '../include/Layout';
import Aside from '../include/Aside';
import Pagination from "../components/Pagination";

const data = [{
    pid: "JIzl0xqK1IFyXZ3nRfFf",
    category: "UI KITS",
    content: "This new freebie was once again made by the super productive sakin kumar. A free template for an e-commerce dashboard created with Adobe XD.",
    created: {
        seconds: 1580914800,
        nanoseconds: 0
    },
    imgOriginName: "xd-e-commerce-dashboard-template-1014x487",
    imgPath: "C:\Project-myXd\img",
    imgSaveName: "XD E-commerce dashboard template",
    index: 2,
    link: "https://dribbble.com/shots/9627150-E-commerce-AdminDashboard-UI",
    title: "XD E-commerce dashboard template",
    updated: {
        seconds: 1580914800,
        nanoseconds: 0
    },
    viewCount: 0
},
    {
        pid: "NlRrtYpQWZjMZwuWBFlI",
        category: "Website",
        content: "Check out today’s XD freebie, created by Ekta Paneri A free Adobe XD template for an Agency website. Thanks for sharing with the XD community.",
        created: {
            seconds: 1580914800,
            nanoseconds: 0
        },
        imgOriginName: "free-agency-website-xd-template-1014x487",
        imgPath: "C:\Project-myXd\img",
        imgSaveName: "Free agency website XD template",
        link: "https://dribbble.com/shots/7555825-Ubiquity-Free-web-UI-XD-Template",
        post_Index: 5,
        title: "Free agency website XD template",
        updated: {
            seconds: 1580914800,
            nanoseconds: 0
        },
        viewCount: 0
    },];

let titleList = [];
// let titleList = data.title;
for (let i = 0; i<data.length; i++) {
    let title = data[i].title;
    titleList = .push(title);
    console.log(titleList)
    // let title = titleList.map();
}

const Card = props => {
    return (
        <div className={"main_card"} >
            <div className={"img"}><img src="/img/main/main_01.png" alt=""/></div>
            <div className={"box_text"}>
                <div className={"title"}>Wires, free wireframe kits for Adobe XD</div>
                <div className={"text"}>
                    <span className={"secondary"}>Adobe</span>사에서 제공하는 무료 UI Kit <br/>
                    종류별로 사이트를 관리하기에 좋은 디자인입니다. <br/>
                    웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                </div>
                <div>
                    <a className={"btn btn-primary"}>더 보기</a>
                </div>
            </div>
        </div>
    )
};

const Index = props => {
    return (
        <Layout page={"index"}>
            <div className={"clearfix"}>
                <div className={"box-left"}>
                    <div className={"main_card"} >
                        <div className={"img"}><img src="/img/main/main_01.png" alt=""/></div>
                        <div className={"box_text"}>
                            <div className={"title"}>Wires, free wireframe kits for Adobe XD</div>
                            <div className={"text"}>
                                <span className={"secondary"}>Adobe</span>사에서 제공하는 무료 UI Kit <br/>
                                종류별로 사이트를 관리하기에 좋은 디자인입니다. <br/>
                                웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                            </div>
                            <div>
                                <a className={"btn btn-primary"}>더 보기</a>
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
                    <Pagination/>
                </div>
                <Aside/>
            </div>
            <style jsx>{`
                .box-left {
                    float: left;
                }
                .main_card {
                    width: 862px;
                    margin-right: 30px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color: #ffffff;
                    margin-bottom: 50px;
                }
                // ?? last-child 왜 안먹는지....
                .main_card:nth-child(2) {
                  margin-bottom: 0;
                }
                .main_card .img {
                    width: 100%;
                }
                .main_card .img img {
                    width: 100%;
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
                .nav {
                    float: left;
                }
            @media (max-width: 1200px) {
                .main_card {
                    width: 708px;
                    margin-right: 0;
                }
                .box-left {
                    float: unset;
                    width: 100%;
                }
            }
            
            @media (max-width: 760px) {
                .main_card {
                    width: 100%;
                    margin-right: 0;
                }
                .box_text {
                    padding: 30px 40px;
                }
                .box_text .title{
                    line-height: 48px;
                    letter-spacing: -0.5px;
                }
                .box_text .text{
                    font-size: 16px;
                    line-height: 25px;
                    letter-spacing: -0.5px;
                    margin: 10px 0 40px;
                }
                .btn {
                  width: 100%;
                }
            }
               
            `}</style>
        </Layout>
    );
};

export default Index;

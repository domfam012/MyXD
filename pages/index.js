import Layout from '../include/Layout';
import Aside from '../include/Aside';
import Pagination from "../components/Pagination";
import Link from "next/link";
import React from "react";

// card 컴포넌트
const Card = props => {
    return (
        <Link href={"/p/pid.js"}>
            <div className={"main_card"}>
                <div className={"img"}><img src="/img/main/main_01.png" alt=""/></div>
                <div className={"box_text"}>
                    <div className={"title"}>{props.title}</div>
                    <div className={"text"}>
                        {props.content}
                    </div>
                    <div>
                        <Link href={"http://localhost:3000/p/pid.js"}>
                            <a className={"btn btn-primary"}>더 보기</a>
                        </Link>
                    </div>
                </div>
                <style jsx>{`
                .main_card {
                    width: 862px;
                    margin-right: 30px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color: #ffffff;
                    margin-bottom: 50px;
                    cursor: pointer;
                }
                .main_card:last-child {
                  margin-bottom: 0;
                }
                .main_card .img {
                    width: 100%;
                }
                .main_card .img img {
                    width: 100%;
                }
                .box_text {
                    padding: 33px 30px 30px 30px;
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
                .btn {
                  color: #ffffff;
                  line-height: 32px;
                }
                .btn:hover, .btn:active{
                  background: #585858;
                  line-height: 32px;
                  border-color: #585858;
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
            </div>
        </Link>
    )
};

// 메인 페이지
const Index = props => {
    // console.log(props.data);
    return (
        <Layout page={"index"}>
            <div className={"clearfix"}>
                <div className={"box-left"}>
                    {
                        props.data.map(item => (
                            <Card key={item.pid} title={item.title} content={item.content}/>
                        ))
                    }
                    <Pagination/>
                </div>
                <Aside/>
            </div>
            <style jsx>{`
                .box-left {
                    float: left;
                }
            `}</style>
        </Layout>
    );
};
// API설정
Index.getInitialProps = async function (ctx) {
    const res = await fetch('http://localhost:3000/api/board/list/15?page=1');
    const result = await res.json();

    // console.log(ctx.query);
    console.log(result);

    // if(ctx.query == ctx.query={page:'1'}) {}
    // data.typeOf()
    // console.log(result);
    // console.log(typeof result);
    // console.log(`Show data fetched. Count: ${result.data.length}`);

    return {
        data: result.data
    }
};

export default Index;

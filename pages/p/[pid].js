import Head from "next/head";
import Layout from '../../include/Layout';
import Aside from '../../include/Aside';
import { useRouter } from "next/router";
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import React from "react";
import { useState } from "react";


const Card = props => {


    
    return (
        <>
            <li>
                <Link href={`/p/${props.pid}`}>
                    <a href="#" className="inner">
                        <div className="li-img">
                            <img src={props.imgPath} alt="sample"/>
                        </div>
                        <div className="li-text">
                            <p className="title">{props.title}</p>
                            <p className="sub-title">{props.category}</p>
                        </div>
                    </a>
                </Link>
            </li>
            <style jsx>{`
                        li {
                            margin-top: 30px;
                            margin-left: 0;
                            padding: 0 20px;
                            display: block;
                            width: 254px;
                            float: left;
                            margin-right: 20px;
                        }
                        li img {
                            width: 254px;
                        }
                        .inner {
                            display: block;
                        }
                        .li-img, .li-text, .inner {
                            display: block;
                            width: auto;
                        }
                        .li-text {
                            padding: 20px 0 40px;
                            color: #666666;
                        }
                        .li-text .title {
                            font-size: 20px;
                            white-space: nowrap;
                        }
                        .sub-title {
                            font-size: 20px;
                            padding-top: 10px;
                        }
                    `}</style>
        </>
    )
}



//상세페이지
const Detail = props => {
    const [ activePage, setActivePage ] = useState(false);
    const handlePageChange = (pageNumber) => {
        router.push(`/admin/p/list?page=${pageNumber}`)
    };

    console.log(props.data);

    return (
        <Layout>
            <div className={"clearfix"}>
                <div className={"box-left"}>
                    <div className={"main_card"}>
                        <div className={"img"}><img src="/img/main/main_01.png" alt=""/></div>
                        <div className={"box_text"}>
                            <div className={"title"}>{props.data.title}</div>
                            <div className={"text"}>
                                {props.data.content}
                            </div>
                            <div>
                                <a href={props.data.link} className={"btn btn-primary"}>더 보기</a>
                            </div>
                        </div>
                        <div>
                            <div className={"detail_title"}>
                                <span>You may also like</span>
                            </div>
                            <div className={"box-list"}>
                                <ul className="list img-list">

                                    {
                                        props.asideData.map(item => (
                                            <Card key={item.pid} title={item.title} category={item.category} pid={item.pid} imgPath={item.imgPath}/>
                                        ))
                                    }

                                    {/*<li>
                                        <Link href={``}>
                                            <a href="#" className="inner">
                                                <div className="li-img">
                                                    <img src="/img/detail/detail_sample_01.png" alt="sample"/>
                                                </div>
                                                <div className="li-text">
                                                    <p className="title">Fast food XD</p>
                                                    <p className="sub-title">website template</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <a href="#" className="inner">
                                            <div className="li-img">
                                                <img src="/img/detail/detail_sample_02.png" alt="sample"/>
                                            </div>
                                            <div className="li-text">
                                                <p className="title">Biller XD</p>
                                                <p className="sub-title">landing page template</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="inner">
                                            <div className="li-img">
                                                <img src="/img/detail/detail_sample_03.png" alt="sample"/>
                                            </div>
                                            <div className="li-text">
                                                <p className="title">Football/soccer betting XD</p>
                                                <p className="sub-title">landing page</p>
                                            </div>
                                        </a>
                                    </li>*/}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Aside asideData={ props.asideData }/>
            </div>
            <style jsx global>{`
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
            //You may also like
                .detail_title {
                    position: relative;
                    width: 160px;
                    height: 23px;
                    color: #666666;
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0 auto 18px;
                }
                .detail_title:after {
                    position: absolute;
                    content: '';
                    width: 100px;
                    height: 1px;
                    border-bottom: 1px solid #96959a;
                    bottom: -17px;
                    left: 32px;
                }
                
                
            // 더보기
                  .list {
                    overflow: hidden;
                  }
                  .list li {
                    margin-top: 30px;
                    margin-left: 0;
                    padding: 0 20px;
                    display: block;
                    width: 254px;
                    float: left;
                    margin-right: 20px;
                  }
                  
            //탭      
            @media (max-width: 1200px) {
                .main_card {
                    width: 100%;
                    margin-right: 0;
                }
                .list li {
                    margin-top: 20px;
                    margin-left: 0;
                    width: 314px;
                    float: left;
                    margin-right: 20px;
                  }
                .list li:nth-child(2n){
                  }
                .li-img img{
                    width: 314px;
                }
            }
            //모바일
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
                .list li {
                    width: 100%;
                  }
                .li-img img{
                    width: 100%;
                }
            }
            `}</style>
        </Layout>
    );
};

// API설정
Detail.getInitialProps = async ctx => {

    const { pid } = ctx.query;

    console.log("API연결 pid" + pid);

    const res = await fetch(`http://localhost:3000/api/board/post/${pid}`);
    const result = await res.json();

    const asideRes = await fetch('http://localhost:3000/api/board/interest');
    const asideResult = await asideRes.json();

    console.log('Aside!!!!'+asideRes);

    switch(result.status){
        case 404 :
            console.log('not found');
            break;
    }

    return{
        data: result.data,
        asideData: asideResult.data,
    }


};

export default Detail;

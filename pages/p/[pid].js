import Layout from '../../include/Layout';
import Aside from '../../include/Aside';
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import React from "react";

const Template = props => {
    return (
        <>
            <li>
                <Link href={`/p/${props.pid}`}>
                    <a className="inner">
                        <div className="li-img">
                            <img src={props.imgPath} alt="sample"/>
                        </div>
                        <div className="li-text">
                            <p className="title">{props.title}</p>
                        </div>
                    </a>
                </Link>
            </li>
            <style jsx>{`
                li {
                    display: block;
                    width: calc(33% - 31px);
                    float: left;
                    margin-right: 20px;
                }
                li:first-child {
                    margin-left: 30px;
                }
                li:last-child {
                    margin-right: 30px;
                }
                li img {
                    width: 100%;
                    height: 143px;
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
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    
                }
                .sub-title {
                    font-size: 20px;
                    padding-top: 10px;
                }
                
                @media (max-width: 1200px) {
                    li {
                        margin: 20px 20px 0 0;
                        width: calc(50% - 40px);
                    }
                    li:nth-child(3) {
                        margin-left: 30px;
                    }
                    li img {
                    width: 100%;
                    height: 100%;
                }
                }
                //모바일
                @media (max-width: 760px) {
                     li {
                        width: 100%;
                        margin-left: 0;
                        margin-right: 0;
                      }
                      li:nth-child(1) {
                        margin-left: 0;
                      }
                      li:nth-child(3) {
                        margin-left: 0;
                      }
                }            
           `}</style>
        </>
    )
};

//상세페이지
const Detail = props => {
    return (
        <Layout>
            <div className={"clearfix"}>
                <div>
                    <div className={"main_card"}>
                        <div className={"img"}><img src={props.data.imgPath} alt=""/></div>
                        <div className={"box_text"}>
                            <div className={"title"}>{props.data.title}</div>
                            <div className={"text"}>
                                {props.data.content}
                            </div>
                            <div>
                                <a href={props.data.link} className={"btn btn-primary"}>다운로드</a>
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
                                            <Template key={item.pid} title={item.title} category={item.category} pid={item.pid} imgPath={item.imgPath}/>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Aside asideData={ props.asideData }/>
            </div>
            <style jsx>{`
                .main_card {
                    width: calc(100% - 298px);
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
                    height: 506px;
                    background: #d3d3d3;
                    text-align: center;
                }
                .main_card .img img {
                    width: 100%;
                    height: 100%;
                }
                .box_text {
                    padding: 33px 30px 30px 30px;
                }
                .box_text .title{
                    font-size: 30px;
                    line-height: 40px;
                    letter-spacing: -1.5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #116edd;
                }
                .box_text .text{
                    font-size: 16px;
                    line-height: 25px;
                    color: #666666;
                    margin: 23px 0 40px;
                    display: -webkit-box;
                    white-space: normal;
                    height: 73px;
                    word-wrap: break-word;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    }
                .btn {
                  color: #ffffff;
                  line-height: 33px;
                }
                .btn:hover {
                  line-height: 33px;
                }
                .btn:active{
                  line-height: 33px;
                }
                .nav {
                  float: left;
                }
             //You may also like
                .detail_title {
                    position: relative;
                    width: 180px;
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
                  .box-list {
                    padding-top: 19px;
                  }
                  .list {
                    overflow: hidden;
                  }
            //탭      
            @media (max-width: 1200px) {
                .main_card {
                    width: 100%;
                    margin-right: 0;
                }
                .main_card .img {
                    width: 100%;
                    height: 100%
                }
                .main_card .img img {
                    width: 100%;
                    height: 100%
                }
                .main_card .text {
                    height: 70px;
                }
            }
            //모바일
            @media (max-width: 760px) {
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
                .list {
                padding : 0 40px;
                }
            }
            `}</style>
        </Layout>
    );
};

// API설정
Detail.getInitialProps = async ctx => {
    const { pid } = ctx.query;
    const res = await fetch(`http://13.209.55.219/api/board/post/${pid}`);
    const result = await res.json();

    const asideRes = await fetch(`http://myxd.co.kr/api/board/interest`);
    const asideResult = await asideRes.json();

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

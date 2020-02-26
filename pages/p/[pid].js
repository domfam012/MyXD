import Layout from '../../components/Layout';
import Aside from '../../components/Aside';
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import React from "react";
import Head from "next/head";

// 연관 포스트 ('You may also like')
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
                    :first-child {
                        margin-left: 30px;
                    }
                    :last-child {
                        margin-right: 30px;
                    }
                    .inner {
                        display: block;
                        .li-img, .li-text, .inner {
                            display: block;
                            width: auto;
                        }
                        .li-img {
                            img {
                                width: 100%;
                                height: 143px;
                            }
                        }
                        .li-text {
                            padding: 20px 0 40px;
                            color: #666666;
                            .title {
                                font-size: 20px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
                @media (max-width: 1200px) {
                    li {
                        margin: 20px 20px 0 0;
                        width: calc(50% - 40px);
                        :nth-child(3) {
                            margin-left: 30px;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                //모바일
                @media (max-width: 760px) {
                     li {
                        width: 100%;
                        margin-left: 0;
                        margin-right: 0;
                          :nth-child(1) {
                            margin-left: 0;
                          }
                          :nth-child(3) {
                            margin-left: 0;
                          }
                      }
                }            
           `}</style>
        </>
    )
};

//상세페이지
const Detail = props => {
    const { data, asideData, relatedData } = props;

    return (
        <Layout>

            <Head>
                <title>Adobe XD 템플릿 - {data.title}</title>
                <meta name="apple-mobile-web-app-title" content={`Adobe XD 템플릿 - ${data.title}`}/>
                <meta name="description" content={`Adobe XD 템플릿 - ${data.title}`}/>
                <meta name="keywords" content={`${data.category} 어도비 Adobe XD`}/>
                <meta property="og:title" content={`Adobe XD 템플릿 - ${data.title}`}/>
                <meta property="og:description" content={`${data.title}. Adobe XD 무료 템플릿을 받아보세요.`}/>
            </Head>

            <div className={"clearfix"}>
                <div>
                    {/* 상세 포스트 */}
                    <div className={"main_card"}>
                        {/* 이미지 */}
                        <div className={"img"}><img src={data.imgPath} alt=""/></div>
                        <div className={"box_text"}>
                            {/* 제목 */}
                            <div className={"title"}>{data.title}</div>
                            {/* 내용 */}
                            <div className={"text"}>
                                {data.content}
                            </div>
                            {/* 링크 페이지 */}
                            <div>
                                <a href={data.link} className={"btn btn-primary"}>다운로드</a>
                            </div>
                        </div>

                        <div>
                            <div className={"detail_title"}>
                                <span>함께보면 좋을것 같아요</span>
                            </div>
                            <div className={"box-list"}>
                                <ul className="list img-list">
                                    {/* 연관 포스트 */}
                                    {
                                        relatedData.map(item => (
                                            <Template key={item.pid} title={item.title} category={item.category} pid={item.pid} imgPath={item.imgPath}/>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 인기템플릿 */}
                <Aside asideData={ asideData }/>
            </div>
            <style jsx>{`
                .main_card {
                    width: calc(100% - 298px);
                    margin-right: 30px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color: #ffffff;
                    margin-bottom: 50px;
                    :last-child {
                        margin-bottom: 0;
                    }
                    .img {
                        width: 100%;
                        height: 506px;
                        background: #d3d3d3;
                        text-align: center;
                        img {
                            width: auto;
                            max-width: 100%;
                            height: 100%;
                        }
                    }
                    .box_text {
                            padding: 33px 30px 30px 30px;
                        .title  {
                            font-size: 30px;
                            line-height: 40px;
                            letter-spacing: -1.5px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            color: #333333;
                        }
                        .text{
                            font-size: 16px;
                            line-height: 25px;
                            color: #666666;
                            margin: 23px 0 40px;
                            display: -webkit-box;
                            white-space: pre-line;
                            word-wrap: break-word;
                        }
                        .btn {
                          color: #ffffff;
                          line-height: 33px;
                            :hover,:active {
                              line-height: 33px;
                            }
                        }
                    }
                }
                .nav {
                  float: left;
                }
                .detail_image {
                    padding-top:30px;
                }
                .detail_image img {
                    width:auto;
                    max-width:100%;
                }
                
                //You may also like
                .detail_title {
                    position: relative;
                    width: 100%;
                    height: 23px;
                    color: #666666;
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0 auto 18px;
                    text-align:center;
                }
                .detail_title:after {
                    position: absolute;
                    content: '';
                    width: 100px;
                    height: 1px;
                    border-bottom: 1px solid #96959a;
                    bottom: -17px;
                    left:50%;
                    margin-left:-50px;
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
                    .img {
                        width: 100%;
                        height: 100%;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            //모바일
            @media (max-width: 760px) {
                .box_text {
                    padding: 30px 40px;
                    .title{
                        line-height: 48px;
                        letter-spacing: -0.5px;
                    }
                    .text{
                        font-size: 16px;
                        line-height: 25px;
                        letter-spacing: -0.5px;
                        margin: 10px 0 40px;
                    }
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
    const res = await fetch(`http://myxd.co.kr/api/board/post/${pid}`);
    const result = await res.json();

    // 연관 포스트 불러올 때,
    // category 여러 개일 경우 임의로 카테고리 하나 선택
    const { category } = result.data;
    const cat = category[Math.floor(Math.random()*category.length)];

    const asideRes = await fetch(`http://myxd.co.kr/api/board/interest`);
    const asideResult = await asideRes.json();

    const relatedRes = await fetch(`http://myxd.co.kr/api/board/related?pid=${pid}&category=${cat}`);
    const relatedResult = await relatedRes.json();

    switch(result.status){
        case 404 :
            console.log('not found');
            break;
    }

    return{
        data: result.data,
        asideData: asideResult.data,
        relatedData: relatedResult.data
    }


};

export default Detail;

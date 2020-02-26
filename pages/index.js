/**
 *  메인 페이지
 *
 */

import React from "react";
import Layout from '../components/Layout';
import Aside from '../components/Aside';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "react-js-pagination";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDoubleRight} from '@fortawesome/pro-light-svg-icons';
import {faChevronDoubleLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronRight} from '@fortawesome/pro-light-svg-icons';
import fetch from "isomorphic-unfetch";
import Head from "next/head";

// card 컴포넌트
const Card = props => {
    return (
        <Link href={`/p/${props.pid}`}>
            <div className={"main_card"}>
                <div className={"img"}><img src={props.imgPath} alt="temp"/></div>
                <div className={"box_text"}>
                    <div className={"title"}>{props.title}</div>
                    <div className={"text"}>
                        {props.content}
                    </div>
                    <div>
                        <Link href={`${props.link}`}>
                            <a className={"btn btn-primary"}>더 보기</a>
                        </Link>
                    </div>
                </div>
                <style jsx>{`
                .main_card {
                    width: calc(100% - 298px);
                    margin-right: 30px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color: #ffffff;
                    margin-bottom: 50px;
                    cursor: pointer;
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
                            :hover,:active {
                              line-height: 33px;
                            }
                        }
                    }
                }
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
                        .text {
                        height: 70px;
                      }
                    }
                }
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
                }
            `}</style>
            </div>
        </Link>
    )
};

// 메인 페이지
const Index = props => {
    // console.log(`${process.env.ASSET_PREFIX}`);

    let activePage = props.activePage;
    const router = useRouter();

    // 페이지네이션 페이지 이동시
    const handlePageChange = (pageNumber) => {
        window.scrollTo(0, 0);
        router.push(`/?page=${pageNumber}`);
    };

    return (

        <Layout page={"index"}>
            <Head>
                <title>Adobe XD 무료 템플릿을 만나보세요 - My XD</title>
                <meta name="apple-mobile-web-app-title" content="MyXD"/>
                <meta name="description" content="Adobe XD 무료 템플릿을 만나보세요 - My XD"/>
                <meta name="keywords" content="어도비 Adobe XD"/>
                <meta property="og:title" content="Adobe XD 무료 템플릿을 만나보세요 - My XD"/>
                <meta property="og:description" content="Adobe XD 무료 템플릿을 만나보세요 - My XD"/>
            </Head>

            <div>
                <div>
                    {
                        props.data.map(item => (
                            //Card 컴포넌트
                            <Card key={item.pid} title={item.title} content={item.content} imgPath={item.imgPath}
                                  pid={item.pid} link={item.link}/>
                        ))
                    }
                    <div className={"nav"}>
                        {/*pagination 컴포넌트*/}
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={15}
                            totalItemsCount={props.total}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            linkClass="page-link"
                            innerClass="pagination text-center"
                            itemClass="page-item"
                            activeClass="active"
                            linkClassLast="last"
                            linkClassNext="next"
                            linkClassPrev="prev"
                            linkClassFirst="first"
                            firstPageText={<FontAwesomeIcon icon={faChevronDoubleLeft}/>}
                            prevPageText={<FontAwesomeIcon icon={faChevronLeft}/>}
                            nextPageText={<FontAwesomeIcon icon={faChevronRight}/>}
                            lastPageText={<FontAwesomeIcon icon={faChevronDoubleRight}/>}
                        />
                    </div>
                </div>
                {/*aside 컴포넌트*/}
                <Aside asideData={props.asideData}/>
            </div>
            <style jsx>{`
                .nav {
                    width: 100%;
                    margin-top: 30px;
                    margin-bottom: 70px;
                    padding-right: 332px;
                }
                @media (max-width: 1200px) {
                    .nav {
                          padding-right : 0;
                    }
                }
            `}</style>
        </Layout>
    );
};

Index.getInitialProps = async function (ctx) {
    const page = ctx.query.page || '1'; // default page index
    const res = await fetch(`http://myxd.co.kr/api/board/list/15?page=${page}`); // get /api/board/lsit/[limit]?page={page}
    const result = await res.json();

    const asideRes = await fetch(`http://myxd.co.kr/api/board/interest`);
    const asideResult = await asideRes.json();

    return {
        data: result.data,
        activePage: Number(page),
        asideData: asideResult.data,
        total: result.total
    }
};

export default Index;

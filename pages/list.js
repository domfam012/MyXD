import React from "react";
import Layout from '../components/Layout';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "react-js-pagination";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDoubleRight} from '@fortawesome/pro-light-svg-icons';
import {faChevronDoubleLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronRight} from '@fortawesome/pro-light-svg-icons';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import Head from "next/head";

//리스트 template 컴포넌트
const Temp = props => {
    return (
        <>
            <li>
                <Link href={`/p/${props.pid}`}>
                    <a href="#" className="inner">
                        <div className="li-img">
                            <img src={props.imgPath} alt="temp"/>
                        </div>
                        <div className="li-text">
                            <span className="title">{props.title}</span>
                        </div>
                    </a>
                </Link>
            </li>
            <style jsx>{`
                li {
                display: block;
                width: calc(33.3% - 18px);
                float: left;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: var(--white);
                background-color: #ffffff;
                margin: 0 27px 30px 0;
                    :nth-child(3n) {
                        margin-right: 0;
                    }
                    .inner {
                        display: block;
                        .li-img, .li-text, .inner {
                            display: block;
                            padding: 0;
                        }
                        .li-img {
                            width: 100%;
                            height: 209px;
                            background: #d3d3d3;
                            text-align: center;
                            img {
                                width: auto;
                                max-width: 100%;
                                height: 100%;
                            }
                        }
                        .li-text {
                            height: 84px;
                            padding: 28px 30px;
                            background: #ffffff;
                            .title {
                                color: #333333;
                                line-height: 26px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 313px;
                                display: block; 
                            }
                        }
                    }
                }
                @media (max-width: 1200px) {
                    li {
                        display: block;
                        width: calc(50% - 27px);
                        float: left;
                        background: none;
                        border: 0;
                        margin: 30px 27px 0 0;
                        .inner {
                            display: block;
                            :nth-child(3n) {
                                margin-right: 27px;
                            }
                            :nth-child(2n) {
                                margin-right: 0;
                            }
                            .li-img {
                                height: 100%;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .li-text {
                                height: 78px;
                                padding: 28px 30px;
                            }
                        }
                    }
                }
                @media (max-width: 760px){
                    li {
                    width: 100%;
                    margin-right: 0;
                        .li-img {
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .li-text .title {
                            width: 220px;
                        }
                    }
                }
            `}</style>
        </>
    );
};

//리스트 페이지
const Index = props => {
    const { data, activePage, total, activeMenu } = props;

    // 페이지네이션 페이지 이동시
    const router = useRouter();
    const handlePageChange = (pageNumber) => {
        window.scrollTo(0, 0);
        router.push(`/list/?page=${pageNumber}`);
    };

    let category = "UI KITS";
    switch (activeMenu) {
        case 'uikits': {
            category = "UI KITS";
            break;
        }
        case 'website': {
            category = "웹사이트";
            break;
        }
        case 'mobile': {
            category = "모바일";
            break;
        }
        case 'plugin': {
            category = "플러그인";
            break;
        }
    }

    return (
        <Layout page={"list"} activeMenu={activeMenu}>

            <Head>
                <title>Adobe XD {category} 템플릿 - MyXD</title>
                <meta name="apple-mobile-web-app-title" content={`어도비 XD - My Adobe XD ${category}`}/>
                <meta name="description" content={`Adobe XD ${category} 템플릿 - MyXD`}/>
                <meta name="keywords" content={`어도비 Adobe XD ${category} ${activeMenu}`}/>
                <meta property="og:title" content={`어도비 XD - ${category}`}/>
                <meta property="og:description" content={`Adobe XD ${category} 템플릿 - MyXD`}/>
            </Head>

            <div id="_list" className={"clearfix"}>
                <ul className="list img-list">
                    {
                        data.map(item => (
                            <Temp key={item.pid} title={item.title} imgPath={item.imgPath} pid={item.pid}/>
                        ))
                    }
                </ul>
            </div>
            <div className={"nav"}>
                {/*pagination 컴포넌트*/}
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={15}
                    totalItemsCount={total}
                    pageRangeDisplayed={4}
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
            <style jsx>{`
                .list {
                    margin: 0 auto;
                    overflow: hidden;
                    padding-bottom: 5px;
                }
                .nav {
                    width: 100%;
                    margin-top: 30px;
                    margin-bottom: 70px;
                }
                @media (max-width: 1200px) {
                    .list {
                        margin: 0 auto;
                        overflow: hidden;
                    }
                }
            `}</style>
        </Layout>
    );
};

Index.getInitialProps = async function (ctx) {
    // 선택된 페이지 default: 1
    const page = ctx.query.page || '1';

    // 선택된 카테고리 default: 'uikits'
    const cat = ctx.query.cat || 'uikits';

    // /api/board/list/{limit(불러올 데이터 개수)}?cat={category}&page={page_number}
    const res = await fetch(`http://myxd.co.kr/api/board/list/15?cat=${cat}&page=${page}`);
    const result = await res.json();

    // data : 글 data
    // activePage : 현재 page number
    // total : 전체 글 개수
    // activeMenu : 현재 카테고리
    return {
        data: result.data,
        activePage: Number(page),
        total: result.total,
        activeMenu: cat
    }
};
export default Index;

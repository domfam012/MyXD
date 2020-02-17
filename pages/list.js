import React from "react";
import Layout from '../include/Layout';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "react-js-pagination";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDoubleRight} from '@fortawesome/pro-light-svg-icons';
import {faChevronDoubleLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronLeft} from '@fortawesome/pro-light-svg-icons';
import {faChevronRight} from '@fortawesome/pro-light-svg-icons';
import fetch from 'isomorphic-unfetch';

//리스트 template 컴포넌트
const Temp = props => {
    return (
        <div>
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
                width: calc(100% - 827px);
                float: left;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: var(--white);
                margin: 0 27px 30px 0;
              }
              li:nth-child(3n) {
                margin-right: 0;
              }
              .inner {
                display: block;
              }
              .li-img, .li-text, .inner {
                display: block;
                width: auto;
                padding: 0;
              }
              .li-img img {
                width: 100%;
                height: 100%;
              }
              .li-text {
                height: 84px;
                padding: 28px 30px;
                background: #ffffff;
              }

              @media (max-width: 1200px) {
                  li {
                    display: block;
                    width: calc(50% - 27px);
                    float: left;
                    background: none;
                    border: 0;
                    margin: 30px 27px 0 0;
                  }
                  li:nth-child(3n) {
                    margin-right: 27px;
                  }
                  .mt-0 {
                    margin-top: 30px !important;
                  }
                  li:nth-child(2n) {
                    margin-right: 0;
                  }
                  .li-img img{
                      width: 100%;
                      height: 100%;
                    }
                  .inner {
                    display: block;
                  }
                  .li-text {
                    height: 78px;
                    padding: 28px 30px;
                  }
              }
                
              @media (max-width: 760px){
                    li {
                      width: 100%;
                      margin-right: 0;
                    }
                    li .li-img img{
                      width: 100%;
                      height: 100%;
                    }
                    .li-text {
                      height: 78px;
                      padding: 28px 30px;
                    }
              }
         `}</style>
        </div>
    );
};

//리스트 페이지
const Index = props => {

    let activePage = props.activePage;
    const router = useRouter();

    const handlePageChange = (pageNumber) => {
        window.scrollTo(0, 0);
        router.push(`/list/?page=${pageNumber}`);
    };

    return (
        <Layout page={"list"}>
            <div id="_list" className={"clearfix"}>
                <ul className="list img-list">
                    {
                        props.data.map(item => (
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
                    totalItemsCount={props.total}
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

    const page = ctx.query.page || '1';
    const res = await fetch(`http://13.209.55.219/api/board/list/15?page=${page}`);
    const result = await res.json();

    return {
        data: result.data,
        activePage: Number(page),
        total: result.total
    }
};
export default Index;

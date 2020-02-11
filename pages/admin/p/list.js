import Head from "next/head";
import Layout from '../../../include/Layout';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDoubleRight} from "@fortawesome/pro-solid-svg-icons";
import Pagination from "react-js-pagination";

const BoxList = props => {
    const { router, item, onDelete } = props;
    const pid = item.pid;

    const deleteItem = () => {
        const check = confirm('해당 글을 삭제하시겠습니까?');
        if (check) {
            fetch(`http://localhost:3000/api/board/post/${pid}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Headers': 'content-type',
                    'Content-Type': 'application/json'
                }
            }).then(function (json) {
                alert('삭제 되었습니다.');
                onDelete(pid);

                /**
                 *  삭제시 아이템이 줄어들기만함..
                 *  (화면 내에 아이템 개수 줄어드는 상태)
                 *  페이지 리로드로 해야될듯..?
                 *
                 */

            }).catch(function(err){
                console.log(err);
            });
        }
    };

    const updateItem = () => {
        const check = confirm('해당 글을 수정하시겠습니까?');
        if (check) {
            router.push(`/admin/p/${pid}/update`);
        }
    };

    return (
        <div className={"box-list"}>
            <div className={"item row"}>
                <div className={"col item-box-1"}>
                    <img className={"img-list"} src={ item.imgPath }/>
                </div>
                <div className={"col item-box-2"}>
                    <div className={"list-title"}>
                        { item.title }
                    </div>

                    <p className={"list-content"}>
                        { item.content }
                    </p>

                </div>
                <div className={"col item-box-3"}>
                    <button className={"btn-sm btn-gray-7 mr-3"} onClick={deleteItem}>삭제</button>
                    <button className={"btn-sm btn-primary"} onClick={updateItem}>편집</button>
                </div>
            </div>

            <hr className={"box-bottom-line"}/>
            <style jsx>{`
                .item{
                    height:158px;
                }
                
                .item-box-1{
                    width:271px;
                    padding-left:64px;
                    padding-right:10px;                                        
                }
                
                .item-box-2{
                    width:579px;
                    padding-left:1px;
                    padding-top: 1px;               
                }
                
                .item-box-3{
                    width:260px;
                    padding-right:65px;
                    text-align:right;
                }
                
                .list-title{
                    width: 498px;
                    height: 35px;
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
                    padding-left: 38px;     
                }
                
                .list-content{
                    margin-top: 22px;
                    width: 432px;
                    height: 98px;
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
                    padding-left: 38px;
                }
                
                .box-list {                    
                    padding-top: 39px;
                    padding-bottom: 39px;
                    height: 238px;
                    border: 0 solid transparent;
                    // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                
                .box-list:hover {
                    box-shadow: 3px 3px 12px 0 rgba(0, 0, 0, 0.24);
                    background-color: var(--white);
                }
                
                .img-list{
                    width: 278px;
                    height: 162px;
                }
                
                .box-bottom-line{
                    margin-top: 41px;
                    width:1060px;
                    color:#fcfcfc;
                }
            `}</style>
        </div>
    )
};

const List = props => {
    const router = useRouter();
    const [ box, setBox ] = useState(props.data);
    const [ activePage, setActivePage ] = useState(false);
    const handlePageChange = (pageNumber) => {
        router.push(`/admin/p/list?page=${pageNumber}`)
    };

    const handleRemove = pid => {
        console.log('handling remove..')
        const newBox = box.filter(item => item.pid !== pid);
        setBox(newBox);
    };

    return (
        <Layout>
            <Head>
                <title>Admin - List</title>
            </Head>

            <div className={"content"}>
                <div className={"row box"}>
                    <div className={"col col-sm-12"}>
                        <h1 className={"header"}>목록</h1>
                        <div className={"damper"}></div>

                        <div className={"row pl-0 pr-0"}>
                            <div className={"col pl-0 pr-0"}>

                                {
                                    box.map(item => (
                                        <BoxList
                                            key={item.pid}
                                            router={router}
                                            item={item}
                                            onDelete={handleRemove}
                                        />
                                    ))
                                }

                            </div>
                        </div>

                        <div className={"bottom-btn-area"}>
                            <Link href={"/admin/p/new"}>
                                <button className={"btn-sm btn-primary"}>글쓰기</button>
                            </Link>
                        </div>

                        <div className={"paging"}>
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={450}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange}
                                linkClass="page-link"
                                innerClass="pagination text-center"
                                itemClass="page-item"
                                activeClass="current"
                                linkClassLast="last"
                                linkClassNext="next"
                                linkClassPrev="prev"
                                linkClassFirst="first"
                                lastPageText={<FontAwesomeIcon icon={faChevronDoubleRight} />}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .box {
                    margin: 70px auto;
                    border: 0 solid transparent;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    background-color:#ffffff;
                }
                
                .header {
                    margin: 33px 35px 0;
                    padding: 0 0 34px;
                    font-weight: bold;
                    line-height: 1;
                    border-bottom: 3px solid #96959A;
                }

                .damper{
                    height:20px;
                }
                
                .bottom-btn-area{
                    margin-top:42px;
                    margin-right:35px;
                    text-align: right;  
                }
                
                .paging{
                    margin-left: 466px;
                    margin-right: 465px;
                    margin-top: 32px;
                    margin-bottom: 31px;
                }
                
                
                
            `}</style>

        </Layout>
    );
};

List.getInitialProps = async (ctx) => {
    const page = ctx.query.page || '1';
    const res = await fetch(`http://localhost:3000/api/board/list/5?page=${page}`);
    const result = await res.json();

    console.log(result);

    return {
        data: result.data
    };
};

export default List;

import Head from "next/head";
import Layout from '../../../include/Layout';
import Pagination from "../../../components/Pagination";
import Link from 'next/link';
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const BoxList = props => {
    const deleteItem = () => {
        const check = confirm('해당 글을 삭제하시겠습니까?');
        if (check) {
            fetch(`http://localhost:3000/api/board/post/${props.pid}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Headers': 'content-type',
                    'Content-Type': 'application/json'
                }
            }).then(function (json) {
                // 일단 db 제대로 값 지워지는지만 확인함
                alert('good')

                // /admin/p/list 로 이동이 아니라.. 현재 페이지에서 해당 박스리스트만 삭제 되도록!(state 로 관리)
            }).catch(function(err){
                console.log(err);
            });
        }
    };

    const updateItem = () => {
        const check = confirm('해당 글을 수정하시겠습니까?');
        if (check) {
            fetch('localhost:3000/api/board/post/${pid}', {
                method: 'UPDATE',
                headers: {
                    // 없이 되는지 테스트!!!
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(function (json) {
                props.router.push(`/admin/p/update/${props.pid}`);
            }).catch(function(err){
                console.log(err);
            });
        }
    };

    return (
        <div className={"box-list"}>
            <div className={"item row"}>
                <div className={"col item-box-1"}>
                    <img className={"img-list"} src={"/img/main/main_02.png"}/>
                </div>
                <div className={"col item-box-2"}>
                    <div className={"list-title"}>
                        { props.title }
                    </div>

                    <p className={"list-content"}>
                        { props.content }
                    </p>

                </div>
                <div className={"col item-box-3"}>
                    <button className={"btn-sm btn-gray-7 mr-3"} onClick={() => deleteItem()}>삭제</button>
                    <button className={"btn-sm btn-primary"} onClick={() => updateItem}>편집</button>
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
    console.log(router);

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
                                    props.data.map(item => (
                                        <BoxList
                                            key={item.pid}
                                            pid={item.pid}
                                            title={item.title}
                                            content={item.content}
                                            router={router}
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
                            <Pagination/>
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

List.getInitialProps = async function() {
    const res = await fetch("http://localhost:3000/api/board/list/5");
    const result = await res.json();

    return {
        data: result.data
    };
};

export default List;

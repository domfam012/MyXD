import Error from 'next/error';
import fetch from 'isomorphic-unfetch';
import React from "react";

const Page = ({errorCode, stars}) => {
    return (
        <>
            <div id="wrap" className="wrap error_wrap">
                <div className="error_page">
                    <img src="/img/common/error.png" alt="에러이미지"/>
                    <div className="error_title">404 Page not found</div>
                    <div className="error_contents">요청하신 페이지를 찾을 수 없습니다.<br/>
                        삭제된 주소거나, 일시적으로 사용할 수 없습니다.
                    </div>
                </div>
            </div>
            <style jsx>{`
                body {
                background: #F8F8F8;
                font-family: NanumGothic;
            }
                .error_wrap {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 1000;
                background: #F8F8F8;
            }
                .error_page {
                position: fixed;
                text-align: center;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);

            }
                .error_title {
                line-height: 40px;
                margin: 21px 0 44px;
                font-size: 40px;
                color: #116EDD;
                font-weight: bold;
            }
                .error_contents {
                text-align: center;
                line-height: 32px;
                font-size: 20px;
                color: #333333;
            }
            `}</style>
        </>
    )
};

Page.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const errorCode = res.statusCode > 200 ? res.statusCode : false;
    const json = await res.json();

    // console.log(json);
    // console.log(res.statusCode);
    // console.log(errorCode);

    return { errorCode: 404, stars: json.stargazers_count };
};

export default Page;

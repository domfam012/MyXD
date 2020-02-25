import Head from 'next/head';
import Header from './Header';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import {useRouter} from "next/router";
import React from "react";

const Layout = props => {
    const {page, activeMenu} = props;

    // 관리자 페이지 접속인지 확인
    const router = useRouter();
    const path = router.pathname.split('/');

    // 페이지에 따른 반응형 처리
    const isAdmin = path[1] === 'admin';
    let isAdminLogin = false;
    if (isAdmin) {
        isAdminLogin = path[2] === 'login' || path[2] === '';
    }
    const isResponsive = (isAdmin && !isAdminLogin) ? false : true;
    let containerClass = '';
    containerClass = page === 'list' ? 'list-container' : '';
    containerClass += isResponsive ? " container" : " container-xl";

    return (
        <>
            {/* 공통 head 영역 */}
            <Head>
                <title>MyXD - 무료 어도비 XD 템플릿</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <meta name="Referrer" content="origin"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="apple-mobile-web-app-title" content="MyXD"/>
                <meta name="robots" content="index,follow"/>
                <meta name="description" content="MyXD 에서 다양한 무료 어도비 XD 템플릿을 만나 보세요"/>
                <meta name="keywords" content="어도비 Adobe XD"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="어도비 XD - My Adobe XD"/>
                <meta property="og:description" content="무료 어도비 XD 템플릿을 만나 보세요"/>
                <meta property="og:image" content="/img/common/logo_og.png"/>
                <meta property="og:url" content="http://myxd.co.kr/"/>

                {/* app 파비콘 설정 */}
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/img/common/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/img/common/android-icon-192x192.png"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/img/common/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>


                {/* script */}
                <script src="/js/jquery.js"/>
                <script src="/js/bootstrap.min.js"/>
                <script src="/js/common.js"/>
            </Head>

            {isAdmin
                ? (
                    <HeaderAdmin/>
                )
                : (
                    <Header isResponsive={isResponsive} activeMenu={activeMenu}/>
                )
            }

            <div className={containerClass}>
                {props.children}
            </div>

            <Footer isResponsive={isResponsive}/>
        </>
    )
};

export default Layout;

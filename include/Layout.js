import Head from 'next/head';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

import {useRouter} from "next/router";

const Layout = props => {
    // 관리자 페이지 접속인지 확인
    const router = useRouter();
    const path = router.pathname.split('/');
    const isAdmin = path[1] === 'admin';
    let isAdminLogin = false;
    if(isAdmin){
        isAdminLogin =  path[2] === 'login' || path[2] === '';
    }
    const isResponsive = (isAdmin && !isAdminLogin) ? false : true;
    console.log(isResponsive);

    const { page } = props;

    let containerClass = '';
    containerClass = page === 'list' ? 'list-container' : '';
    containerClass += isResponsive ? " container" : " container-xl";

    return (
        <>
            <Head>
                <title>MyXD</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <meta name="Referrer" content="origin"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="apple-mobile-web-app-title" content="MyXD"/>
                <meta name="robots" content="index,nofollow"/>
                <meta name="description" content="MyXD"/>
                <meta name="keywords" content="MyXD"/>
                <script src="/js/jquery.js"/>
                <script src="/js/bootstrap.min.js"/>
                <script src="/js/common.js"/>
            </Head>
            <Header isResponsive={isResponsive}/>
            <div className={containerClass}>
                {props.children}
            </div>

            <Footer isResponsive={isResponsive}/>
        </>
    )
};

export default Layout;

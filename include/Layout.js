import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import {useRouter} from "next/router";

const Layout = props => {
    // 관리자 페이지 접속인지 확인
    const router = useRouter();
    const isAdmin = router.pathname.split('/')[1] === 'admin';

    return (
        <>
            <Head>
                <title>MyXD</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <meta name="Referrer" content="origin"/>
                <meta lhttpEquiv="X-UA-Compatible" content="IE=Edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="apple-mobile-web-app-title" content="MyXD"/>
                <meta name="robots" content="index,nofollow"/>
                <meta name="description" content="MyXD"/>
                <meta name="keywords" content="MyXD"/>
                <script src="/js/jquery.js"/>
                <script src="/js/bootstrap.min.js"/>
                <script src="/js/common.js"/>
            </Head>
            <Header/>
            <div className={isAdmin ? "container-xl" : "container"}>
                {props.children}
            </div>
            <Footer/>
        </>
    )
};

export default Layout;

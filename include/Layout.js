import Head from 'next/head';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

import {useRouter} from "next/router";

const Layout = props => {
    // 관리자 페이지 접속인지 확인
    const router = useRouter();
    const isAdmin = router.pathname.split('/')[1] === 'admin';

    const { page } = props;
    let containerClass;

    if(page == index) {
        console.log()
    }

    switch(page){
        case 'list' :
            return console.log(page);
    }

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
            <Header/>
            {/*<img src="/img/@tmp/test-admin-new.png" alt="업로드 이미지" style={{"width":"1440px","opacity":"0.5","position":"absolute","top":"0","left":"0"}}/>*/}
            <div className={isAdmin ? "container-xl" : "container"}>
                {props.children}
            </div>
            <Footer/>
        </>
    )
};

export default Layout;

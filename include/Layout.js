import Head from 'next/head';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const Layout = props => (
    <>
        <Head>
            <title>MyXD</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
            <meta name="Referrer" content="origin"/>
            <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="apple-mobile-web-app-title" content="종합금융정보서비스"/>
            <meta name="robots" content="index,nofollow"/>
            <meta name="description" content="종합금융정보서비스"/>
            <meta name="keywords" content="종합금융정보서비스"/>
        </Head>
        <Header/>
        <div className={"container"}>
            {props.children}
        </div>
        <Footer/>
    </>
);

export default Layout;

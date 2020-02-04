import Head from 'next/head';
import Header from '../include/Header';
import Aside from '../include/Aside';
import Footer from '../include/Footer';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <>
        <Head>
            <title>MyXD</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        </Head>
        <Header/>
        { props.children }
    </>
);

export default Layout;

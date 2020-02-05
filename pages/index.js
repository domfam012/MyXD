import Head from "next/head";
import Layout from '../components/Layout';

const Index = props => {
    return (
        <Layout>
            <Head>
                <title>MyXD - Index</title>
            </Head>

            <h1>Main Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default Index;

import Head from "next/head";
import Layout from '../../components/Layout';

const Post = props => {
    return (
        <Layout>
            <Head>
                <title>MyXD - Post-detail</title>
            </Head>

            <h1>Post(detail) Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default Post;

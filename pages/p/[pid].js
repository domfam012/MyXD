import Head from "next/head";
import Layout from '../../include/Layout';

import { useRouter } from "next/router";


const Post = props => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <Layout>
            <Head>
                <title>MyXD - Post-detail</title>
            </Head>

            <h1>Post(detail) Page</h1>

            <style jsx>{`
                h1 {
                    color: #333;
                    font-size: 23px;
                }
            `}</style>

        </Layout>
    );
};

export default Post;

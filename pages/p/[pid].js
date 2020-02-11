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

Post.getInitialProps = async (ctx) => {
    console.log(`ctx.pathname: ${ctx.pathname}`)
    const q = ctx.query

    console.log(`ctx.query: ${JSON.stringify(q)}`)
    console.log(`ctx.asPath: ${ctx.asPath}`)
    console.log(`ctx.err: ${ctx.err}`)

    return {a:1}

}

export default Post;

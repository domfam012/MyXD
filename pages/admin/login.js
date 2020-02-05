import Head from "next/head";
import Layout from '../../include/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - Login</title>
            </Head>

            <h1>Admin Login Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default List;

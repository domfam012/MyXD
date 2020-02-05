import Head from "next/head";
import Layout from '../../../include/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - Update</title>
            </Head>

            <h1>Admin Update Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default List;

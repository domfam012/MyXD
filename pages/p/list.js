import Head from "next/head";
import Layout from '../../components/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>MyXD - List</title>
            </Head>

            <h1>List Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default List;

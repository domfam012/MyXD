import Head from "next/head";
import Layout from '../../../components/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - List</title>
            </Head>

            <h1>Admin List Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default List;

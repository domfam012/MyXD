import Head from "next/head";
import Layout from '../../../components/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - New</title>
            </Head>

            <h1>Admin New Page</h1>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

export default List;

import Head from "next/head";
import Layout from '../../../include/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - New</title>
            </Head>

            <div className={"content"}>

                <div className={"row box"}>
                    <div className={"col col-sm-12"}>
                        <h1 className={"header"}>XD 올리기</h1>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .box {
                    margin: 70px auto;
                    border: 0 solid transparent;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
            `}</style>

        </Layout>
    );
};

export default List;

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

                        <div className={"row"}>
                            <div className={"col col-sm-12"}>
                                <form>

                                </form>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col col-sm-12 text-center"}>
                                <a href="#" className={"btn btn-lg btn-outline-lightgray"}>취소</a>
                                <a href="#" className={"btn btn-lg btn-primary"}>저장</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .box {
                    margin: 70px auto;
                    border: 0 solid transparent;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .header {
                    margin: 32px 35px 0;
                    padding: 0 0 29px;
                    font-weight: bold;
                    line-height: 1;
                    border-bottom: 3px solid #96959A;
                }
            `}</style>

        </Layout>
    );
};

export default List;

import Head from "next/head";
import Layout from '../../include/Layout';

const List = props => {
    return (
        <Layout>
            <Head>
                <title>Admin - Login</title>
            </Head>

            <div className="content">
                <div className={"login-box"}>
                    Login
                </div>
            </div>

            <style jsx>{`
                .content {
                    height: calc(100vh - 270px);
                    margin: 0 0 70px;
                }
                .login-box {
                    position: absolute;
                    width: 360px;
                    height: 385px;
                    top: calc((35px + 50vh - 30px - 192.5px) * 0.96);
                    left: calc(50vw - 180px);
                    background-color: #fff;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                
                @media (max-width: 1200px) {
                    .content {
                        height: calc(100vh - 190px);
                        margin: 0 0 30px;
                    }
                }
            `}</style>

        </Layout>
    );
};

export default List;

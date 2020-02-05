import Head from "next/head";
import Layout from '../include/Layout';
import Aside from '../include/Aside';
const Index = props => {
    return (
        <Layout>
            <div>
                <h1>Main Page</h1>
            </div>
            <Aside/>
            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>
        </Layout>
    );
};

export default Index;

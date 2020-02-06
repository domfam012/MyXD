import Layout from '../include/Layout';
import Pagination from "../components/Pagination";

const Index = props => {
    return (
        <Layout>
            <div className={"list_bg"}>
                <div className={"row"}>
                    <div className={"col col-4"}>
                        <div className={"box_list"}>
                            <div className={"img"}></div>
                            <div className={"title"}>
                                <span>Property dashboard XD template</span>
                            </div>
                        </div>
                    </div>
                    <div className={"col col-4"}></div>
                    <div className={"col col-4"}></div>
                </div>
                <Pagination/>
            </div>
            <style jsx>{`
              .list_bg {
              width: 100%;
              
              background: #f6f6f6;
              }
            `}</style>
        </Layout>
    );
};

export default Index;

import Head from "next/head";
import Layout from '../include/Layout';
import Aside from '../include/Aside';
const Index = props => {
    return (
        <Layout>
            <div>
                <div className={"main_card"}>
                    <div className={"img"}></div>
                    <div className={"box_text"}>
                        <div className={"title"}>Wires, free wireframe kits for Adobe XD</div>
                        <div className={"text"}>
                            Adobe사에서 제공하는 무료 UI Kit <br/>
                            종류별로 사이트를 관리하기에 좋은 디자인입니다. <br/>
                            웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                        </div>
                    </div>
                </div>
                <Aside/>
            </div>
            <style jsx>{`
                .main_card {
                width: calc(100% - 268px);
                height: 709px;
                float: left;
                }
            `}</style>
        </Layout>
    );
};

export default Index;

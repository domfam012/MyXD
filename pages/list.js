import Head from "next/head";
import Layout from '../include/Layout';
import Pagination from "../components/Pagination";

const Temp = props => {
    return (
        <>
            <li>
                <a href="#" className="inner">
                    <div className="li-img">
                        <img src="/img/list/list_sample_01.png" alt="sample"/>
                    </div>
                    <div className="li-text">
                        <span className="title">{props.title}</span>
                    </div>
                </a>
            </li>
            <style jsx>{`
              li {
                display: block;
                width: 366px;
                float: left;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: var(--white);
                margin: 0 27px 30px 0;
              }
              .inner {
                display: block;
              }
              .li-img, .li-text, .inner {
                display: block;
                width: auto;
                padding: 0;
              }
              .li-img img {
                width: 366px;
              }
              .li-text {
                height: 84px;
                padding: 28px 30px 0;
              }

              @media (max-width: 1200px) {
                  li {
                    width: 339px;
                    display: block;
                    float: left;
                    background: none;
                    border: 0;
                    margin: 30px 27px 0 0;
                  }
                  .mt-0 {
                    margin-top: 30px !important;
                  }
                  li:nth-child(2n) {
                    margin-right: 0;
                  }
                  .li-img img{
                      width: 339px;
                    }
                  .inner {
                    display: block;
                  }
              }
                
              @media (max-width: 760px){
                    li {
                      width: 100%;
                      margin-right: 0;
                    }
                    li .li-img img{
                      width: 100%;
                    }
              }
         `}</style>
        </>
    );
};

const Index = props => {
    return (
        <Layout page={"list"}>
            <div id="_list">
                <ul className="list img-list">
                    {
                        props.data.map(item => (
                            <Temp key={item.pid} title={item.title}/>
                        ))
                    }
                </ul>
            </div>
            <Pagination/>
            <style jsx>{`
              .list {
                margin: 0 auto;
                overflow: hidden;
                padding-bottom: 5px;
              }
              
              @media (max-width: 1200px) {
                  .list {
                    margin: 0 auto;
                    overflow: hidden;
                  }
              }
         `}</style>
        </Layout>
    );
};
Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/board/list');
    const result = await res.json();

    // data.typeOf()
    // console.log(result);
    // console.log(typeof result);

    // console.log(`Show data fetched. Count: ${result.data.length}`);

    return {
        data: result.data
    }
};
export default Index;

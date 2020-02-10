import Head from "next/head";
import Layout from '../include/Layout';
import Pagination from "../components/Pagination";

const List = props => {
    return (
        <li>
            <a href="#" className="inner">
                <div className="li-img">
                    <img src="/img/list/list_sample_01.png" alt="sample"/>
                </div>
                <div className="li-text">
                    <p className="title">{props.title}</p>
                </div>
            </a>
        </li>
    );
};

const Index = props => {
    return (
        <Layout page={"list"}>
            <div id="_list">
                <ul className="list img-list">
                    {
                        data.map(item => (
                            <List key={item.pid} title = {item.title}/>
                        ))
                    }
                </ul>
            </div>
            <Pagination/>
            <style jsx>{`
              
              .list li {
                margin-top: 30px;
                margin-left: 0;
                margin-right: 0;
              }
              .list {
                margin: 0 auto;
                overflow: hidden;
              }
              .list li {
                display: block;
                width: 366px;
                float: left;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: var(--white);
                margin-right: 27px;
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
                line-height: 82px;
                padding-left: 30px;
              }

              @media (max-width: 1200px) {
                  .list {
                    margin: 0 auto;
                    overflow: hidden;
                  }
                  .list li {
                    width: 339px;
                    display: block;
                    float: left;
                    background: none;
                    border: 0;
                  }
                  .mt-0 {
                    margin-top: 30px !important;
                  }
                  .list li:nth-child(2n) {
                    margin-right: 0;
                  }
                  .list li .li-img img{
                      width: 339px;
                    }
                  .inner {
                    display: block;
                  }
              }
                
              @media (max-width: 760px){
                    .list {
                    }
                    .list li {
                      width: 100%;
                      margin-right: 0;
                    }
                    .list li .li-img img{
                      width: 100%;
                    }
              }
                
              @-webkit-keyframes fadeout {
                  0%   { background: #fff; }
                  10%   { background: #eee; }
                  100% { background: #fff; }
              }
              @-moz-keyframes fadeout {
                  0%   { background: #fff; }
                  10%   { background: #eee; }
                  100% { background: #fff; }
              }
              @-o-keyframes fadeout {
                  0%   { background: #fff; }
                  10%   { background: #eee; }
                  100% { background: #fff; }
              }
              @keyframes fadeout {
                  0%   { background: #fff; }
                  10%   { background: #eee; }
                  100% { background: #fff; }
               }
         `}</style>
                        </Layout>
                    );
                };
Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/board/list');
    const result = await res.json();

    // data.typeOf()
    // console.log(result);
    // console.log(typeof result);

    console.log(`Show data fetched. Count: ${result.data.length}`);

    return {
        data: result.data
    }
};
export default Index;

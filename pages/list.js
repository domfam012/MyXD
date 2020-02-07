import Head from "next/head";
import Layout from '../include/Layout';
import Pagination from "../components/Pagination";


const Index = props => {
    return (
        <Layout>
            <div id="_list">
                <ul className="list img-list">
                        <li className={"mt-0"}>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_01.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li className={"mt-0"}>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_02.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li className={"mt-0"}>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_03.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_04.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_05.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_06.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_07.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_08.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_09.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_10.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_11.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inner">
                                <div className="li-img">
                                    <img src="/img/list/list_sample_12.png" alt="sample"/>
                                </div>
                                <div className="li-text">
                                    <p className="title">Property dashboard XD template</p>
                                </div>
                            </a>
                        </li>
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

export default Index;
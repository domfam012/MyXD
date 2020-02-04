import Head from "next/head";
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { loadDB } from '../lib/js/db';

import { createContext, useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Index = props => {
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        // 렌더링 될 때마다 실행
        console.log('useEffect');


        // 마운트 될 때만 실행도 가능
    });

    const refresh = async () => {
        // console.log(`data: ${JSON.stringify(data)}`);

        const db = await loadDB();
        const querySnapshot = await db.collection('zz').get();
        let newData = [];
        querySnapshot.forEach(doc => {
            newData.push(doc.data());
        });

        console.log('is updating..');
        // console.log(newData);
        // return { data };
        // setData(prev => ([...newData]));
    };

    return (
        <Layout>
            <Head>
                <title>MyXD - Index</title>
            </Head>
            <h1>This is Main Page</h1>

            <FontAwesomeIcon icon={faThumbsUp} />

            <button className={"btn btn-warning disabled text-white"} onClick={refresh}>refresh</button>
            <ul>
                {props.data.map((item, idx) => (
                    <li key={idx}>
                        {item.zzz}
                    </li>
                ))}
            </ul>

            <span>{num}</span>
            <button onClick={() => setNum(num + 1)} className="btn btn-default">add</button>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

Index.getInitialProps = async function() {
    const db = await loadDB();
    let data = [];
    const querySnapshot = await db.collection('zz').get();
    querySnapshot.forEach(doc => {
        data.push(doc.data());
    });
    return { data };
};

export default Index;

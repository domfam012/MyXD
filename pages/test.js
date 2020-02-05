import Head from "next/head";
import Layout from '../include/Layout';
import { loadDB } from '../lib/js/db';

import { createContext, useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const linkStyle = {
    marginRight: 15
};

const Test = props => {
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

    /**
     * @type {{id: string}[]}
     *
     * post list 에서 연결되어야 하며
     * id 값은 firestore 통해서 넣도록 수정
     */
    const post = [
        {id: 'post1'}
    ];

    return (
        <Layout>
            <Head>
                <title>MyXD - Test</title>
            </Head>


            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/test">
                <a style={linkStyle}>Test</a>
            </Link>
            <Link href="/p/list">
                <a style={linkStyle}>List</a>
            </Link>
            <ul>
                {
                    post.map(item => (
                        <li key={`${item.id}`}>
                            <Link href="/p/[id]" as={`/p/${item.id}`}>
                                <a style={linkStyle}>post</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link href="/admin/login" as={`/admin`}>
                <a style={linkStyle}>admin</a>
            </Link>
            <Link href="/admin/p/list" as={`/admin/p/list`}>
                <a style={linkStyle}>admin-list</a>
            </Link>
            <Link href="/admin/p/new" as={`/admin/p/new`}>
                <a style={linkStyle}>admin-new</a>
            </Link>
            <Link href="/admin/p/update" as={`/admin/p/update`}>
                <a style={linkStyle}>admin-update</a>
            </Link>


            <h1 className="example">Test Page</h1>

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
            <button onClick={() => setNum(num + 1)} className="btn btn-secondary">add</button>

            <style jsx>{`
                h1 {
                    font-color: #333;
                }
            `}</style>

        </Layout>
    );
};

Test.getInitialProps = async function() {
    const db = await loadDB();
    let data = [];
    const querySnapshot = await db.collection('zz').get();
    querySnapshot.forEach(doc => {
        data.push(doc.data());
    });
    return { data };
};

export default Test;

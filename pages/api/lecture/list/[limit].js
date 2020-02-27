/**
 *   개수 제한 글 조회
 *      -> 넘겨 받은 query 로 limit, page 값 지정해서 조회
 */

import {loadDB} from '../../../../public/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    console.log(`req.query: ${JSON.stringify(req.query)}`);

    //  TODO: https://config9.com/apps/firebase/firebase-firestore-collection-count/
    /**
     *  get collection size (documents length)
     *
     *  currently using the first
     *
     *  TODO: -> 3rd .. 확인 필요
     *  TODO: -> 카테고리 조회 등의 경우에 따로 만들 필요 있음
     *
     *  TODO: check the firestore update rule!!
     *
     */

    const db = await loadDB();
    const collection = await db.collection('Lecture');
    // console.log("collection ㄱ ");
    // console.log(collection);
    if (req.method === 'GET') {
        const {query: {limit, page}} = req;

        // 전체 글 개수 조회
        const countRef = await db.collection('Count').doc('Lecture').get();
        let total = await countRef.data().count;
        console.log(total);
        // 페이지에 해당하는 글 목록 조회
        let ref;
        console.log(Number(page));
        if (Number(page) === 1) {
            console.log('ref');
            ref = await collection.orderBy('created', 'desc').limit(parseInt(limit)).get();
            console.log(ref);
        } else {
            const prev = await collection.orderBy('created', 'desc').limit(parseInt(limit) * (parseInt(page) - 1)).get();
            const lastVisible = prev.docs[prev.docs.length - 1];
            ref = await collection.orderBy("created", "desc").startAfter(lastVisible).limit(parseInt(limit)).get();
        }

        // 조회된 글 담을 data
        const data = [];
        ref.forEach(doc => {
            data.push({pid: doc.id, ...doc.data()});
        });

        const resData = JSON.stringify({
            status: 200, msg: 'success', data: data, total: total
        });
        res.status(200).json(resData);

    } else { // reg.method !== "GET"
        res.json({status: 405, msg: ''});
    }
}

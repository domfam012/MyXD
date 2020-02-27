/**
 *  신규 글 DB 저장
 *
 */

import { loadDB, firestore } from '../../../public/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    let resData;

    if (req.method === 'POST') {
        const db = await loadDB();

        // 받아온 값 타입 && null 체크
        const hash = req.body.hash || [];
        const title = req.body.title || '';
        const content = req.body.content || '';
        const movUrl = req.body.movUrl || '';
        const data = {
            hash,
            title,
            content,
            movUrl,
            viewCount: 0,
            created: moment().locale('ko').format()
        };

        // 글 collection
        const collection = db.collection('Lecture');
        await collection.add(data)
            .then(function(docRef) {
                return docRef.id;
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        // 전체 글 카운트 +1
        const countDoc = await db.collection('Count').doc('Lecture');
        const increment = firestore.FieldValue.increment(1);
        await countDoc.update({ count: increment });
        return res.status(200).end();

    } else {
        resData = JSON.stringify({
            status: 405, msg: ''
        });
        return res.json(resData);
    }

}




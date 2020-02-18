import { loadDB, firestore } from './../../../lib/js/db';
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
        const category = req.body.category || [];
        const content = req.body.content || '';
        const imgOriginName = req.body.imgName || '';
        const imgSaveName = req.body.imgSaveName || '';
        const imgPath = req.body.imgPath || '';
        const link = req.body.link || '';
        const title= req.body.title || '';

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            link: link,
            title: title,
            viewCount: 0,
            created: moment().locale('ko').format()
        };

        const collection = db.collection('Posts');
        await collection.add(data)
            .then(function(docRef) {
                return docRef.id;
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        const countDoc = await db.collection('Count').doc('Posts');
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




import { loadDB, firestore } from './../../../lib/js/db';
// import {  }
import index from "next/dist/export";
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    let resData;

    if (req.method === 'POST') {
        const db = await loadDB();

        // const ref = await db.collection('Posts').post();

        // console.log('content!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(req.body.content);
        // console.log('replace!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(req.body.content.replace(/<br\s?\/?>/g,"\n"));

        const category = 'default';
        const content = req.body.content;
        const imgOriginName = 'req.body.imgOriginName';
        const imgSaveName = 'sample1.png';
        const imgPath = '/img/upload/' + imgSaveName;
        const link = req.body.link;
        const title= req.body.title;
        // 받아온 값 타입 && null 체크

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            link: link,
            index: 1,
            title: title,
            viewCount: 0,
            created: firestore.FieldValue.serverTimestamp()
        };

        console.log(`data inserted:::`);
        console.log(JSON.stringify(data));

        const collection = db.collection('Posts');
        await collection.add(data);

        resData = JSON.stringify({
            status: 200, data: data
        });

        res.status(200).json(resData);

    } else {
        //
        resData = JSON.stringify({
            status: 405, msg: ''
        });
        res.json(resData);
    }

}



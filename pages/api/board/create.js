import { loadDB } from './../../../lib/js/db';
import {now} from "moment";
import index from "next/dist/export";

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    console.log(req.body);
    if (req.method === 'POST') {
        const db = await loadDB();
        // const ref = await db.collection('Posts').post();

        const category = req.body.category;
        const content = req.body.content;
        const imgOriginName = req.body.imgOriginName;
        const imgPath = 'c://///';
        const imgSaveName = 'myXD-'+ imgOriginName;
        const link = req.body.link;
        const title= req.body.title;

        const index = await db.collection('Posts').length+1;


        console.log(category);

        // 받아온 값 타입 && null 체크
        //

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            link: link,
            index: index,
            title: title,
            viewCount: 0,
            created: ''
        };

        // console.log(data);

        const collection = db.collection('Posts');
        await collection.add(data);
        // return collection.add(data);




        res.status(200).json({ status: 200, data: data });

    } else {
        //
        res.json( { status: 404, msg: '' } )
    }


}




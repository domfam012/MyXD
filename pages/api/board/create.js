import { loadDB } from './../../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    if (req.method === 'POST') {
        const db = await loadDB();
        // const ref = await db.collection('Posts').post();

        const category = '';
        const content = 'sdfjkhasdlkfh';
        // const created = 'sdfasdkjlf'; // -> 현재시각
        const imgOriginName = 'sadfadsf';
        const imgPath = 'asdfasdf';
        const imgSaveName = 'asdfasdfg434';
        const link = 0;
        const title='aaaaaa';
        const viewCount = 0;

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            link: link,
            index: 0,
            title: title
        };

        console.log(data);

        const collection = db.collection('Posts');
        await collection.add(data);
        // return collection.add(data);


        console.log(data);

        res.status(200).json({ status: 200, data: data });

    } else {
        //
        res.json( { status: 404, msg: '' } )
    }


}




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

        console.log('here');

        const category = 'TEST';
        const content = 'TEST';
        // const created = 'sdfasdkjlf';
        const imgOriginName = 'TEST';
        const imgPath = 'TEST';
        const imgSaveName = 'TEST';
        // const link = 0;
        // const index = 0;
        const title='aaaaaa';
        // const updated =  '0';
        const viewCount = 0;

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            index: 0,
            title: title
        };

        const collection = db.collection('Posts');
        collection.add(data);
        // return collection.add(data);


        console.log(data);

        res.status(200).json({ status: 200, data: data });

    } else {
        //
        res.json( { status: 404, msg: '' } )
    }


}



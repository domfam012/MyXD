import { loadDB } from './../../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    if (req.method === 'GET') {
        const db = await loadDB();
        const ref = await db.collection('Posts').get();

        const data = [];
        ref.forEach(doc => {
            data.push(doc.data());
        });

        res.status(200).json({ status: 200, data: data });
    } else {
        //
        res.json( { status: 404, msg: '' } )
    }


}

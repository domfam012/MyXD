import { loadDB } from './../../../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);

    const db = await loadDB();
    const collection = await db.collection('Posts');

    if (req.method === 'GET') {
        const { query: { limit } } = req;
        const ref = await collection.limit(parseInt(limit)).get();
        const data = [];
        ref.forEach(doc => {
            data.push(doc.data());
        });

        const resData = JSON.stringify({
            status: 200, data: data
        });
        res.status(200).json(resData);

    } else {
        //
        res.json( { status: 404, msg: '' } )
    }
}

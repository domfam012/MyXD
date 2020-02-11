import { loadDB } from './../../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    console.log(`req.query: ${JSON.stringify(req.query)}`);

    const db = await loadDB();
    const collection = await db.collection('Posts');

    if (req.method === 'GET') {
        const { query: { limit, page } } = req;
        const prev = await collection.orderBy('created', 'desc').limit(parseInt(limit)*parseInt(page)).get();
        const lastVisible = prev.docs[prev.docs.length-1];
        const ref = await collection.orderBy("created", "desc").startAfter(lastVisible).limit(parseInt(limit)).get();

        const data = [];
        ref.forEach(doc => {
            data.push({pid: doc.id, ...doc.data()});
        });

        const resData = JSON.stringify({
            status: 200, msg: 'success', data: data
        });
        res.status(200).json(resData);

    } else {
        res.json( { status: 405, msg: '' } );
    }
}

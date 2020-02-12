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
        let ref;
        if(Number(page) === 1){
            ref = await collection.orderBy("created", "desc").limit(parseInt(limit)).get();
        }
        else {
            const prev = await collection.orderBy('created', 'desc').limit(parseInt(limit)*(parseInt(page)-1)).get();
            const lastVisible = prev.docs[prev.docs.length-1];
            ref = await collection.orderBy("created", "desc").startAfter(lastVisible).limit(parseInt(limit)).get();
        }

        /*
            length 도 보내줘야됨


         */


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

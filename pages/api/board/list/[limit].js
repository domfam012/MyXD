import { loadDB } from './../../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);
    console.log(`req.query: ${JSON.stringify(req.query)}`);

    //  TODO: https://config9.com/apps/firebase/firebase-firestore-collection-count/
    /**
     *  get collection size (documents length)
     *
     *  currently using the first
     *
     *  TODO: -> 3rd (DONE)
     *
     *  TODO: check the firestore update rule!!
     *
     */



    const db = await loadDB();
    const collection = await db.collection('Posts');

    if (req.method === 'GET') {
        const { query: { limit, page } } = req;

        const countRef = await db.collection('Count').doc('Posts').get();
        const total = await countRef.data().count;

        let ref;
        if (Number(page) === 1) {
            ref = await collection.orderBy("created", "desc").limit(parseInt(limit)).get();
        }
        else {
            const prev = await collection.orderBy('created', 'desc').limit(parseInt(limit)*(parseInt(page)-1)).get();
            const lastVisible = prev.docs[prev.docs.length-1];
            ref = await collection.orderBy("created", "desc").startAfter(lastVisible).limit(parseInt(limit)).get();
        }

        const data = [];
        ref.forEach(doc => {
            data.push({pid: doc.id, ...doc.data()});
        });

        const resData = JSON.stringify({
            status: 200, msg: 'success', data: data, total: total
        });
        res.status(200).json(resData);

    } else { // reg.method !== "GET"
        res.json( { status: 405, msg: '' } );
    }
}

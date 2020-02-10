// const { loadDB } = require('./lib/js/db');
import { loadDB } from './../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');



    console.log(`req.method : ${req.method}`);

    console.log(loadDB);

    const db = await loadDB();
    const ref = await db.collection('Posts').get();

    console.log('a');
    console.log(typeof ref);
    ref.forEach(doc => {
        console.log(doc.data());
    });

    const ref2 = await db.collection('Posts').doc('JIzl0xqK1IFyXZ3nRfFf').get();
    console.log('b');
    console.log(ref2.data());
    // ref2.forEach(doc => {
    //     console.log(doc.data())
    // })
    // console.log(ref2.data());

    res.json({a:1});
}

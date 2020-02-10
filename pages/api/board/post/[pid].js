import { loadDB } from '../../../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    console.log(`req.method : ${req.method}`);

    const { query: { pid } } = req;
    console.log(pid);

    const db = await loadDB();
    const doc = await db.collection('Posts').doc(pid);
    const id = await doc.id;

    switch ( req.method) {
        case "GET" :
            const ref = await doc.get();
            res.status(200).json({ status: 200, msg: 'success', data: ref.data() });
            break;

        case "PUT" :
            // Update


            break;

        case "DELETE" :
            doc.delete();
            res.status(200).json({ status: 200, msg: 'success' });
            break;

        default:
            res.json( { status: 405, msg: '' } );
            break;
    }


}

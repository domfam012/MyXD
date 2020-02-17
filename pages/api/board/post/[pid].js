import { loadDB, firestore } from '../../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    const { query: { pid } } = req;

    const db = await loadDB();
    const doc = await db.collection('Posts').doc(pid);

    let resData;
    switch ( req.method) {
        case "GET" :
            const ref = await doc.get();

            if (ref._document === null) {
                resData = JSON.stringify({
                    status: 404, msg: 'not found'
                });
                return res.status(404).json(resData);
            }

            resData = JSON.stringify({
                status: 200, msg: 'success', data: ref.data()
            });

            // add view count +1
            const increment = firestore.FieldValue.increment(1);
            await doc.update({ viewCount: increment });

            res.status(200).json(resData);
            break;

        case "PATCH" :
            // Update
            const category = 'default';
            const content = req.body.content || '';
            const link = req.body.link || '';
            const title= req.body.title || '';

            let newData = {
                category: category,
                content: content,
                link: link,
                title: title,
                updated: moment().locale('ko').format()
            };

            if (req.body.imgName) {
                const imgData = {
                    imgOriginName: req.body.imgName,
                    imgPath: req.body.imgPath,
                    imgSaveName: req.body.imgSaveName
                };

                newData = { ...newData, ...imgData };
            }

            await doc.update(newData);

            res.status(200).end();
            break;

        case "DELETE" :
            doc.delete();
            const countDoc = await db.collection('Count').doc('Posts');
            const decrement = firestore.FieldValue.increment(-1);
            await countDoc.update({ count: decrement });

            resData = JSON.stringify({
                status: 200, msg: 'success'
            });
            res.status(200).json(resData);
            break;

        default:
            resData = JSON.stringify({
                status: 405, msg: ''
            });
            res.json(resData);
            break;
    }


}

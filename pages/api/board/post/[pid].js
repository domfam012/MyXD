import { loadDB, firestore } from '../../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    const { query: { pid } } = req;
    // console.log(pid);
    // console.log(req.query);

    const db = await loadDB();
    const doc = await db.collection('Posts').doc(pid);

    // let test = await doc.get();
    // console.log(test._document);
    // test._document === null 이면 없음

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
            const imgOriginName = req.body.img;
            const imgPath = req.body.imgPath;
            const imgSaveName = req.body.imgSaveName;
            const link = req.body.link;
            const title= req.body.title;

            const newData = {
                category: category,
                content: content,
                imgOriginName: imgOriginName,
                imgPath: imgPath,
                imgSaveName: imgSaveName,
                link: link,
                title: title,
                updated: firestore.FieldValue.serverTimestamp()
            };

            await doc.update(newData);

            resData = JSON.stringify({
                status: 200, msg: 'success'
            });
            res.status(200).json(resData);

            break;

        case "DELETE" :
            doc.delete();
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

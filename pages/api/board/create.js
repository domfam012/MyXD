import { loadDB, firestore } from './../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    let resData;

    if (req.method === 'POST') {
        const db = await loadDB();

        // 받아온 값 타입 && null 체크
        const category = 'default';
        const content = req.body.content || '';
        const imgOriginName = req.body.imgName || '';
        const imgPath = '/img/upload/' + '';
        const link = req.body.link || '';
        const title= req.body.title || '';

        console.log(`imgOriginName: ${imgOriginName}`);

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: '',
            link: link,
            index: 1,
            title: title,
            viewCount: 0,
            created: moment().format()
        };

        const collection = db.collection('Posts');
        const imgSaveName = await collection.add(data)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                return docRef.id;
            })
            .then(pid => {
                const fileExtension = imgOriginName.split('.')[imgOriginName.split('.').length - 1];
                const imgSaveName = pid + "-" + moment().format('YYYYMMDDHHmmss') + "." + fileExtension;
                console.log(`fileExtension: ${fileExtension}`);
                console.log(`imgOriginName: ${imgOriginName}`);

                const newData = {
                    imgSaveName : imgSaveName,
                    imgPath : imgPath + imgSaveName
                };
                collection.doc(pid).update(newData);

                return imgSaveName;
            })

            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        console.log(imgSaveName);

        const countDoc = await db.collection('Count').doc('Posts');
        const increment = firestore.FieldValue.increment(1);
        await countDoc.update({ count: increment });

        return res.status(200).json({ imgSaveName: imgSaveName });

    } else {
        //
        resData = JSON.stringify({
            status: 405, msg: ''
        });
        return res.json(resData);
    }

}




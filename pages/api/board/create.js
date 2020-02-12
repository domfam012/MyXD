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
        const imgSaveName = '';
        const imgPath = '/img/upload/' + imgSaveName;
        const link = req.body.link || '';
        const title= req.body.title || '';

        console.log(imgOriginName);

        const data = {
            category: category,
            content: content,
            imgOriginName: imgOriginName,
            imgPath: imgPath,
            imgSaveName: imgSaveName,
            link: link,
            index: 1,
            title: title,
            viewCount: 0,
            created: firestore.FieldValue.serverTimestamp()
        };

        const collection = db.collection('Posts');
        const pid = await collection.add(data)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                return docRef.id;
            })
            .then(pid => {
                const fileExtension = imgOriginName.split('.')[imgOriginName.split('.').length - 1];
                const imgName = pid + "-" + moment().format('YYYYMMDDHHmmss') + "." + fileExtension;
                console.log(imgOriginName);
                console.log(fileExtension);

                const newData = {
                    imgSaveName : imgName,
                    imgPath : imgPath + imgName
                };
                collection.doc(pid).update(newData);

                return pid;
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        return res.status(200).json({ pid: pid });

    } else {
        //
        resData = JSON.stringify({
            status: 405, msg: ''
        });
        return res.json(resData);
    }

}




import { loadDB, firestore } from './../../../lib/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    let resData;

    if (req.method === 'POST') {
        const db = await loadDB();

        // const ref = await db.collection('Posts').post();

        // console.log('content!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(req.body.content);
        // console.log('replace!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(req.body.content.replace(/<br\s?\/?>/g,"\n"));

        // 받아온 값 타입 && null 체크
        const category = 'default';
        const content = req.body.content || '';
        const imgOriginName = 'req.body.imgOriginName';
        const imgSaveName = 'sample1.png';
        const imgPath = '/img/upload/' + imgSaveName;
        const link = req.body.link || '';
        const title= req.body.title || '';

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
                // console.log("Document written with ID: ", docRef.id);
                return docRef.id;
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




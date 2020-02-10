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

    let resData;
    switch ( req.method) {
        case "GET" :
            const ref = await doc.get();
            resData = JSON.stringify({
                status: 200, msg: 'success', data: ref.data()
            });
            res.status(200).json(resData);
            break;

        case "PATCH" :
            // Update
            const category = req.body.category;
            const content = req.body.content;
            const imgOriginName = req.body.imgOriginName;
            const imgPath = req.body.imgPath;
            const imgSaveName = req.body.imgSaveName;
            const link = req.body.link;
            const title= req.body.title;
            const updated = '';


            const updata = {
                category: category,
                content: content,
                imgOriginName: imgOriginName,
                imgPath: imgPath,
                imgSaveName: imgSaveName,
                link: link,
                index: 1,
                title: title,
                viewCount: 0,
                updated: ''
            };

            await doc.update(updata);

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

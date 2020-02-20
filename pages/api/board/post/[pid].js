/**
 *  특정 포스트 (pid) 에 대한 CRUD
 */

import { loadDB, firestore } from '../../../../lib/js/db';
import moment from 'moment';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    const { query: { pid } } = req;

    // load firestore database
    const db = await loadDB();
    const doc = await db.collection('Posts').doc(pid);

    let resData;
    switch ( req.method) {

        // 글 조회
        case "GET" :
            const ref = await doc.get();

            if (ref._document === null) { // 없는 글일 경우
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

        // 글 업데이트
        case "PATCH" :
            // Update
            const category = req.body.category;
            const content = req.body.content || '';
            const link = req.body.link || '';
            const title= req.body.title || '';

            /**
             *
             * @type {{link: (*|string), category: *, title: (*|string), updated: string, content: (*|string)}}
             *  TODO: detail img 추가 임시로 해뒀음
             *
             */
            // detail img path 추가!
            let newData = {
                category: category,
                content: content,
                link: link,
                title: title,
                detailImg: [''],
                updated: moment().locale('ko').format()
            };

            // img 변경된 경우
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

        // 글 삭제
        case "DELETE" :
            doc.delete();
            const countDoc = await db.collection('Count').doc('Posts');
            const decrement = firestore.FieldValue.increment(-1);

            // 전체 글 개수 -1
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

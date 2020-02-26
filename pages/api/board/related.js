/**
 *  인기 글 목록 3개 조회
 */

import { loadDB } from '../../../public/js/db';

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');

    // console.log(`req.method : ${req.method}`);
    // console.log(req.query.pid);
    // console.log(req.query.category);

    const { query: { pid, category } } = req;

    const db = await loadDB();
    const collection = await db.collection('Posts');

    if (req.method === 'GET') {
        /*
             collection size 측정
             카테고리별 글 개수가 모두 4개 이상 존재하는 것을 전제로 함
             2020.02.25 최저 포스팅 Plug-in 5개
        */

        const data = [];
        await collection.where("category", "array-contains", category).orderBy("created", "desc").get()
            .then(snap => {
                // size 측정
                const total = snap.size;

                // 0~(size-3) 내에서 랜덤한 숫자 추출
                let randomStart = Math.floor(Math.random()*(total - 3 + 1));

                // 추출한 숫자로부터 3개 가져오기
                let count = 0;
                let tempData = [];
                snap.forEach(doc => {
                    if (count === 0) {
                        tempData.push({pid: doc.id, ...doc.data()});
                    }

                    // console.log(doc.id, count);
                    if (count >= randomStart && count <= randomStart+2) {
                        if (doc.id !== pid) {
                            data.push({pid: doc.id, ...doc.data()});
                        }
                        else { // 현재 상세화면 글과 같은 글일 경우

                            // total 보다 클 경우 0번
                            if (randomStart+2 === total) {
                                data.push(tempData[0]);
                            }
                            // 랜덤값 + 3번째까지 받도록
                            else {
                                randomStart++;
                            }
                        }
                    }
                    count++;
                });
            });

        // console.log(data);

        // send response
        const resData = JSON.stringify({
            status: 200, msg: 'success', data: data
        });
        res.status(200).send(resData);
    } else {
        //
        res.json( { status: 405, msg: '' } );
    }


}

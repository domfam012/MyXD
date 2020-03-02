/**
 *  특정 포스트 (pid) 에 대한 CRUD
 */

import { loadDB, firestore } from "../../../../public/js/db";
import moment from "moment";

export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Content-Type", "application/json");

  const {
    query: { pid }
  } = req;

  // load firestore database
  const db = await loadDB();
  const doc = await db.collection("Lecture").doc(pid);

  let resData;
  switch (req.method) {
    // 글 조회
    case "GET":
      const ref = await doc.get();

      if (ref._document === null) {
        // 없는 글일 경우
        resData = JSON.stringify({
          status: 404,
          msg: "not found"
        });
        return res.status(404).json(resData);
      }

      resData = JSON.stringify({
        status: 200,
        msg: "success",
        data: ref.data()
      });

      // add view count +1
      const increment = firestore.FieldValue.increment(1);
      await doc.update({ viewCount: increment });

      res.status(200).json(resData);
      break;

    // 글 업데이트
    case "PATCH":
      // Update
      const hash = req.body.hash;
      const title = req.body.title;
      const content = req.body.content;
      const movUrl = req.body.link;
      const playList = req.body.playList;

      const movID = movUrl.split("v=")[1].split("&")[0];
      const thumbnail =
        "https://img.youtube.com/vi/" + movID + "/maxresdefault.jpg";

      const newData = {
        hash,
        title,
        content,
        movUrl,
        movID,
        thumbnail,
        playList,
        updated: moment()
          .locale("ko")
          .format()
      };

      await doc.update(newData);

      res.status(200).end();
      break;

    // 글 삭제
    case "DELETE":
      // console.log(doc);
      doc.delete();
      const countDoc = await db.collection("Count").doc("Lecture");
      const decrement = firestore.FieldValue.increment(-1);

      // 전체 글 개수 -1
      await countDoc.update({ count: decrement });

      resData = JSON.stringify({
        status: 200,
        msg: "success"
      });
      res.status(200).json(resData);
      break;

    default:
      resData = JSON.stringify({
        status: 405,
        msg: ""
      });
      res.json(resData);
      break;
  }
};

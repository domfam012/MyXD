/**
 *  인기 글 목록 3개 조회
 */

import { loadDB } from "../../../public/js/db";

export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Content-Type", "application/json");

  // console.log(`req.method : ${req.method}`);

  const db = await loadDB();
  const collection = await db.collection("Posts");

  if (req.method === "GET") {
    const ref = await collection
      .orderBy("viewCount", "desc")
      .limit(3)
      .get();
    const data = [];
    ref.forEach(doc => {
      data.push({ pid: doc.id, ...doc.data() });
    });

    const resData = JSON.stringify({
      status: 200,
      msg: "success",
      data: data
    });

    res.status(200).send(resData);
  } else {
    //
    res.json({ status: 405, msg: "" });
  }
};

// 사용자가 요청한 데이터 전송하기
const express = require("express");
const app = express();
const port = 3000;

function cb(req, res) {
  res.send("this is string");
}
function cb2(req, res) {
  const obj = {
    class: "2023 winter school",
    lecture: "nodejs-express",
  };
  res.send(obj);
}
app.get("/string", cb);
app.get("/obj", cb2);

function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
app.listen(port, serverListenCb);

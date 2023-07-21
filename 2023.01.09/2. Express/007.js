// 사용자가 보낸 데이터 확인하기
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); //사용자가 보낸 데이터를 읽어들이기 위함

function cb(req, res) {
  const body = req.body;
  console.log("cb 실행됨", body);
  res.send("ok");
}

app.post("/", cb);

function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
app.listen(port, serverListenCb);

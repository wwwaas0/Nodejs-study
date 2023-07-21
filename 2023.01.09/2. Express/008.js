// 정적 파일 보내기
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
app.listen(port, serverListenCb);

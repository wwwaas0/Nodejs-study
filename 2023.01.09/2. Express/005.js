// 사용자가 요청한 데이터 가변적으로 보내기(params)
const express = require("express");
const app = express();
const port = 3000;

const samples = [
  {
    id: 1,
    name: "kang",
  },
  {
    id: 2,
    name: "kim",
  },
  {
    id: 3,
    name: "park",
  },
];
function cb(req, res) {
  const params = req.params;
  console.log(params);
  const id = Number(params.id);
  res.send(samples[id - 1]);
}

app.get("/:id", cb); //첫번째 인자 경로로 호출될 때, 두번째 인자인 함수 실행

function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
app.listen(port, serverListenCb);

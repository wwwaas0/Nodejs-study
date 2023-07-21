// 사용자가 특별한 질의(query)를 한 경우
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
// function filtering(value){
//   if(value.name==)
// }

function cb(req, res) {
  const query = req.query;
  // console.log(query);
  const what = samples.filter(
    //뭔소리야
    (item) => item.id === Number(query.id) || item.name === query.name
  );
  res.send(what);
}

app.get("/", cb);

function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
app.listen(port, serverListenCb);

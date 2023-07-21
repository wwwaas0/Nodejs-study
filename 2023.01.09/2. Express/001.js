const express = require("express");
const app = express();
const port = 3000;

function cb(req, res) {
  //req:받은 정보, res:클라이언트한테 보낼 객체
  res.send("Hello World"); //클라이언트한테 보낼 메시지
}
function cb2() {
  console.log(`Server is Running at ${port}`);
}
//http://localhost:3000/
app.get("/", cb);
app.listen(port, cb2);

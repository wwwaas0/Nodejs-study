// 다양한 라우팅 경로 제공하기
// 라우팅 경로는 클라이언트의 요청을 구분하여 처리하기 위함
const express = require("express");
const app = express();
const port = 3000;

const { cb, cb2, serverListenCb } = require("./lib/callback.js");
app.get("/hi", cb);
app.get("/hello", cb2);
app.listen(port, serverListenCb);

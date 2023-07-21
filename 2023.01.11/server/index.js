//웹소켓 쓸 때 필요한 코드
const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const port = 3000;

app.use(express.json()); //post 메서드로 사용자가 보낸 데이터 확인해보기
app.post("/smartphone", function (req, res) {
  fs.writeFile("./sample.json", JSON.stringify(req.body), function () {});

  res.send("ok");
});

//웹소켓 코드
const smartphone = io.of("/smartphone");
smartphone.on("connection", function (socket) {
  console.log("smartphone connected");
  socket.on("acc", (msg) => {
    console.log(`message: ${msg}`);
  });
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

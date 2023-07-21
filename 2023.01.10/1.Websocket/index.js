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

app.get("/", function (req, res) {
  res.send("ok");
});

io.on("connection", function (socket) {
  //socket: 실시간으로 연결되었을 때 통로
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log(`message: ${msg}`);
  });
});

const port = 3000;
server.listen(port, function () {
  console.log(`Server is running at ${port}`);
});

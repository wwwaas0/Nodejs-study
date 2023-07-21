const express = require("express");
const app = express();

// host: http://localhost:3001
// root 경로: /
// http://localhost:3001/

app.use(express.json());
const todoRouter = require("./routes/todo.js");
const smartThingsRouter = require("./routes/smartthings.js");
app.use("/todo", todoRouter);
app.use("/smartthings", smartThingsRouter);

app.get("/", function (req, res) {
  res.send("hello");
});
const port = 3001;
app.listen(port, function () {
  console.log(`Server is running at ${port}`);
});

function cb(req, res) {
  //항상 인자가 2개
  res.send(`cb`);
}
function cb2(req, res) {
  res.send("cb2222");
}

const port = 3000;
function serverListenCb() {
  console.log(`Server is running at ${port}`);
}
module.exports = {
  cb,
  cb2,
  serverListenCb,
};

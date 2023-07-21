// 파일감시
// 파일 변경 감시하기
const fs = require("fs");
fs.watchFile(__dirname + "/sample.txt", (curr, prev) => {
  console.log(curr);
  console.log(prev);
  console.log("파일에 변경상황 감지 ");
});

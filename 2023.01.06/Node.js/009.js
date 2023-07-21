// 파일 시스템(fs) 다루기

const fs = require("fs");

// 비동기 파일 읽기
function ifReadFile(error, data) {
  if (error) console.error(error);
  console.log(data);
}
fs.readFile("./sample.txt", "utf8", ifReadFile);
// fs.readFile("./sample.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// 동기 파일 읽기
// var text = fs.readFileSync("./sample.txt", "utf8"); //text는 버퍼??? 뭐지 아닌거 같은데
// console.log(text.toString());

//외부에서 가져온 문자열을 객체로
//JSON.parse()

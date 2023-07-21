// 파일 시스템(fs) 다루기

const fs = require("fs");

// 비동기 파일 읽기
// fs.readFile("./sample/text.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// 동기 파일 읽기
// var text = fs.readFileSync('./sample/text.txt', 'utf8');
// console.log(text);

// var data = "파일 쓰기 테스트";

// 비동기 파일 쓰기
// fs.writeFile('./sample/text_w.txt', data, 'utf8', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('비동기적 파일 쓰기 완료');
// });

// fs.writeFileSync("./sample/text_w2.txt", data, "utf8");
// console.log("동기적 파일 쓰기 완료");

// 파일 변경 감시하기
fs.watchFile(__dirname + "/sample.txt", (curr, prev) => {
  console.log(curr);
  console.log(prev);
  console.log("파일에 변경상황 감지 ");
});

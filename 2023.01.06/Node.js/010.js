const fs = require("fs");
// 파일 쓰기
// var data = "파일 쓰기 테스트";

// 비동기 파일 쓰기
const data = "으억";
function ifWriteFile(error) {
  if (error) console.error(error);
}
fs.writeFile("./sample.txt", data, "utf8", ifWriteFile);
// data = JSON.stringify(data);
// fs.writeFile("./sample.txt", data, "utf8", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("비동기적 파일 쓰기 완료");
// });

//동기식 파일 쓰기
// const data = "졸려";
// fs.writeFileSync("./sample2.txt", data, "utf8");
// console.log("동기적 파일 쓰기 완료");

//객체 파일 작성할 때는 문자열로 바꿔줘야한다
const obj = {
  id: 1,
  names: ["a", "b", "c"],
};
const strObj = JSON.stringify(obj);
console.log(strObj);
fs.writeFile("./sample2.txt", strObj, "utf8", ifWriteFile);

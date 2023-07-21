// 1. jsonplaceholder 사이트에 접속해서 albums 자원을 GET 메서드로 요청해보기
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/albums";

function cb1(result) {
  console.log(result.data);
}
function cb2(result) {
  console.error(result);
}
axios.get(url).then(cb1).catch(cb2);

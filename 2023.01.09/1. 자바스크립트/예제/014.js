// ES6 에서 추가된 문법
// async await

const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos/1";

async function getData() {
  //async: 비동기 함수를 ??
  const result = await axios.get(url); // await: 뒤의 코드가 모두 실행될 때까지 기다려줌
  console.log(result.data);
}

getData();

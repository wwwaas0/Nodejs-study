const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/todos/1";
function getData() {
  const result = axios.get(url);
  console.log(result.data);
}

getData(); // 잘못된 사용법

async function getDataAsync() {
  const result = await axios.get(url);
  console.log(result.data);
}

getDataAsync(); // 올바른 사용법

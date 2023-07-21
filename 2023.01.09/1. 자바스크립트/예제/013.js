// promise 예제1. 데이터 받아오기
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios
  .get(url)
  .then(function (result) {
    console.log(result.data);
  })
  .catch(function (error) {
    console.error(error);
  });

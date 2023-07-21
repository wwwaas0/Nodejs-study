// jsonplaceholder 사이트에 접속해서 albums 자원을 GET 메서드로 요청해보기
// async, await 구문을 사용하기
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/albums/1";

async function getData() {
  //async: 비동기 함수를 이용가능하게 해줌
  const result = await axios.get(url); // await: 뒤의 코드(promise를 반환)가 모두 실행될 때까지 기다려줌
  console.log(result.data);
}

getData();

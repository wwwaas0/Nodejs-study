// 1. jsonplaceholder 사이트에 접속해서 albums 자원을 POST 메서드로 생성하기
// async, await 구문을 사용하기
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/albums";
const url_1 = "https://jsonplaceholder.typicode.com/albums/1";

async function postData() {
  const newTodo = {
    userId: 1,
    title: "nojam",
  };
  const result = await axios.post(url, newTodo);
  console.log(result.data);
}

postData();

// 2. jsonplaceholder 사이트에 접속해서 albums 자원을 PUT 메서드로 수정하기
// async, await 구문을 사용하기
async function putData() {
  const modify = {
    userId: 1,
    id: 1,
    title: "jib gago sibda",
  };
  const result2 = await axios.put(url_1, modify); //어떤 개체를 수정할지 지정
  console.log(result2.data);
}
putData();

// 3. jsonplaceholder 사이트에 접속해서 albums 자원을 DELETE 메서드로 삭제하기
// async, await 구문을 사용하기
async function deleteData() {
  const result3 = await axios.delete(url_1); //어떤 객체를 지울지 지정
  console.log(result3.data);
}

deleteData();

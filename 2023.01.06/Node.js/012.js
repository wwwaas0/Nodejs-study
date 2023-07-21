//jsonplace에서 정보 요청
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts";

// axios.get(url).then((data) => {
//   console.log(data);
// });

const data = {
  userId: 200,
  title: "abc",
  body: "1234",
};
// axios.post(url, data).then((result) => console.log(result.data));

const putData = {
  userId: 300,
  title: "put title",
  body: "put body",
};
axios.put(`${url}/1`, putData).then((result) => console.log(result.data));
// axios.delete(`${url}/1`, putData).then((result) => console.log(result.data));

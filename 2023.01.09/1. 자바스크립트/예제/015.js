// POST 메서드 사용
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos";

async function postData() {
  const newTodo = {
    userId: 200,
    title: "2023 winter school",
    completed: false,
  };
  const result = await axios.post(url, newTodo);
  console.log(result.data);
}

postData();

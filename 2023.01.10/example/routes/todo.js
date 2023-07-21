const express = require("express");
const router = express.Router();

// 사용할 todo 객체 불러오기
const todos = require("./todo.json");

// GET /todo
// todo 아이템 전체 반환
router.get("/", function (req, res) {
  //   const query = req.query;
  //   console.log(query);
  res.send(todos);
});

// GET /todo/:id
// todo 아이템에서 원하는 id에 해당하는 아이템만 불러오기
router.get("/:id", function (req, res) {
  const id = Number(req.params.id);
  res.send(todos[id - 1]);
});

// POST /todo
// todo 아이템 새로 추가하기
router.post("/", function (req, res) {
  const userData = req.body;
  userData.id = todos.length + 1; // 새로운 아이템의 id는 배열의 길이 + 1
  todos.push(userData);
  res.send("ok");
});

// PUT /todo/:id
// todo 아이템 수정하기(id를 기준으로)
router.put("/:id", function (req, res) {
  // 0. 사용자가 어떤것을 찾는지 알아내기
  const id = req.params.id;
  //   console.log(id);
  // 1. 수정할 데이터를 찾는게 먼저
  //   const target = todos.find((todo) => todo.id === Number(id));
  const target = todos[id - 1];
  //   console.log(target);

  // 2. 수정할 데이터의 내용을 수정
  todos[id - 1] = req.body;
  todos[id - 1].id = id;
  res.send(todos[id - 1]);
});

// DELETE /todos/:id
// todo 아이템 삭제하기(id를 기준으로)
router.delete("/:id", function (req, res) {
  // 삭제할 아이템 아이디 찾기
  const id = req.params.id;

  // 아이템 삭제(필터링)
  function cb(todo) {
    if (todo.id === Number(id)) return false;
    else return true;
  }
  const newTodos = todos.filter(cb);
  res.send(newTodos);
});

module.exports = router;

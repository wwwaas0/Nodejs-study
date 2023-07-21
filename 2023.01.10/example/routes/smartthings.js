const express = require("express");
const router = express.Router();

const axios = require("axios");
const token = "29cabe11-8a53-4cc7-8a36-013a3a046f56";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 1. Smartthings 디바이스 목록 조회 API 만들기
// GET /list
router.get("/list", async function (req, res) {
  // 1. SmartThings API를 통해서 디바이스 목록 받아오기
  const url = "https://api.smartthings.com/v1/devices";
  const result = await axios.get(url);
  console.log(result.data);
  res.send(result.data);
});

//2. Smartthings의 에어모니터 상태값 클라이언트에 전달하기
//GET /air
router.get("/air", async function (req, res) {
  //1. 에어모니터 상태값 받아오기
  const url_air =
    "https://api.smartthings.com/v1/devices/4fb408d3-0f1c-4d0a-9321-7e13b51020bd/status";
  const result_air = await axios.get(url_air);

  res.send(result_air.data);
});

module.exports = router;

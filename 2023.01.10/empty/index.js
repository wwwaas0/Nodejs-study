//1. martThings 에어모니터 정보 불러오기
const axios = require("axios");
const token = "29cabe11-8a53-4cc7-8a36-013a3a046f56";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const fs = require("fs");

//GET /air
//1. 에어모니터 상태값 받아오기
async function getData() {
  const url =
    "https://api.smartthings.com/v1/devices/4fb408d3-0f1c-4d0a-9321-7e13b51020bd/status";
  const result = await axios.get(url);
  const date = new Date().toISOString().replace(":", "-").replace(":", "-");

  fs.writeFile(
    `./data/${date}.json`,
    JSON.stringify(result.data),
    function () {}
  );
  return result.data;
}

setInterval(getData, 2000);
// getData();

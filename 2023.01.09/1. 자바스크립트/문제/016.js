const axios = require("axios");
const url =
  "http://192.168.0.3/api/9cDT34CP3tonkhwK9B1u9GkfVfiy9GQx4vFmRM4O/lights";
const url_11 =
  "http://192.168.0.3/api/9cDT34CP3tonkhwK9B1u9GkfVfiy9GQx4vFmRM4O/lights/11";
const url_11state =
  "http://192.168.0.3/api/9cDT34CP3tonkhwK9B1u9GkfVfiy9GQx4vFmRM4O/lights/11/state";
async function getData() {
  //hue 전구 전체 정보 가져오기
  const result = await axios.get(url);
  console.log(result.data);
}
// getData();

async function getData_11() {
  //hue 전구 11번 정보 가져오기
  const result2 = await axios.get(url_11);
  console.log(result2.data);
}
// getData_11();

async function putData() {
  const newData = {
    on: false,
    bri: 200,
    hue: 0,
    sat: 254,
    effect: `none`,
  };
  const result3 = await axios.put(url_11state, newData);
  console.log(result3.data);
}
putData();

// sample.json 파일의 items 배열에서 deviceId와 name만 빼내기
sample = require("./sample.json");
const items_array = sample["items"];
function func1(value) {
  return {
    deviceId: value.deviceId,
    name: value.name,
  };
}
const result = items_array.map(func1);
console.log(result);

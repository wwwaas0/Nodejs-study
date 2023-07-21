sample = require("./sample.json");
// 1. sample.json 파일의 items 배열에서 label만 빼내기
const items_array = sample["items"];
function la(obj) {
  return obj["label"];
}
const labels = items_array.map(la);
console.log(labels);

// 2. sample.json 파일의 items 배열에서 deviceTypeId만 빼내기
function device(obj) {
  return obj["deviceTypeId"];
}
const deviceTypeIds = items_array.map(device);
console.log(deviceTypeIds);

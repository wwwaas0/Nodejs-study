const sample = require("./sample.json");
// 다음의 객체에서 다음 값만 빼내오기

// 1. items 배열에서 name만 담긴 배열을 만들기
const items_array = sample["items"];
const names = items_array.map((items_array) => items_array["name"]);
console.log(names);

// 2. items 배열에서 deviceId가 담긴 배열을 만들기
const deviceId = items_array.map((items_array) => items_array["deviceId"]);
console.log(deviceId);

// 3. name에 Hue가 들어간 아이템만 담긴 배열 만들기
const hue = names.filter((names) => names.includes("Hue"));
console.log(hue);

// 4. manufacturerName이 SmartThings인 아이템만 담기 배열 만들기
const smartthings = items_array.filter(
  (items_array) => items_array["manufacturerName"] === "SmartThings"
);
console.log(smartthings);

// 5. deviceManufacturerCode만 담긴 배열 만들기(중복 제거)
const deviceM = items_array.map(
  (items_array) => items_array["deviceManufacturerCode"]
);
const deviceM_dedu = deviceM.filter((code) => code !== undefined);
console.log(deviceM_dedu);

// 6. roomId만 담긴 배열 만들기 (중복 제거)
const roomId = items_array.map((items_array) => items_array["roomId"]);
let roomId_dedu = new Set(roomId);
roomId_dedu = [...roomId_dedu]; //객체에서 배열로 바꾸기
console.log(roomId_dedu);

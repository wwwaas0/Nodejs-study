// sample.json 객체에서 name 속성에 Hue가 들어있는 객체만 남기고 나머지는 제거하기
sample = require("./sample.json");
const items_array = sample["items"];
function func1(value) {
  if (value.name.includes("Hue")) return true;
  else return false;
}

const filter_hue = items_array.filter(func1);
console.log(filter_hue);

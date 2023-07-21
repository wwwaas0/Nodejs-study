// 모듈에서 변수와 함수만 따로 불러내기

// 방법1
const module1 = require("./002.js");
console.log(module1.add(7, 2));
console.log(module1.defaultNum);
console.log(module1.minus(5, 2));
console.log(module1.division(6, 4));
console.log(module1.multi(6, 4));
console.log(module1.remain(6, 4));

// 방법2
const { add, defaultNum } = require("./002.js"); //따로 빼냄

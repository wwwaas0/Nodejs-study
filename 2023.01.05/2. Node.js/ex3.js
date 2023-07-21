// 모듈에서 함수만 따로 불러내기

// 방법1
const module1 = require("./ex2.js");
console.log(module1.add(7, 2));
console.log(module1.minus(7, 2));
console.log(module1.defaultNum);

// 방법2
const { add, minus, defaultNum } = require("./ex2.js");
console.log(add(7, 2));
console.log(minus(7, 2));
console.log(defaultNum);

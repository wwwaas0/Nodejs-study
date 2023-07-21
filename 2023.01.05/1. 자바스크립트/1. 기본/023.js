// 자료형 변환
console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2);

// 다른 자료형끼리의 사칙연산은 자료형을 맞춰준 뒤 변환 추천
// 문자열 --> 숫자(정수)
const str = "123";
let str2num = parseInt(str);
console.log(str2num);

// 문자열 --> 숫자(소수)
const str2 = "234.1";
str2num = parseFloat(str2);
console.log(str2num);

// 숫자 --> 문자열
const num = 100;
const num2str = String(num);
console.log(num2str);

// 숫자 --> 문자열
console.log(`${num}`);

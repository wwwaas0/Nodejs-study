// 문자열 붙이기
const a = "123";
const b = "456";
console.log(a + b);

// 문자열 안에 백틱 사용하기
console.log(`백틱사용 ${a} ${b}`);

// 문자열 자르기
const str = "12345";
let result = str.slice(0, 3); //남겨놓을 부분
console.log(result);

result = str.slice(3); //끝점은 생략가능
console.log(result);

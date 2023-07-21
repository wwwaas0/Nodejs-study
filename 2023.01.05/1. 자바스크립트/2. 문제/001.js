// 1. a와 b를 파라미터로 받아 a+b를 리턴하는 함수 만들기
let a = 10;
let b = 3;

function plus(a, b) {
  return a + b;
}
// 2. a와 b를 파라미터로 받아 a+b를 리턴하는 화살표형 함수 만들기
const arrowplus = (a, b) => {
  return a + b;
};

console.log(plus(a, b));
console.log(arrowplus(a, b));

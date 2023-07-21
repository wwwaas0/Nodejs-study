// 모듈 구현하기

// 모듈은 분리된 각각의 자바스크립트 파일
// 각 파일은 특정한 목적을 가진 여러 개의 함수와 변수의 집합

const defaultNum = 1;

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

module.exports = {
  defaultNum,
  add,
  minus,
  mul,
  divide,
};

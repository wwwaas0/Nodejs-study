// Promise
// Promise는 자바스크립트 비동기처리에 사용되는 객체.
// 비동기처리란 다른 작업이 완료되는 것을 기다리지 않고 대기중인 다른 코드를 실행하는 것
// Promise는 pending(대기), Fulfilled(완료), reject(거부) 상태로 나뉨
// Promise는 생성시 callback함수를 인자로 받음. 해당 함수의 처리결과에 따라 resolve(Fulfilled), reject를 반환함

const pending = new Promise(function (resolve, reject) {}); // 기본 객체는 대기 상태

const fulfilled = new Promise(function (resolve, reject) {
  resolve("비동기 처리 완료");
});

const rejected = new Promise(function (resolve, reject) {
  reject("비동기 처리 거부");
});

console.log(pending, fulfilled, rejected);

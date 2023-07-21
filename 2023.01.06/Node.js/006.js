// 전역 Timer 모듈 사용하기
// 전역 모듈은 require 없이 사용가능

function sample() {
  console.log("test");
}
// const timeout = setTimeout(() => {
//   console.log("1초 후에 실행됩니다.");
// }, 1000);
setTimeout(sample, 2000);

// const interval = setInterval(() => {
//   console.log("1초 마다 실행됩니다.");
// }, 1000);
setInterval(sample, 2000);

const immediate = setImmediate(() => {
  //잘 안 쓰임
  console.log(
    "setImmediate 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다."
  );
});

console.log("setImmediate 보다 먼저 실행됩니다.");

setTimeout(() => {
  clearInterval(interval); //변수명이 interval인 1초 마다 콘솔창에 출력하기 위해 정의한 setInterval 함수를 종료합니다.
}, 3000);

const id = setInterval(sample, 2000);
console.log(`id: ${id}`);
clearInterval(id); //반복 취소?

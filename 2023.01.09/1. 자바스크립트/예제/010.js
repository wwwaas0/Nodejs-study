// 2초 후에 cb1 함수를 실행하고, 1초 후에 cb2 함수를 실행하고 싶은 경우
function cb1() {
  console.log("cb1 실행");
  setTimeout(cb2, 1000);
}
function cb2() {
  console.log("cb2 실행");
}
setTimeout(cb1, 2000);

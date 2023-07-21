// callback 함수가 인자를 전달받는것에 따라서 실행결과가 다르다
const arr = [10, 20, 30, 40];
function cb1(value) {
  console.log(value);
}
function cb2(value, index) {
  console.log(value, index);
}

arr.map(cb1);
console.log();
arr.map(cb2);

// 1. 다음 배열에서 5의 배수 찾기
const arr = [40, 52, 60, 24];
function func(num) {
  if (num % 5 == 0) return true;
  else return false;
}
console.log(arr.find(func));

// 2. 다음 배열에서 3의 배수 존재 여부 확인
const arr2 = [1, 2, 3, 4, 5, 6];
function func2(num) {
  if (num % 3 == 0) return true;
  else return false;
}
let result2 = arr2.includes(3);
let result3 = arr2.find(func2);
console.log(result2);
console.log(result3);

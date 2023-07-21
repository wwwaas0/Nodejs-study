// 1. 다음 배열에서 3 이상의 값 제거하기
const arr = [1, 2, 3, 4, 5];
function fun(num) {
  if (num >= 3) return false;
  else return true;
}
const filter_arr = arr.filter(fun);
console.log(filter_arr);

// 2. 다음 배열에서 10 이하의 값 제거하기
const arr2 = [2, 4, 6, 8, 10, 12, 14];
function fun2(num) {
  if (num <= 10) return false;
  else return true;
}
const filter_arr2 = arr2.filter(fun2);
console.log(filter_arr2);

// 3. 다음의 배열에서 2의 배수 제거하기
const arr3 = [1, 2, 3, 4, 5, 6];
function fun3(num) {
  if (num % 2 == 0) return false;
  else return true;
}
const filter_arr3 = arr3.filter(fun3);
console.log(filter_arr3);

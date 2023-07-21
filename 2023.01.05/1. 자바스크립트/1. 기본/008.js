// 배열 값 제거
const arr = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 3) arr2.push(arr[i]);
}
console.log(arr2);

// filter 함수를 통한 값 제거
function func(num) {
  if (num == 3) return false;
  else return true;
}
const arr3 = arr.filter(func); //filter: false값을 거르고 true값만 가져옴
console.log(arr3);

// filter + arrow 함수를 통한 값 제거
const arr4 = arr.filter((num) => num != 3);
console.log(arr4);

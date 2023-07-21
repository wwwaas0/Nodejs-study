// 1. 다음의 배열을 순회하면서 출력하기
const arr = ["start", "middle", "end"];

for (num of arr) {
  console.log(num);
}

// 2. 다음의 배열을 순회하면서 값과 인덱스를 출력하기
const arr2 = ["start", "middle", "end"];
arr.forEach(function (value, index) {
  console.log(value, index);
});

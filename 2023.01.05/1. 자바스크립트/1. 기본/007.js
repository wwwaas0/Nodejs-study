// 배열 조작(for)
console.log("// 배열 조작(for)");
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  arr[i]++;
}
console.log(arr);

// 배열 조작(for of)
console.log("// 배열 조작(for of)");
for (num of arr) {
  num++;
}
console.log(arr);

// map 메서드 활용
console.log("// map 메서드 활용");
const arr2 = arr.map((num) => num++);
console.log(arr, arr2);

// map 메서드는 2번째 파라미터로 index를 전달받음
console.log("// map 메서드는 2번째 파라미터로 index를 전달받음");
arr.map((num, index) => {
  console.log(num, index);
});

// 배열 관련 메서드

// 배열 순회(for)
console.log("// 배열 순회(for)");
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열 순회(forEach)
console.log("// 배열 순회(forEach)");
arr.forEach(function (value, index) {
  //하나씩 처음부터 끝까지 방문
  console.log(value, index);
});

// 배열 순회(for of)
console.log("// 배열 순회(for of)"); //forEach를 줄인 것, index 반환 안함
for (num of arr) {
  console.log(num);
}

// 배열 순회(map, function)
console.log("// 배열 순회(map, function)");
function traversal(num) {
  // 매개변수로 index도 가능
  console.log(num);
}
arr.map(traversal); //traversal 함수에 배열값을 차례대로 넘겨줌

console.log("// 배열 순회(map, arrow function)");
// 배열 순회(map, arrow function)
const arrowFunction = (num) => console.log(num);
arr.map(arrowFunction);

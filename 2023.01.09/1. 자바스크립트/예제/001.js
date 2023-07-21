// 자바스크립트의 배열을 순회하는 가장 쉬운 방법은 map 함수를 사용하는 것
// map 함수는 callback 함수를 인자로 받는다. 이 callback 함수는 각 원소를 순회할 때 마다 실행된다
// callback 함수에 전달된 인자는 원소의 값(value), 원소의 인덱스(index)가 있다.
const arr = [10, 20, 30, 40];
function cb() {}
arr.map(cb); // map 함수는 원소를 순회할 때마다 callback 함수를 실행함

// map 함수의 내부 구조
for (let index = 0; index < arr.length; index++) {
  cb(arr[index], index);
}

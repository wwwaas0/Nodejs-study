// 모든 원소를 문자열로 바꿔줘야 하는 경우
const arr = [1, 2, 3, 4, 5];
function toString(value) {
  return `${value}`;
  //return String(value)로 해도 됨
}
const result = arr.map(toString);
console.log(result);

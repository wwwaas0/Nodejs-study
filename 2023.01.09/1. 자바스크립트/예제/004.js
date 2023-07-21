// 만약 배열의 모든 원소를 대상으로 조작이 필요한 경우가 있다면 map 함수가 유용하다
const arr = [10, 20, 30, 40];

// 모든 원소에 더하기 10을 해야 하는 경우
function cb1(value) {
  return value + 10;
}

// 짝수 인덱스에 한해서 100을 빼준 경우
function cb2(value, index) {
  if (index % 2 == 0) return value - 100;
  else return value;
}

const result1 = arr.map(cb1);
const result2 = arr.map(cb2);
console.log(result1);
console.log();
console.log(result2);

// 배열에서 값 찾기
const arr = [10, 20, 30];
let result = arr.find((num) => num == 10);
console.log(result); //처음 마주치는 true값만 찾는다

// 배열에서 값의 인덱스 찾기
let result2 = arr.findIndex((num) => num == 10);
console.log(result2);

// 배열에서 특정 값의 존재여부 확인하기
let result3 = arr.includes(20);
console.log(result3);

// 1. 다음의 배열의 원소에 3만 남도록 배열을 조작하기
const arr = [1, 2, 3, 4, 5];

arr.pop();
arr.pop();
arr.shift();
arr.shift();

console.log(arr);

// 2. 다음의 배열이 [6, 7, 3, 8, 9] 형태로 남도록 배열을 조작하기
const arr2 = [1, 2, 3, 4, 5];

arr2.pop();
arr2.pop();
arr2.shift();
arr2.shift();

arr2.push(8);
arr2.push(9);
arr2.unshift(7);
arr2.unshift(6);

console.log(arr2);

// 배열의 앞에서부터 원소 빼내기
let nums = [1, 2, 3, 4, 5];
// const [first, second] = nums;
// console.log(first, second);

// 배열에서 앞에서부터 원소 빼내기2
const [first, second, ...rest] = nums; //rest에 first, second를 제외한 모든 숫자가 들어감
console.log(first, second, rest);

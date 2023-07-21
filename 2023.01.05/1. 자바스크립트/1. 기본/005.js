// 빈 배열 선언 방법
const arr = [];
const arr2 = new Array();
console.log("// 빈 배열 선언 방법");
console.log(arr, arr2);

// 배열 선언 및 초기화
const arr3 = ["kim", "kang", "park"];
const arr4 = [1, 2, 3, 4, 5];
const arr5 = ["섞어", 1, {}, []]; // 다양한 자료형을 원소로 가질 수 있음
console.log("// 배열 선언 및 초기화");
console.log(arr3, arr4, arr5);

// 배열 접근
console.log(arr3[0], arr3[1], arr3[2]);

// 배열 뒤 데이터 추가하기
console.log("// 배열 뒤 데이터 추가하기");
const arr6 = ["middle"];
arr6.push("rear");

// 배열 앞 데이터 추가하기
console.log("// 배열 앞 데이터 추가하기");
arr6.unshift("front");
console.log(arr6);

// 배열 뒤 데이터 삭제하기
console.log("// 배열 뒤 데이터 삭제하기");
arr6.pop();
console.log(arr6);

console.log("// 배열 앞 데이터 삭제하기");
// 배열 앞 데이터 삭제하기
arr6.shift();
console.log(arr6);

const students = [
  { name: "kang", age: 20 },
  { name: "kang", age: 23 },
  { name: "kim", age: 21 },
  { name: "kim", age: 25 },
  { name: "jung", age: 20 },
  { name: "hwang", age: 18 },
  { name: "park", age: 24 },
];

// 배열에서 이름 값만 빼내기
const names = students.map((student) => student["name"]);
console.log(names);

// 배열에서 나이 값만 빼내기
const ages = students.map((student) => student["age"]);
console.log(ages);

// 배열에서 이름이 kang인 사람만 빼내기
const kangs = students.filter((student) => student["name"] === "kang");
console.log(kangs);

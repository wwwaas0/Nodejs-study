// 전역 console 사용하기

console.log("hello world"); //일반적인 로그
console.log("hello %s", "world"); //일반적인 로그, %s 를 사용해서 문자열 데이터를 파라미터로 전달

const world = "world";
console.log(`hello ${world}`); //자바스크립트의 템플릿 리터럴 문법을 사용

console.error(new Error("에러 메시지 출력")); //에러 로그 출력

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr); //테이블 형태로 배열/오브젝트 데이터 출력

const obj = {
  students: {
    grade1: { class1: {}, class: {} },
    grade2: { class1: {}, class: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

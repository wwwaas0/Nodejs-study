// 객체 생성하기 구조체 느낌쓰
const student1 = {
  //key:value
  id: 20230000,
  major: "Software",
};
console.log(student1);

// 객체의 속성(key)으로 값(value) 접근하기
console.log(student1.id, student1["major"]);

// 객체에 key, value 추가하기
student1.univ = "ajou";
console.log(student1);

// 객체에 key, value 추가하기2
student1["성별"] = "남자";
console.log(student1);

// 객체 값 변경하기
student1["성별"] = "여자";
console.log(student1);

// 객체 값 삭제하기
delete student1["성별"];
console.log(student1);

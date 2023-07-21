// 구조 분해 할당(Desctructing Assignment)
const student = {
  name: "kang",
  age: 20,
  major: "software",
  colledge: "ajou",
  gender: "male",
};

// 이름과 나이만 별도의 변수로 선언하고자 하는 경우
// const name=student.name;
// const age=student.age;

const { name, age } = student; //위에 주석처리된 문장과 같은 의미
console.log(name, age);

const { major, ...rest } = student;
console.log(major, rest);

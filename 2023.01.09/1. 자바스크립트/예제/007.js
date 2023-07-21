// 체이닝(Chaining) 사용하기
const scores = [10.1, 25.3, 34.5, 45.6, 52.5];

// 원소를 정수로 바꿔주는 함수(소수점 버림)
function toInt(value) {
  return parseInt(value);
}

// 원소의 점수에 따라서 등급을 부여하는 함수
function toGrade(value) {
  if (value <= 10) {
    return "F";
  } else if (value <= 40) {
    return "B";
  } else {
    return "A";
  }
}

const grades = scores.map(toInt).map(toGrade);
console.log(grades);

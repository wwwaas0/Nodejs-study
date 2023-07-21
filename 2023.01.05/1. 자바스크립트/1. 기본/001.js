// 변수 선언
// var로 선언 가능
// var은 값 재할당 가능
var a = 1;

// ES6에서 추가된 기능
// let, const 키워드로 선언 가능
// let은 값 재할당 가능, const는 재할당 불가
let b = 2;
const c = 3;

// 함수 선언
function fun(param) {
  return param + 1;
}

// 화살표형 함수 선언(Arrow Function)
const arrowFunc = (param) => param + 1;

const ans1 = fun(1);
const ans2 = arrowFunc(1);
console.log(ans1, ans2);

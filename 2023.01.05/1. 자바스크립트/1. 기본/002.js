// 원시 (primitive) 자료형
let a = 10; //number 자료형, 정수, 소수 구분 안함
let b = "123"; //string ``, '', ""
let c = true; //boolean
let d = BigInt(100); //8바이트 이상인 경우, 자동으로 바꿔줌
let e = Symbol("a"); //식별자, 자동으로 바꿔줌
let f = undefined; //정의되지 않음, 오류가 있다는 뜻, 없는 값을 가져올 때 뜸
let g = null; //비어있음

// 자료형을 확인해보기 위해서는 아래와 같이 typeof 키워드를 사용
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

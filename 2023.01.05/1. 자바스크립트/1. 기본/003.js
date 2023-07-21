// 자바스크립트 자료형
// 원시형: Boolean, Null, Undefined, Number, BigInt, String, Symbol
// 객체: 원시형 데이터의 집합

console.log("// Boolean");
const tr = true;
const fa = false;
console.log(tr, fa);

console.log("// Null");
const nu = null;
console.log(nu, typeof nu);

console.log("// undefined");
const undef = undefined;
console.log(undef, typeof undef);

console.log("// Number");
const num = 123;
console.log(typeof num);

console.log("// BigInt");
// 정수 끝에 n을 추가하거나 생성자를 통해 생성
const bi1 = 2n ** 53n;
const bi2 = BigInt(2 ** 53);
console.log(typeof bi1, typeof bi2);

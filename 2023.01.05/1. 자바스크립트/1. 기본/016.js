// 객체 복사
const items = { water: 1000, cola: 2000, juice: 3000 };
//원시 자료형은 대입해도 복사가 되지만, 객체는 안됨 copy 함수 사용

const copy = { ...items };
console.log(copy);

// 특정 값만 변경하고 나머지 복사하기, 추가
const copy2 = {
  ...items,
  water: 2000,
  soda: 3000,
};

console.log(copy2);

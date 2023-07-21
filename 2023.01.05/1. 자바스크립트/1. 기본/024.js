// Set 컬렉션 사용하기
const arr = [1, 1, 1, 1, 1];
const set = new Set(arr);
console.log(set);

// set에 데이터 추가하기
set.add(2);
console.log(set);

// set에 데이터 제거하기
set.delete(2);
console.log(set);

// set에 있는 원소 조회하기
const result = set.has(1);
console.log(result);

// set을 array로 변환하기
const alphabets = ["a", "a", "b", "b", "c", "c"];
const set2 = new Set(alphabets); //중복 제거
// const uniques = Array.from(set2);
const uniques = [...set2]; //배열로 복사
console.log(uniques);

// filter 메서드는 방문한 원소와 인덱스를 callback 함수에 전달한다
// callback 함수가 true를 반환하면 남기고, false를 반환하면 제거한다
const arr = [1, 2, 3, 4, 5];
function cb(value) {
  if (value < 3) return true;
  else return false;
}
const result = arr.filter(cb);
console.log(result);

// map함수는 callback 함수가 return 하는 값을 배열에 저장해뒀다가 한번에 리턴한다
const arr = [10, 20, 30, 40];
function cb1(value) {
  return value;
}

const result = arr.map(cb1);
console.log(result);

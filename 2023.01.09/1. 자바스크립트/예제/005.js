// 배열의 원소가 객체인 경우 객체의 속성 1개만 빼내기 위한 map 함수
const arr = [
  {
    ko: "빨강",
    en: "red",
  },
  {
    ko: "파랑",
    en: "blue",
  },
  {
    ko: "노랑",
    en: "yellow",
  },
];

// 각 객체의 ko만 빼내는 함수
function cb(obj) {
  return obj.ko;
  // return obj['ko']
}
const result = arr.map(cb);
console.log(result);

// 객체 안의 여러 원소를 동시에 리턴하는 경우
const arr = [
  {
    ko: "한국",
    en: "Korea",
    cn: "韓國",
  },
  {
    ko: "미국",
    en: "USA",
    cn: "美國",
  },
  {
    ko: "영국",
    en: "UK",
    cn: "英國",
  },
];

function cb(obj) {
  return {
    ko: obj.ko,
    en: obj.en,
  };
}
const result = arr.map(cb);
console.log(result);

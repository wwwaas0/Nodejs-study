// 객체 안을 반복문으로 돌고자 하는 경우
const items = { water: 1000, cola: 2000, juice: 3000 };

// 객체 안의 key를 순회하고자 하는 경우
for (let key in items) {
  console.log(key, items[key]);
}

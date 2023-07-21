// Promise 비동기 처리의 예시
function myPromise(condition) {
  return new Promise(function (resolve, reject) {
    if (condition) {
      resolve("조건 만족으로 인해 성공");
    } else {
      reject("조건 불만족으로 인해 실패");
    }
  });
}

const condition = false;
myPromise(condition)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.error(result);
  });

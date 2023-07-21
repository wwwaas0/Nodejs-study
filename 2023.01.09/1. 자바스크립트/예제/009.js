// 비동기 처리
// setTimeout, setInterval 함수 모두 일정 시간이 지난 후 callback 함수를 실행한다
function cb() {}
setTimeout(cb, 1000); // 1000ms == 1초 후에 cb 함수 실행
setInterval(cb, 2000); // 2000ms == 2초 마다 cb 함수 실행

//터미널로 mqtt 모듈 설치하기
const mqtt = require("mqtt"); //mqtt 불러오기
const client = mqtt.connect("mqtt://localhost:1883"); //mqtt 프로토콜 :// 브로커의 ip : 포트의 번호

client.on("connect", function () {
  //연결이 되었을 때 2번째 인자의 함수 실행
  client.subscribe("hello", function (err) {
    //구독이 되면 hello라는 구독을 한다
    //에러가 뜨면 2번째 함수 인자 실행
    console.error(err);
  });
});

client.on("message", function (topic, message) {
  //어떤 메시지가 왔을 때 2번째 인자의 함수 실행
  // message is Buffer
  console.log(message.toString());
});

//메시지를 브로커에게 보낼 때
client.publish("hello", "123");

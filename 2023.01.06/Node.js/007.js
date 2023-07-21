// path 모듈 사용하기
const path = require("path");

// 파일이름 가져오기
console.log(__filename); //파일이름 + 경로 포함
console.log(path.basename(__filename)); // 파일이름만
console.log(path.basename(__filename, ".js")); // 파일이름에서 확장자 제외

// 환경변수 구분자 가져오기
// 윈도우는 세미콜론(;), 나머지는 콜론(:)사용
console.log(path.delimiter);

// 파일이 위치한 폴더 경로
console.log(__filename); // 파일이름 + 경로 포함
console.log(path.dirname(__filename)); // 파일이 위치한 경로
console.log(__dirname); // 파일이 위치한 경로, 많이 사용

// 파일의 확장자 반환
console.log(path.extname("001.js"));

// 문자열로 주어진 경로들을 모두 합쳐서 하나의 경로로 만들어 반환
const a = path.join("/foo", "bar", "baz/asdf");
console.log(a);

// 문자열로 된 경로를 path 객체로 변경하기
const filedir =
  "C:UserslifecarelabDesktopwinter_school강의자료\1월5일코드\2. Node.js";
const b = path.parse(filedir);
console.log(b);

// 문자열을 path로 분할하기
console.log(path.sep);
const c = filedir.split(path.sep);
console.log(c);

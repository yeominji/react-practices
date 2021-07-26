'use strict'; // 블록 스코프 변수(ES6)

var users = [{
  no: 0,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 1,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체분해-파라미터(ES6)

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // 템플릿 문자열(ES6)
  console.log("".concat(no, ": ").concat(name, " : ").concat(email));
} // for..of(ES6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}

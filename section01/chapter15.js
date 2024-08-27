// 객체 1

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 담기)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {}, // 함수도 가능
  10: 20, // 숫자도 key 가능
  "like cat": true, // 문자열로 가능
};

// 3. 객체 프로퍼티 다루는방법.
let name = person.name;
let age = person["name"];

let property = "name";
let name2 = person[property];

// 4. 객체 프로퍼티 add
person.job = "backend";
person["favori"] = "dev";

// 5. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 6. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 7. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false

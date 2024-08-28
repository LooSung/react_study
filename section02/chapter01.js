// Truthy 와 Falsy

// 1. Falsy -> 거짓 같은 값 (Null 또는 Empty 또는 0)
// 밑의 변수를 조건문에 넣게 되면 무조건 false 가 나온다.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy -> 참 같은 값
// Falsy 7가지의 값을 제외한 모든 나머지 가능...
// 밑의 변수를 조건문에 넣게 되면 무조건 true 가 나온다.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 예제
function printName(person) {
  // if (person === undifined || person == null) {
  if (!person) {
    // 값이 있는지 없는지 확인 하기위한 validation
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" }; // true
printName(person);

let person2; // false
printName(person2);

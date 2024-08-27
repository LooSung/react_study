// 객체 2

// 1. 상수 객체 (불면 프로퍼티 , 객체)
// -> animal 자체는 상수이며, 그안의 내용(프로퍼티)은 바꿀지언정 타입은 못 바꾼다.
const animal = {
  type: "cat",
  name: "black",
  color: "yellow",
};

animal.age = 2;
animal.name = "Red";
delete animal.color;

// 2. 매서드 -> 값이 함수인 프로퍼티
const animal2 = {
  type: "dog",
  name: "black",
  // 매서드 선언, 프로퍼티의 동작을 정의한다.
  sayHi() {
    "Hi";
  },
};

personalbar.sayHi();

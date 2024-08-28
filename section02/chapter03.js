// 구조분해할당 -> 배열과 객체와 같이 모여있는 프로퍼티를 분해한다.

// 1. 배열
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 이렇게 불러 쓸수 있다...

// 2. 객체
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello" } = person;
console.log(age, hobby, name, extra); //이렇게 불러 쓸 수 있다.

// 3. 함수
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); //이렇게 불러 쓸 수 있다.
};

func(person);

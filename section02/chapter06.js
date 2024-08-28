// 반복문으로 배열과 객체 순회하기
let arr = [1, 2, 3];

let persons = {
  name: "choi",
  age: "32",
};

// 1.배열 순회 for 또는 for of 사용
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 배열 또는 Itorable(Map, Set) 반복문 (배열의 요소, 문자열의 문자, 이터러블 객체의 값)
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회 for in 사용
// Object.keys
let keys = Object.keys(persons);

for (let key of keys) {
  console.log(key, personp[key]);
}

// Object.values
let values = Object.values(persons);

for (let value of values) {
  console.log(value);
}

// for in 객체 속성 반복문 (객체의 속성 이름(키))
for (let key in persons) {
  console.log(key);
}

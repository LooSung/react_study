// 배열 메서드 (변형)
// 1. filter -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "A", age: 2 },
  { name: "B", age: 2 },
  { name: "C", age: 4 },
];

const agePeople = arr1.filter((item) => item.age === 2);

// 2. map -> 배열의 모든 요소를 순회하면서, 각각의 콜백함수를 실행하고 그 결과를 모아서 배열로 변환
let names = arr1.map((item) => item.name);
//console.log(names);

// 3. sort -> 사전순(String)으로 정렬하는 매서드
let arr3 = ["b", "a", "c"];
arr3.sort();

let arr4 = [5, 3, 10];
// 정렬이 안될 수도있따.
let test = arr4.sort();
// 슬라이딩 윈도우 알고리즘
let test2 = arr4.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(test2);

// 4. toSorted -> 기존 배열이 아닌 정렬된 새로운 배열을 변환하는 메서드
let arr5 = [5, 3, 10];
const sortedNew = arr5.toSorted();

// 5. join -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["b", "a", "c"];
const joinedString = arr6.join(" "); // b a c
// const joinedString = arr6.join("_"); // b_a_c
console.log(joinedString);

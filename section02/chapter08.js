// 배열 메서드 (순회 탐색)
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {});

let doubleArr = [];

// 2의 배수
arr1.forEach((item) => doubleArr.push(item * 2));

// 2. includes -> 배열에 특정 요소가 있는지 확인하는 매서드

let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf -> 특정 요소의 인덱스를 반환한다.
// 객체 타입의 값의 배열은 찾기 어렵다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(3);

// 4. findIndex -> 모든 요소를 순회하면서, 콜백함수를 만족하는 반환하는 메서드
// 객체 타입의 값의 배열은 찾을때는 findIndex를 활용해보자
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item === 4) return true;
});

// console.log(findIndex);

// 5. find -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는다.
// 그리고 바로 요소를 리턴한다.

let arr5 = [{ name: "홍" }, { name: "텐" }];

const finded = arr5.find((item) => item.name === "홍");
console.log(finded);

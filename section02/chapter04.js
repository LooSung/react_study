// Spread 연산자와 Rest 매개변수
// Spread : 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역활

// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// 객체
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  a: 3,
  b: 4,
};

// 함수
function funcA(p1, p2, p3) {
  return p1, p2, p3;
}

funcA(...arr1);

// Rest 매개변수 -> 나머지 변수 추가적으로 들어오는 변수를 모두 저장한다.
// 그래서 Rest 매개변수를 가운데에 놓게 되면 안된다.
function funcB(one, two, ...rest) {
  return rest;
}

funcA(...arr1);

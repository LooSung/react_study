// 6가지의 요소 조작 메서드
let arr1 = [1, 2, 3];

// 1. push : Last In
const pushArry = arr1.push(4);

// 2. pop : Last Out
const popArry = arr1.pop();

// shift는 앞에 숫자를 넣어야겠때문에.. 인덱스를 새로 배정해야한다.
// 그래서 push , pop 보단 느리다.

// 3. shift : First In
const shiftArry = arr1.shift();

// 4. unShift : First Out
const unshiftArry = arr1.unshift();

// 5. slice : split
const sliceArry = arr1.slice(2, 3); // 사이 값
const backSliceArry = arr1.slice(-1); // 뒤에서부터

// 6. concat : 두개의 배열을 붙일때
let arr2 = [4, 5];
const newArr = arr1.concat(arr2);

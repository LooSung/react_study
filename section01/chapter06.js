// 형 변환 (Type Casting)
//1. 묵시적 형변환 (개발자가 직접 하지 않아도, 자바스크립트 엔진이 형 변환 해준다.)
let num = 10;
let str = "20";

// num 을 묵시적으로 String으로 변환
const result = num + str; // 1020

// 명시적 형변환 (개발자가 내장함수를 이용해서 형 변환을 한다.)
let str1 = "10";
let strToNum1 = Number(str1);

const result2 = 10 + strToNum1; // 20

// parseInt를 쓸때는 앞에 문자가 없을 때 쓰는 것으 유의!
let str2 = "10개";
let strToNum2 = parseInt(str2); // 10

let num1 = 29;
let numToStr1 = String(num1); // "20"

// 연산자 2
// 1. null 병합 연산자
// null , undifined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10

// 2. typeof 연산자
// 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "Hi"; // string
var7 = 10; // number
var7 = `ss`; // string

let t1 = typeof var7;

// 3. 삼항연산자
// 항을 3개 사용하는 연산자 -> 조건식을이용해서 참, 거짓일때 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8 값이 짝수 -> "짝" 홀수 -> "홀" 를 나타내어라.
let res = var8 % 2 === 0 ? "짝" : "홀";

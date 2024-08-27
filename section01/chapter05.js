// 자료형 (원시타입)
//1. Number Type : 사칙연산이 가능하다.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // Not An Number (불가능한 수치 연산이 싫패했을때 사용)

//2. String Type
let myName = "최우성";
let myLocation = "관악구";
let introduce = myName + myLocation;
// 최우성관악구

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation} 에 거주합니다.`;
// 최우성은 관악구에 거주합니다.

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Nul Type
let empty = null;

// 5. Undefined Type (초기화를 하지 않거나, 아무런 값을 선정하지 않을때.)
let none;

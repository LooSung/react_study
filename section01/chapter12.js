// 함수 표현식과 화살표 함수(람다)
function funcA() {
  "funcA";
}

// 함수 자체를 변수에 담을 수 있다.
let varA = funcA;

// 1. 익명함수 : 호이스팅이 안된다.
let funcB = function () {
  "funcB";
};

// 2. 화살표 함수 (람다)
let varC = (value) => {
  "람다 아뇨?";
  value + 1;
};
varC(10);

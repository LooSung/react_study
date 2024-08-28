// 단락평가 (Short-circuit Evluation)
// && 또는 || 연산자를 사용하지 않고 변수 만으로 값을 평가한다.

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

// 첫번째 피 연산자의 값이 False인 것을 알 수 있기 때문에,
// returnTrue()는 무시된다. 결과가 False임을 알려준다.
returnFalse() && returnTrue();

// 첫 번째 피 연산자의 값이 True이기에, 첫 번째 값을만으로 답을 확정 지을 수 없다.
// 그래서 다음 피연산자인 returnFalse()까지 실행하고, 결과가 false임을 알려준다.
returnTrue() && returnFalse();

// 3. 예제
function printName(person) {
  const name = person & person.name;
  console.log(name);
}

printName(); // undifiend
printName({ name: "이정환" }); // 이정환

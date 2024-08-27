// 함수

function greeting() {
  "안녕하세요";
}

greeting();

// 매개변수를 넣어준다.
function getArea(width, height) {
  return (area = width * height);
}

let result = getArea(10, 20);

let result2 = getArea2(10, 20);

// 함수안에 함수가 실행 되게 할 수 있다.
function getArea(width, height) {
  function checkValid(width) {
    if (width < 10) {
      ("거짓입니다.");
    }
  }
  checkValid(width);
  return (area = width * height);
}

// 호이스팅, (끌어올리다)
// 함수가 위에 선언되지 않았지만, 파일안에 함수를 찾아 불러 올 수 있다.
function getArea2(width, height) {
  function checkValid(width) {
    if (width < 10) {
      ("거짓입니다.");
    }
  }
  checkValid(width);
  return (area = width * height);
}

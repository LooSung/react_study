// 1. 콜백 함수 -> 자신이 아닌 다름 함수에, 인수로써 전달된 함수
// 함수를 통해서 다른 함수를 실행시킨다.
function main(value) {
  value();
}

function sub() {
  "Sub!!";
}

main(sub); // sub는 콜백함수라고 한다.

main(() => {
  "Sub!!";
}); // sub는 콜백함수라고 한다.

// CallBack 응용 안한거
function repeatEx(count) {
  for (let idx = 1; idx <= count; idx++) {
    idx;
  }
}
repeat(5); // 1,2,3,4,5

function repeatDoubleEx(count) {
  for (let idx = 1; idx <= count; idx++) {
    idx * 2;
  }
}
repeatDouble(5); //2,4,6,8,10

// CallBack 응용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  idx;
});

// 람다식도 가능
repeat(5, (idx) => {
  idx;
});

// repeat Double
repeat(5, function (idx) {
  idx * 2;
});

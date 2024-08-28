// 비동기 작업 처리하기
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  // 콜백함수.
  console.log(value);
});

// 에제
function orderFood(callback) {
  setTimeout(() => {
    const food = "Steak";
    callback(food);
  }, 2000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1000);
}

// 콜백 지옥에 빠지게 된다...
orderFood((food) => {
  console.log(food);

  coolDownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
  });
});

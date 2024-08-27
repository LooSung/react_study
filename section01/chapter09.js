// 조건문
// 1. if
let num = 10;

if (num >= 10) {
  ("num은 10 이상입니다.");
} else if (num === 10) {
  ("num은 10 입니다.");
} else {
  ("num은 10 이상이 아닙니다.");
}

// 2. switch
let animal = "cat";

switch (animal) {
  case "cat": {
    ("고양이");
    break;
  }
  case "dog": {
    ("강아지");
    break;
  }
  case "tiger": {
    ("호랑이");
    break;
  }
  default: {
    ("종류의 동물이 없습니다.");
  }
}

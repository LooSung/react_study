// Promise -> 비동기 작업을 실행시켜주는 객체
// const promise = new Promise((resolve, reject) => {
//   // executor -> 비동기 작업을 실행하는 함수
//   setTimeout(() => {
//     //console.log("Hi");
//     // resolve("안녕");
//     // reject("실패한 이유...")
//   }, 2000);
// });

// setTimeout(() => {
//   //console.log(promise);
// }, 3000);

// 예제
function add10(num) {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num의 숫자가 아니오");
      }
    }, 2000);
  });

  return promise2;
}

// // then -> 성공 한 후에
// promise2.then((value) => {
//   console.log(value);
// });

// // catch -> 실패했을때
// promise2.catch((error) => {
//   console.log(error);
// });

// promise Chaning : 두개를 합쳐서 사용한다.
// promise2
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const pResult = add10(0);
pResult
  .then((value) => {
    console.log(value);

    const newP = add10(value);
    newP.then((value) => {
      console.log(value);
    });
  })
  .catch((error) => {
    console.log(error);
  });

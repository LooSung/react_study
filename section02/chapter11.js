// Sync, Async
console.log(1);

// 비동기 작업을 Web APIs에 요청을 한다.
setTimeout(() => {
  console.log(2);
}, 3000); //  3초후에 실행시켜달라는 것

console.log(4);

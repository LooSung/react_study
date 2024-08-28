// async -  await

// 1. async 함수를 비동기로 만들어주는 키워드
// 함수가 Promise를 반환하도록 바꿔주는 키워드

async function getDate() {
  // 만약 이 함수안에 Promise 함수가 있다면,
  // Async를 사용하지않고 Promise 사용하게 한다.
  return {
    name: "A",
    id: "dd@2.com",
  };
}

console.log(getDate());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리 될따까지 기다리는 역활

async function printData() {
  const data = await getDate();
  console.log(data);
}
printData();

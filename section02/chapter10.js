// 1. Date 객체
let date1 = new Date(); // 현재시간 생성자

let date2 = new Date(1992, 12, 31, 10, 10, 10); // . -  구분자도 가능

// 2. TiemStamp : ms까지 되며, TimeZone 적용됨
let ts1 = date1.getTime();
let date4 = new date1(ts1);

// 3. 시간요소 추출
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let sec = date1.getSeconds();

// 4. 시간 수정하기 set 메서드
// date1.setFullYear(2024);

// 5. 시간을 여러 포멧으로 출력
data1.toDateString();
date1.toLocaleDateString();

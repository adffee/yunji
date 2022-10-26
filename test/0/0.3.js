'use strict';


let num1, num2;
let sum = 0;

num1 = +prompt('정수를 입력하세요 ');
num2 = +prompt('정수를 입력하세요 ');
sum = alert(`두 수의 합${num1+num2}는 20보다 ${num1 + num2 > 20 ? '큽니다' : '작습니다'}`);

///도진이꺼
// let num3, num4, sum2
// num3 = +prompt('정수 1');
// num4 = +prompt('정수 2');
// sum2 = num3 + num4;
// if (sum > 20) {
//     alert('두 수의 합이 20보다 커용');
// } else {
//     alert('두 수으 합이 20보다 작아용');
// }

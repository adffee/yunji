'use strict';

let num1, num2;
let sum = 0;


num1 = +prompt('정수를 입력하세요');
num2 = +prompt('정수를 입력하세요');

sum = alert(`${num1 + num2}`);

for (; ;) {
    num1 = +prompt('정수를 입력하세요');
    if (num1 > 0) {
        num2 = +prompt('정수를 입력하세요 '); {
            if (num2 > 0) {
                sum = alert(`${num1 + num2}`);
            }
        }
    } else {
        alert('정수를 입력하세요 ');
    }

//도진이꺼 
let num1, num2, sum1;
// num1 = +prompt('정수 1');
num1 = 5;     //임의정수
// num2 = +prompt('정수 2');
num2 = 4;     //임의정수
sum1 = num1 + num2;
console.log(sum1);



    // for (; ;) {
    //     num1 = +prompt('정수를 입력하세요');
    //     if (num1 < 0) {
    //         alert('정수를 입력하세요 ');
    //         break;
    //     } else {
    //         num2 = +prompt('정수를 입력하세요 '); {
    //             if (num2 < 0) {
    //                 alert('정수를 입력하세요 ');
    //                 break;
    //             }
    //         }
    //     } sum = alert(`${num1 + num2}`);
    // }
    // }
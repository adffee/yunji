'use strict';


let num1, num2, num3;
let av;


for (; ;){
    num1 = +prompt('숫자를 입력하세요'); {
    if (num1>0) {
        num2 = +prompt('숫자를 입력하세요'); {
            if (num2 > 0) {
                num3 = +prompt('숫자를 입력하세요');
            } if (num3 > 0) {
                av = (num1 + num2 + num3) / 3;
                break;
            }
        }
    }
    } 
} alert(`평균: ${av}`);


//도진이꺼 
// let num5, num6, num7, average = 0;
// for (; ;){
//     num5 = +prompt('정수 1');
//     if (num5 > 0) {
//         num6 = +prompt('정수 2');
//         if (num6 > 0) {
//             num7 = +prompt('정수 3');
//             if (num7 > 0) {
//                 break;
//             }
//         }
//     }
// }
// average = (num5 + num6 + num7)/3;
// alert(`평균은 ${average}`);

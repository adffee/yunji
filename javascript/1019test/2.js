/**
 * 1. 주어진 문자열에서 양 옆 공백을 지운채로 step1 변수에 저장하라.
 * 2. 해당 문자열에서 모든 공백을 지워서 step2 변수에 저장하라.
 */

'use strict'

let string = '               123   4    56    7 9   0  ';
let step1, step2;


step1 = string.trim();
console.log(step1);

step2 = step1.replace(/ /g, '');
console.log(step2);


// /  /g부분은 구글링함.

// let string = '               123   4    56    7 9   0  ';
// let step1, step2;
// /*
//  * 1. 주어진 문자열에서 양 옆 공백을 지운채로 step1 변수에 저장하라.
//  * 2. 해당 문자열에서 모든 공백을 지워서 step2 변수에 저장하라.
//  */
// step1 = string.trim();
// console.log(step1);

// step2 = step1.replace(' ', '');
// console.log(step2);

// for (; ;){
//     step2 = step2.replace(' ', '');
//     if (step2.indexOf(' ') == -1) {
//         break;
//     }
// }

// console.log(step2);
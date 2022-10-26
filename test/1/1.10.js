/**
 * 주어진 문자열을 매개변수로 전달하고 그 문자열에서 숫자를 걸러낸 후, 그 숫자들의 합을 구하는 함수를 작성하라.
 */

'use strict';

const string = 'aAb1B2cC34oOp';
const num1 = [];
let sum = 0;


function ma(num) {
    for (let i = 0, v = 0; i < num.length; i++){
        if (!isNaN(num[i])) {
            num1[v] = num[i];
            sum += +num1[v++];
        }
    } console.log(sum);
}

ma(string);


//도진이

/*
 * 주어진 문자열을 매개변수로 전달하고 그 문자열에서 숫자를 걸러낸 후, 그 숫자들의 합을 구하는 함수를 작성하라.
 */
// const string = 'aAb1B2cC34oOp';
// console.log(string);

// function Fc(array) {
//     let v = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] * 1) {
//             v += array[i]*1;
//         }
//     }
//     console.log(v);
// }

// Fc(string);
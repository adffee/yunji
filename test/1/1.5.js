/**
 * 주어진 숫자 배열에 짝수가 몇개고 홀수가 몇개인지를 담은 배열을 만들어라.
 * ex) [ 짝수, 홀수 ]
 */


'use strict';

const numList = [1, 2, 3, 4, 5,];
const result = [];
// const odd=[], even=[];
let odd = 0;
let even = 0;

for (let i = 0; i < numList.length; i++){
    if (numList[i] % 2 === 0) {
        // result[0] = ++even;
        // even[i] = numList[i];
        even++;
    } else {
        // result[1] = ++odd;
        // odd[i] = numList[i];
        odd++;
    }
}

console.log([even, odd]);
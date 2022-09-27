'use strict'

let sum = 0;
let sum1 = 1;
let sum2 = 1;
let total = 2;

for(let i = 1; i<=98; i++){
    sum = sum2 + sum1;
    sum2 = sum1;
    sum1 = sum;
    total += sum;
}

console.log(total)
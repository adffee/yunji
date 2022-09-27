'use strict'
// 1,1,2,3,5,8,13 ---100번재

// let sum = 0;
// let sum1 = 1; 
// let sum2 = 1;  
// let total = 2;

// for(let i = 1; i<=98; i++){
//     sum = sum2 + sum1;
//     sum2 = sum1;
//     sum1 = sum;
//     total += sum;
// }

// console.log(total)


// 1,3,5,7,9~20번째

let tot = 0;
let n = -1;

for(let i = 0; i <20; i++){
    n += 2;   
    tot += n;
}

console.log(tot)

//1,1,2,3,5,8,13 ---100번재
// let tot = 0;
// let first = 1;
// let second = 1;
// let current = 0;

// for(let i = 0; i< 98; i++){
//     current = first + second;
//     tot += current;
//     first = second;
//     second = current;
// }

// console.log(tot)
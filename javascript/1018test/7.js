'use strict';

const numList = [10, 25, 48, 98, 57];

let min = numList[0], max = numList[0];

for (let i = 1; i < numList.length; i++){
    if (min > numList[i]) min = numList[i];
    if (max < numList[i]) max = numList[i];
}

console.log(min, max);

//도진이거

// const numlist = [10, 25, 48, 98, 57];
// let min = 98, max = 10;

// for (let i = 0; i < numlist.length; i++) {
//     if (min > numlist[i]) min = numlist[i];
//     if (max < numlist[i]) max = numlist[i];
// }   
// console.log(min);
// console.log(max);
/**
* 주어진 배열을 역순으로 정렬한 배열을 만들어라.
*/

'use strict';

const numList = [1, 0, 1, 1, 1, 3, 5];

console.log(numList);

let numList2 =[];


for (let i = 0; i <7 ; i++) {
    numList2[i] = numList[numList.length-i-1];
}
console.log(numList2);

'use strict';


// 배열 array 변수에 정수 5개를 입력받는다.
// 최소값과 최대값, 두 수의 합을 구하는 프로그램을 구현하시오.
// 변수는 array, min, max, sum으로 제한한다.


const array = [ ];
let min = 100, max = 0;
let sum = 0;

for (let i = 0; i < 5; i++) { 
    array[i] =+prompt('숫자를 입력하세요 ');
    if (min > array[i]) { min = array[i]; }
    if (max < array[i]) { max = array[i]; }
    sum += array[i];
}

document.write(`최솟값: ${min}`);
document.write(`최댓값: ${max}`);
document.write(`합계 : ${sum}`);


///도진이거

// const array2 = new Array(5) ;
// let sum = 0;

// for (let i = 0; i < array2.length; i++) {
    //     array2[i] = +prompt(`정수 입력 (${i + 1})`);
    //     sum += array2[i];
    // }
// console.log(sum);

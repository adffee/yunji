'use strict';

const array = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];
const stringArray = [];
const numberArray = [];

/**
 * 주어진 배열 array에서 문자열과 숫자를 분리하려고 한다.
 * 문자열이면 stringArray로 넣고 숫자면 numberArray로 넣는 프로그램을 구현하라.
 * 편의상 결과는 콘솔로 찍는 것으로 한다.
 */

for (let i = 0, a = 0, b = 0; i < array.length; i++){
    if (isNaN(array[i])) {
        stringArray[a++]=array[i];
    } else {
        numberArray[b++]=array[i];
    }
}
console.log(stringArray);
console.log(numberArray);

// 도진이코드 

// const array5 = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];
// const stringArray = [];
// const numberArray = [];
// /*
//  * 주어진 배열 array에서 문자열과 숫자를 분리하려고 한다.
//  * 문자열이면 stringArray로 넣고 숫자면 numberArray로 넣는 프로그램을 구현하라.
//  * 편의상 결과는 콘솔로 찍는 것으로 한다.
//  */
// console.log(`${array5[0] % 1}`);
// console.log(`${array5[1] % 1}`);

// for (let i = 0,z =0, v= 0; i < array5.length; i++) {

//     if ((array5[i] % array5[i]) === 0) {
//         numberArray[z++] = array5[i];
//     } else {
//         stringArray[v++] = array5[i];
//     }

// }
// console.log(stringArray);
// console.log(numberArray);
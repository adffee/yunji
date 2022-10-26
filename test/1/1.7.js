/**
 * 주어진 배열의 요소들이 문자열인지 숫자인지 판별하는 로직을 구현하라.
 *
 * 1. 반복문을 함께 사용해야 할 것이다.
 * 2. 문자열과 숫자의 개수를 마지막에 출력하라.
 * ex) 문자열: 7 / 숫자: 3
 */

'use strict';

const array = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];

let v = 0;
let s = 0;

for (let i = 0; i < array.length; i++){
    if (isNaN(array[i])) {
        ++v;
    } else {
        ++s;
    }
}

// console.log(v, s);

///도진이꺼

// const array = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];
// const number = new Array();
// const string = new Array();
// for (let i = 0, v = 0, z = 0; i < array.length; i++) {
//     if (array[i] * 1) {
//         number[v] = array[i];
//         v++;
//     } else {
//         string[z] = array[i]
//         z++;
//     }
// }
// console.log(`숫자 : ${number.length}개`);
// console.log(`문자 : ${string.length}개`);

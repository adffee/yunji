/**
 * 주어진 숫자 number와 숫자 배열 numArray를 매개변수에 전달하고
 * numArray에서 number의 배수를 찾아 반환하는 함수를 작성하라.
 */

'use strict'

const numArray = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, ];
const number = 3;
const arr = [];

function yj(find,num) {
    for (let i = 0, v = 0;  i < find.length; i++){
        if (find[i] % num == 0) {
            arr[v++] = find[i];
        }
    } console.log(arr);
}

yj(numArray, number);

//도진이꺼

// * 주어진 숫자 number와 숫자 배열 numArray를 매개변수에 전달하고
// * numArray에서 number의 배수를 찾아 반환하는 함수를 작성하라.
// */
// const numArray = [4, 5, 6, 7, 8, 9, 10, 11, 12,];
// const number = 3;

// function Fc(dojin) {
//     const dj = new Array();
//     for (let i = 0, count = 0; i < dojin.length; i++) {
//         if (dojin[i] % number == 0) {
//             dj[count] = dojin[i];
//             count++;
//         }
//     }
//     console.log(dj);
//     console.log(dj.length);
// }

// Fc(numArray);

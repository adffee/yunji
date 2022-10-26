/**
 * 주어진 배열 array1, array2, array3을 arrayTo2DArray 함수에 인수로 전달하고
 * 2차원 배열의 형태로 리턴하는 로직을 완성하라.
 */

'use strict';

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [11, 12, 13, 14, 15];

function arrayTo2DArray(...arrays) {
    return arrays;
}

console.log(arrayTo2DArray(array1, array2, array3));
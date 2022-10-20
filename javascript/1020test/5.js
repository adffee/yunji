'use strict';

const array = [20, '', null, undefined, '문자열', NaN, '아이유', true, null, undefined, undefined];
const result = [];

/**
 * 주어진 배열 array에서 null과 undefined만 추출한 배열을 만드는 프로그램을 구현하라.
 */

for (let i = 0, v = 0; i < array.length; i++){
    if (array[i] == null || undefined) {
        result[v++] = array[i];
    }
}

console.log(result);
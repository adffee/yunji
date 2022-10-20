'use strict';

const array = [undefined, null, undefined, '문자열', 23, undefined, '몇개일까?', 40, 95];

/**
 * 주어진 배열에서 undefined 개수를 구하는 프로그램을 구현하라.
 * 변수는 count 하나로 제한한다.
 */


let count = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] === undefined) {
        ++count;
    }
}

console.log(count);
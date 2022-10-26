/**
 * 전달받는 인수의 제한이 없는 함수를 만들려고 한다.
 * 이 때 모든 인수를 배열의 형태로 묶어 리턴하는 함수를 구현하라.
 */

'use strict';

function func(...array){
    return array;
}

console.log(func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(func(1, 2, 3, 4, 5));


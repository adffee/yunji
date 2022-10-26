'use strict';

const string = 's';
const array = ['starwars', 'water', 'wood', 'strong', 'luke', 'darthvader'];
let result = 0;

/**
 * 주어진 문자열 string을 이용해 배열 array의 요소들 중에서 문자열 string을 포함하는 요소의 개수를
 * 구하는 프로그램을 구현하라.
 */


for (let i = 0; i < array.length; i++){
    if (array[i].includes(string)) {
        result++;
    }
}

console.log(result);
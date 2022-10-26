'use strict';

const array = ['문자열', 20, '사이의', '숫자를', 45, '잘 찾아서', 68, 35, '합해보세요', 80];
const tmp = [];
let result = 0;

/**
 * 배열 array에서 숫자만을 골라낸 후에 그 수들의 합을 구하는 프로그램을 구현하라.
 * 숫자들을 고를 때 사용할 임시 배열 tmp와 결과를 저장할 result 이외의 변수는 선언할 수 없다.
 * 단, 반복문 내에서 지역 변수를 만드는 것은 상관 없다.
 * 또한, typeof 연산자를 사용하도록 하라.
 */

for (let i = 0, v=0 ; i < array.length; i++){
    if (typeof array[i] === 'number') {
        tmp[v] = array[i];
        result += array[i];
        v++;
    }
}

console.log(tmp);
console.log(result);
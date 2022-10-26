/**
 * 더하기, 빼기, 곱하기, 나누기, 나머지값 계산. 총 다섯가지의 기능을 가진 계산기를 함수로 만들려고 한다.
 * 하나의 기능은 하나의 호출로만 수행할 수 있으며 콜백 함수를 이용해야한다.
 */

'use strict';

function calculator(number1, number2, number) {
    return (number(number1, number2));
}

console.log(calculator(10, 20, (number1, number2) => number1 + number2));
console.log(calculator(10, 20, (number1, number2) => number1 - number2));
console.log(calculator(10, 20, (number1, number2) => number1 * number2));
console.log(calculator(10, 20, (number1, number2) => number1 / number2));
console.log(calculator(10, 20, (number1, number2) => number1 % number2));
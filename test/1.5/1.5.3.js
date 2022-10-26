'use strict';

function multiply() {
    return this.num1 * this.num2;
}

const calculator = {
    num1: 5,
    num2: 10,
    sum() {
        return this.num1 + this.num2;
    },
    multiply,
};


/**
 * 위의 객체에서 num1과 num2를 더하는 기능과 곱하는 기능을 추가하려고 한다.
 * 각각의 기능을 메소드로 추가하라.
 * 단, 더하는 기능은 객체 내에서 직접 추가를 하고 곱하는 기능은 객체 밖에서 함수 정의를 한 후 프로퍼티에 함수의 참조를 할당하라.
 * 그 후 만든 메소드를 호출해서 결과를 console.log로 출력하라.
 */


calculator.multiply(5, 10);
console.log(calculator.sum());
console.log(calculator.multiply());
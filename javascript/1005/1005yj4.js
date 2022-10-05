'use strict';
let num, num2

num = +prompt('정수1: ');
num2 = +prompt('정수2: ');

if (isNaN(num+num2)) {
    alert('두 수중 하나는 숫자가 아닙니다. ');
} else {
    alert(`${num} + ${num2} = ${num + num2}`);
}
  

let number1, number2, tot, a, b;
a = '정수를 입력하시오'
b = '니다.'
number1 = +prompt(`${a}(1) : `);
number2 = +prompt(`${a}(2) : `);
tot = number1 + number2;

if (isNaN(tot)) {
    alert(`두 수중 하나는 숫자가 아닙${b}.`);
} else {
    alert(`${number1} + ${number2} = ${tot} 입${b}`);
}


let n1, n2;
let tot;

n1 = +prompt('정수1: ');
n2 = +prompt('정수2: ');

tot = n1 + n2;


if (isNaN(tot)) {
    alert(`두 수중 하나는 숫자가 아닙${b}.`);
} else {
    alert(`${n1} + ${n2} = ${tot} 입${b}`);
}
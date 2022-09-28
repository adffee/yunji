'use strict'

// 변수지정 

// let un,up;
// let min, max;
// let tot = 0;


// un = +prompt('정수1:');
// up = +prompt('정수2:');

// if (un>up) {
//     max = un;
//     min = up;
// } else {
//     max = up;
//     min = un;
// }

// for(let i = min; i <= max; i++) {
//     tot +=i;
// }
// alert(`${min}부터 ${max}까지의 합: ${tot}`);



// 스와핑

let num1, num2, tmp;
let tot = 0;

num1 = +prompt('정수1:');
num2 = +prompt('정수2:');

if(num1>num2){
    tmp = num1;
    num1 = num2;
    num2 = tmp;

}

for(let i = num1; i <= num2; i++) {
    tot +=i;
}
alert(`${num1}부터 ${num2}까지의 합: ${tot}`);
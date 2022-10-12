'use strict';


// let outer1 = 5;
// function closure1() {
    
//     console.log(outer1);
// }

// closure1();

// console.log('=================');

// function outerFunc1() {
//     let outer2 = 10;

//     function innerFunc() {
//         console.log(outer2);
//     }
//     innerFunc();
// }

// outerFunc1();
// console.log('====================================');

// function outerFunc2() {
//     let outer3 = 15;

//     return function () {
//         console.log(outer3);
//     };
// }

// outerFunc2()();
// console.log('==================');

function outerFunc3() {
    let outer4 = 20;

    return function () {
        return ++outer4;
    };
}


let innerFunc1 = outerFunc3();
console.log(innerFunc1());
console.log(innerFunc1());
console.log(innerFunc1());

console.log('=======================');

innerFunc1 = null;

innerFunc1 = outerFunc3();

console.log(innerFunc1());
console.log(innerFunc1());
console.log('=============');



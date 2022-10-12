'use strict'

// calculator(10, 3, '+');
// calculator(10, 3, '-');
// calculator(10, 3, '*');
// calculator(10, 3, '/');


///////////

// function calculator(num1, num2, num3) {
//     switch (num3) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//     }
// }
// console.log(calculator(10,3,'+'));
// console.log(calculator(10,3,'-'));
// console.log(calculator(10,3,'*'));
// console.log(calculator(10,3,'/'));



////선생님

// function calculator(n1, n2, op) {
//     let result = 0;

//     switch (op) {
//         case '+':
//             result = n1 + n2;
//             break;
//         case '-':
//             result = n1 - n2;
//             break;
//         case '*':
//             result = n1 * n2;
//             break;
//         case '/':
//             result = n1 / n2;
//             break;
//     }
//     console.log(result);
// }
// calculator(10, 3, '+');
// calculator(10, 3, '-');
// calculator(10, 3, '*');
// calculator(10, 3, '/');



///// 선생님 발전

// function sum(n1, n2) {
//     return n1 + n2;
// }
// function sub(n1, n2) {
//     return n1 - n2;
// }
// function mul(n1, n2) {
//     return n1 * n2;
// }
// function dive(n1, n2) {
//     return n1 / n2;
// }

// function calculator(n1, n2, op) {
//     console.log(op(n1, n2));
// }

// calculator(10, 3, sum);
// calculator(10, 3, sub);
// calculator(10, 3, mul);
// calculator(10, 3, dive);



///////선생님 발전

// function calculator(n1, n2, op) {
//     console.log(op(n1, n2));
// }

// calculator(10, 3, function (n1, n2) {
//     return n1 + n2;
// });
// calculator(10, 3, function (n1, n2) {
//     return n1 - n2;
// });
// calculator(10, 3, function (n1, n2) {
//     return n1 * n2;
// });
// calculator(10, 3, function (n1, n2) {
//     return n1 / n2;
// });



/////// 람다식(화살표 함수 )

function calculator(n1, n2, op) {
    console.log(op(n1, n2));
}

calculator(10, 3, (n1, n2) => n1 + n2);
calculator(10, 3, (n1, n2) => n1 - n2);
calculator(10, 3, (n1, n2) => n1 * n2);
calculator(10, 3, (n1, n2) => n1 / n2);

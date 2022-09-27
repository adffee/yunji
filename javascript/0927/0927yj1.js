'use strict'

let n1,n2;

n1 = +prompt('점수1: ');
n2 = +prompt('점수2: ');

if (n1 == n2) {
    alert('두 수는 같음');
} else if( (n1- n2)>0){
    alert(`큰수는 ${n1}`);
} else {
    alert(`큰수는 ${n2}`);
}


// if (num1 === num2) {
//     alert('두 수는 같음');
// } else {
// alert(`큰 수는 ${num1 > num2 ? num1 : num2}`);
// }

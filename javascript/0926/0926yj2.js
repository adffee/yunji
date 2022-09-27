'use strict';

console.log('콘솔 출력 테스트');
console.log('n=%d,k=d%,4,5.4');
console.log('n = %d, k = %d', 4, 5.4);
console.log('n = %d, k = %i', 4, 5.4);   

console.log('n1 = %d, n2 = %d\n', 1, 2, '출력완료');
console.log('n1 = %d, n2 = %d', 1, 2, '출력완료');
console.log();

console.log('n1 = %d, n2 = %d' 
    , 5, 8, '출력완료');
console.log(`n1 = %d, n2 = %d

`, 5, 8, '출력완료');                                                        
console.log();

console.log('2000년 ' + 10 + '월 ' + 21 + '일 ' + true + null);   
console.log(7 / 3);  
console.log(8 / 4);
console.log('\n-------------------------\n');

function valueOfn1() {
    return 7;
}
function valueOfn2() {
    return 9;
}
function getString() {
    return '리터럴';
}

console.log(`n1 = ${7}, n2 = ${9} 출력완료`); 

console.log(`n1 = ${valueOfn1()}, n2 = ${valueOfn2()} 출력완료`);  
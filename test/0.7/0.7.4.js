/**
 * 숫자들을 매개변수로 받는 함수를 구현하려고 한다. 두 개의 매개변수만을 실제로 사용하고, 넘치는 매개변수들은 따로 저장을 하려고 한다.
 * 이 때 두개의 매개변수는 더해서 합을 출력하고
 * 사용하지 않은 나머지의 매개변수들은 배열의 형태로 리턴하는 함수를 구현하라.
 */

'use strict';


function number(n1,n2, ...restElement){
    console.log(n1+n2);
    
    return restElement;
}

console.log(number(10, 20, 30, 40, 50));
console.log();
console.log(number(10, 20, 30, 40, 50, 5, 4, 3, 2, 1));
console.log();
console.log(number(20, 300));



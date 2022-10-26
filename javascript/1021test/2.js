'use strict'
/**
 * 작은 수와 큰 수 두 개의 숫자를 매개변수로 받고 누적합을 구하는 함수를 구현하라.
 */



function total(n1,n2) {
    let tot = 0;
    for (let i = n1; i < n2; i++){
        tot += i;
    }
    return tot;
}
console.log(total(1, 10));
console.log(total(25, 100));
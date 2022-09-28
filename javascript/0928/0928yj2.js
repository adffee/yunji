'use strict'

let min = 100, max = 0;
let sc;

for (let i = 0; i < 5; i++) {
    sc = +prompt('점수 : ');

    if( sc > max) max = sc;
    if( sc < max) min = sc;

}

alert(`최댓값  : ${max}, 최솟값 : ${min}`);
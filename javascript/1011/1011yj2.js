'use strict';

///1
function fromTosum() {
    
    let tot = 0;
    let min, max;
    
    min = 1;
    max = 10;
    
    for (let i = min; i <= max; i++){
        tot += i;
    }
    console.log(`${min}부터 ${max}까지의 누적합 : ${tot}\n\n `);
}

fromTosum();

///2 전역변수 밖으로 뺄때

function fromTosum(min,max) {
    
    let tot = 0;

    for (let i = min; i <= max; i++){
        tot += i;
    }

}

let min, max;

min = 1;
max = 10;

fromTosum(min, max);
console.log(`${min}부터 ${max}까지의 누적합 : ${tot}\n\n `);

////////////////3

function fromTosum(min,max) {
    
    let tot = 0;
    
    for (let i = min; i <= max; i++){
        tot += i;
    }
    
    return tot; //1)호출부로 우변값을 반환 2)함수 종료 
}

let min, max;

min = 1;
max = 10;


console.log(`${min}부터 ${max}까지의 누적합 : ${fromTosum(min,max)}\n\n `);


' use strict'

let value;

value = 15;
value = null;
value = false;
value = 'string';    

console.log(value);
console.log();

console.log(!null);
console.log(!undefined);
console.log(!NaN);
console.log(!'');
console.log(!0);
console.log();

let n;

console.log(n);   
console.log();

function test1() {  
    let n = 5;
}
    
function test2() {
    return 10;
}
console.log(test1());
console.log(test2());
console.log();

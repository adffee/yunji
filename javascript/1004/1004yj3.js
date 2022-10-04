'use strict';

const idx = '012345678901234567890';
const str = 'both ends of a String';

// console.log(str.startsWith('both'));
// console.log(str.startsWith('ends'));
// console.log(str.startsWith('ends', 5));
// console.log(str.endsWith('String'));
// console.log(str.includes('of'));
// console.log();


// console.log(str[50]);         
// console.log(str.charAt(50));   
// console.log();


// for (const ch of str) {  
//     console.log(ch);
// }
// console.log();


// console.log(str.indexOf('t'));
// console.log(str.indexOf('t', 5));
// console.log(str.lastIndexOf('t'));
// console.log();


// for (let ix = 0, findIx; ;) {
//     findIx = str.indexOf('t', ix);
//     if (findIx == -1) break;

//     console.log(findIx);
//     ix = findIx + 1;
// }
// console.log()

for (let ix = -1; (ix = str.indexOf('t', ix + 1)) != -1;) console.log(ix);
console.log()


console.log('A'.codePointAt());   
console.log('ABC'.codePointAt(1));
console.log('a'.codePointAt());
console.log('abc'.codePointAt(1));
console.log('--------------------------');


console.log(String.fromCharCode(65));
console.log(String.fromCharCode(97, 98));
console.log()
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(97, 98));
console.log('--------------------------');



const dis = 'a'.codePointAt() - 'A'.codePointAt();  
let input = 't';                                   
let lowerCode = input.codePointAt();

console.log(String.fromCodePoint(lowerCode - dis));
console.log('--------------------------');


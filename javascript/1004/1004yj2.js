'use strict';

const str1 = '   Removes Whitespace   from\n';
const str2 = 'both ends of a String';

// console.log(str1);
// console.log(str1.trim());
// console.log(str1.trim() + str2);
// console.log();


// console.log(str1.trimStart() + str2);
// console.log(str1.trimEnd() + str2);
// console.log();


// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.repeat(3));
// console.log();


console.log(str2.substring(5));
console.log(str2.substring(5, 8));
console.log(str2.substring(8, 5));       
console.log();                           

console.log(str2.slice(5, 8));
console.log(str2.slice(8, 5));    
console.log(str2.slice(-6));
console.log();

const str3 = 'replaces the matched substring with a replacement substring.';

console.log(str3.replace('sub', 'main'));
console.log(str3);
console.log(str3.replace('middle', 'center'));
console.log();

const str4 = 'Uses a regular expression';

console.log(str4.split());       
console.log(str4.split(''));     
console.log(str4.split('', 4));  
console.log();

console.log(str4.split(' '));
console.log(str4.split(' ', 2));
console.log(str4.split(' ')[2]); 
console.log();


console.log(str4.length);
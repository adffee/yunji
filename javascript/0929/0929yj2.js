'use strict'

const ar1 = [1,2,3,4,5,6,7,8,9,10];
const ar2 = [10,9,8,7,6,5,4,3,2,1];

// for (let i = 0; i < ar1.length; i++){
//     let tmp;
//     tmp =ar1[i];
//     ar1[i] =ar2[i];
//     ar2[i]=tmp;
    
// } 

// document.write(`ar1의 배열: `);

// for (let i = 0; i < ar1.length; i++) {
//     document.write(`${(ar1[i]/10<1? '&nbsp' : '')+ar1[i]} `);
// }

// document.write('<br/>');

// document.write(`ar2의 배열: `);
// for (let i = 0; i < ar2.length; i++) {
//     document.write(`${(ar2[i]/10<1? '&nbsp' : '')+ar2[i]} `);
// }

for(let i =0, t; i < ar1.length; i++){
    t = ar1[i], ar1[i]=ar2[i], ar2[i] = t;
}

document.write(`ar1의 배열: `);

for(let i =0; i<ar1.length; i++){
    document.write(`${ar1[i]}`);
}

document.write(`<br/> ar2의 배열: `);

for(let i =0; i<ar2.length; i++){
    document.write(`${ar2[i]}`);
}
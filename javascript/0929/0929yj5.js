'use strict';

const ar1 = [1,2,3,4,5,6,7,8,9,10];
const ar2 = [10,9,8,7,6,5];
const ar3 = [11,9,8,7,6,5,4,3,2,1];
const ar4 = [12,9,8,7,6,5,4];
const ar5 = [13,9];


const ar = [ar1, ar2,ar3,ar4,ar5];
for(let i = 0; i<ar.length; i++){
document.write(`ar${i}의 배열: `);
    for(let j=0; j<ar[i].length; j++){
        document.write(`${ar[i][j]} `);
    } 
    document.write('<br/>');
}


//++ 3을 뽑는다는 가정하면

const a =[
[1,2, 5, 6],
[3,4],
[5,6, 7, 8]
];

document.write(`${a[1][0]}`);



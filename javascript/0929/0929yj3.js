'use strict'

const ar1 = [1,2,3,4,5,6,7,8,9,10];
const ar2 = [10,9,8,7,6,5,4,3,2,1];
const ar3 = [11,9,8,7,6,5,4,3,2,1];
const ar4 = [12,9,8,7,6,5,4,3,2,1];
const ar5 = [13,9,8,7,6,5,4,3,2,1];

for(let i = 1; i<6; i++){
document.write(`ar${i}의 배열: `);

    for(let j=0,AR; j<ar1.length; j++){
        switch (i) {
            case 1: 
                AR = ar1;
                break;
            case 2: 
                AR = ar2;
                break;
            case 3: 
                AR = ar3;
                break;
            case 4: 
                AR = ar4;
                break;
            case 5: 
                AR = ar5;
                break;
        }
        document.write(`${AR[j]} `);
    } document.write('<br/>');
}

//변수 설정해서 한번에 찍히게 함.//
//AR = ar[i]도 가능함 

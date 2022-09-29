'use strict';

const a = new Array(5);
for(let i = 0; i<5; i++){
    a[i] = new Array(5);
}

for(let i = 4, v = 1; i>=0; i--){
    for(let j = 4; j >= 4-i; j--){
        a[i][j] = v++;
    }
}

// for(let i = 0; i<a.length; i++){
//     for(let j=0, yj; j<a[i].length; j++){
//         yj = a[i][j];
//         if(j < 4-i){
//             document.write('&nbsp;&nbsp;');
//         } else { 
//             document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
//         }
//     }
//     document.write(`<br/>`);
// }


'use strict';

const a = new Array(5);
for(let i = 0; i<5; i++){
    a[i] = new Array(5);
}

for(let i = a.length-1, v = 1; i>=0; i--){
    for(let j = a.length-1; j >= a.length-1-i; j--){
        a[i][j] = v++;
    }
}
//임시값
const c= new Array(5)
for(let i = 0; i<5; i++){
    c[i]= new Array(5);
}

for(let i = a.length-1; i>=0; i--){
    for(let j = a.length-1; j >= 0; j--){
        c[j][a.length-1-i]=a[i][j];
    }
}
//다시 a에 넣어주기 
for (let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++)
    a[i][j] = c[i][j];
}
//출력
for(let i = 0; i<a.length; i++){
    for(let j = 0, yj; j<= i; j++){
            yj = a[i][j];
            document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
        }
    document.write(`<br/>`);
}

// const a = new Array(5);
// for(let i = 0; i<5; i++){
//     a[i] = new Array(5);
// }

// for(let i = a.length-1, v = 1; i>=0; i--){
//     for(let j = a.length-1; j >= a.length-1-i; j--){
//         a[i][j] = v++;
//     }
// }

// const c= new Array(5)
// for(let i = 0; i<5; i++){
//     c[i]= new Array(5);
// }

// for(let i = a.length-1, v = 1; i>=0; i--){
//     for(let j = 0; j < a[i].length; j++){
//         c[j][4-i]=a[i][j];
//     }
// }

// for(let i = 0; i<c.length; i++){
//     for(let j = 0, yj; j<c[i].length; j++){
//         if(j > i){
//             document.write('&nbsp;&nbsp;');
//         } else { 
//             yj = c[i][j];
//             document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
//         }
//     }
//     document.write(`<br/>`);
// }


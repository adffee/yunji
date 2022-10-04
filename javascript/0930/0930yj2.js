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
//180도

// const c= new Array(5)
// for(let i = 0; i<5; i++){
//     c[i]= new Array(5);
// }

// for(let i =0; i<= a.length-1; i++ ){
//     for(let j =0; j<=a.length-1; j++)
//     c[4-i][4-j]=a[i][j];
// }

// for (let i = 0; i < a.length; i++) {
//     for(let j = 0; j < a[i].length; j++)
//     a[i][j] = c[i][j];
// }

// for(let i = 0; i<a.length; i++){
//     for(let j = 0, yj; j<= 4-i; j++){
//             yj = a[i][j];
//             document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
//         }
//     document.write(`<br/>`);
// }

//270도 
const c= new Array(5)
for(let i = 0; i<5; i++){
    c[i]= new Array(5);
}

for(let i = 0; i <a.length; i++ ){
    for(let j = a[i].length-1; j>=0; j--)
        c[4-j][i]=a[i][j];
}

for (let i = 0; i <c.length; i++) {
    for(let j = 0; j < c[i].length; j++)
        a[i][j] = c[i][j];
}

for(let i = 0; i<a.length; i++){
    for(let j = 0, yj; j<a[i].length; j++){
        if(j<i){
            document.write('&nbsp;&nbsp;');
        }else{
            yj = a[i][j];
            document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
        }
    }
    document.write(`<br/>`);
}


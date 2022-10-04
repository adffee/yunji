'use strict'

const a = new Array(5)
    for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}
    
for (let i = 4, v = 1; i >= 0; i--){
    for (let j = 4; j >= 4 - i; j--){
        a[i][j] = v++;
    }
}

//기본

// for (let i = 0; i < a.length; i++){
//     for (let j = 0, yj; j < a[i].length; j++){
        
//         if (j < a.length - 1 - i) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             yj = a[i][j];
//             document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
//         }
//     }    document.write(`<br/>`);
// }

//90도회전

// const g = new Array(5)
// for (let i = 0; i < 5; i++){
//     g[i] = new Array(5);
// }

// for (let i = 4; i >= 0; i--){
//     for (let j = 0; j < 5; j++){
//         g[j][4-i] = a[i][j];
//     }
// }

// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < a[i].length; j++)
//         a[i][j] = g[i][j];
// }

// for (let i = 0; i < 5; i++){
//     for (let j = 0, yj; j <= i;j++){
//         yj = a[i][j];
//         document.write(`${yj /10 < 1 ? '&nbsp;' : ''}${yj}`);
//     }
// document.write(`<br/>`);
// }

//180도

// const b = new Array(5);
// for (let i = 0; i < 5; i++){
//     b[i] = new Array(5);
// }

// for (let i = 0; i < a.length; i++){
//     for (let j = 0; j < a.length; j++){
//         b[4-i][4-j] = a[i][j];
//     }
// }
// console.log(b);

// for (let i = 0; i < a.length; i++){
//     for (let j = 0; j < a[i].length; j++){
//         a[i][j] = b[i][j];
//     }
// }

// for (let i = 0; i < a.length; i++){
//     for (let j = 0, yj2; j <= 4 - i; j++){
//         yj2 = a[i][j];
//         document.write(`${yj2 /10 < 1 ? '&nbsp;' : ''}${yj2}`);
//     }
//     document.write(`<br/>`);
// }

//270도

const e = new Array(5)
for (let i = 0; i < 5; i++){
    e[i] = new Array(5);
}

for (let i = 0; i < 5; i++){
    for (let j = 4; j >= 0; j--)
        e[4 - j][i] = a[i][j];
}

for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a[i].length; j++){
        a[i][j] = e[i][j];
    }
}
for (let i = 0; i < 5; i++){
    for (let j = 0, yj3; j < 5; j++){
        if (j < i) {
            document.write('&nbsp;&nbsp;');
        }else{
            yj3 = a[i][j];
            document.write(`${yj3 /10 < 1 ? '&nbsp;' : ''}${yj3}`);
        }
    }
    document.write(`<br/>`);
}

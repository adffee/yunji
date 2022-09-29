'use strict';

const a = new Array(5);
for(let i = 0; i < 5; i++){
    a[i] = new Array(4);
}

for(let i = 3 , v=1; i>=0; i--){
    for(let j=4; j>=0; j--){
        a[j][i] = v++;
    }
}

for(let i = 0, v = 1; i<5; i++){
    for(let j=0, yj; j<4; j++){
        yj = a[i][j]; 
        document.write(`${yj /10 < 1 ? '&nbsp;' : ''} ${yj}`);
    }

    document.write('<br/>');
}

// const a = new Array(5);
// for(let i = 0; i < a.length; i++){
//     a[i] = new Array(4);
// }

// for(let i =3 , v=1; i>=0; i--){
//     for(let j=4; j>=0; j--){
//         a[j][i] = v++;
//     }
// }

// for(let i = 0, yj; i<a.length; i++){
//     for(let j=0; j<a[i].length; j++){
//         yj = a[i][j]; 
//         document.write(`${yj /10 < 1 ? '&nbsp;' : ''} ${yj}`);
//     }

//     document.write('<br/>');
// }
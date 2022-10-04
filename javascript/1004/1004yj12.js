'use strict';

const a = new Array(5);

for (let i = 0; i < a.length; i++){
    a[i] = new Array(5);
}

for (let i = 4, v = 1; i >=0; i--){
    for (let j = 0; j <= i; j++)
        a[j][i] = v++;
}

for (let i = 0; i < a.length ; i++){
    for (let j = 0, yj; j < a[i].length; j++)
    {
        yj = a[i][j];
        
        if (j >= i) {
            document.write(`${yj / 10 < 1 ? '&nbsp;' : ''}${yj}`);
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }   document.write(`<br/>`);
}
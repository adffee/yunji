'use strict';

for (let i = 1; i <= 9; i++) {
    for (let j = 1, result; j <= 9; j++ ){
        result = i * j;
        document.write(`${i} X ${j} = ${(result/10<1? '&nbsp;': '' )+ result +'&nbsp;'}`);
    }
    document.write('<br/>');
}
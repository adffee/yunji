

'use strict'
//1
for(let i = 1, v =1; i<=5; i++){
    for(let j = 1; j<=5; j++){
    document.write(`${(v / 10 < 1 ? '&nbsp;': ' ') + v++} `);
}
document.write('<br/>')
}

document.write('<br/>')
//2
for(let i = 1, v =1; i<=5; i++){
    for(let j = 1; j<=i; j++){
    document.write(`${(v / 10 < 1 ? '&nbsp;': ' ') + v++} `);
}
document.write('<br/>')
}

document.write('<br/>')
//3
for(let i = 1, v =1; i<=5; i++){
    for(let j = 1; j<=6-i; j++){
    document.write(`${(v / 10 < 1 ? '&nbsp;': ' ') + v++} `);
}
document.write('<br/>')
}

document.write('<br/>')
//4
for(let i = 1, v =1; i<=5; i++){
    for(let j = 1; j<=5; j++){
        if(j < i){
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;': '') + v++} `);
        }   
    }
    document.write('<br/>')
}


document.write('<br/>')
//5
for(let i = 1, v =1; i<=5; i++){
    for(let j = 1; j<=5; j++){
        if( j< 6-i){
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;': '') + v++} `);
        }   
    }
    document.write('<br/>')
}


document.write('<br/>')
//6

for(let i = 1, v =1; i<=3; i++){
    for(let j = 1; j<=i+2; j++){
        if( j<4-i){
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;': '') + v++} `);
        }   
    }
    document.write('<br/>')
}

document.write('<br/>')
//6확정형

let num,m;

num = 13;
m = (num+1) / 2;

for(let i=1, v=1; i<=m; i++){
    for(let j =1; j<=m+i-1; j++){
        if(j<m+1-i){
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        }else {
            document.write(`${(v / 10 < 1 ? '&nbsp;': '') + v++} `);
        }   
    }
    document.write('<br/>')
}
document.write('<br/>')
//7

for(let i = 1, v =1; i<=3; i++){
    for(let j = 1; j<=6-i; j++){
        if( j<i){
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;': '') + v++} `);
        }   
    }
    document.write('<br/>')
}


document.write('<br/>')
//7확장형 

for (let i = 1, v = 1; i <= m; i++) {
    for (let j = 1; j <= num + 1 - i; j++) {
        if (i >j ) {
            document.write('&nbsp;' + '&nbsp;' + '&nbsp;' );
        } else {
            document.write(`${((v / 10) < 1 ? '&nbsp;' : '') + v++} `);
        }
    }
    document.write('<br/>');
}


document.write('<br/>')

//8

for(let i = 1, v = 1, st, ed; i <= num; i++){
    if(i <= m){
        st = m + 1 -i;
        ed = i + num -m;
    } else {
        st = i - num  + m;
        ed = m + num -i;
    }
    for (let j = 1; j <= ed; j++){
        if(j < st){
            document.write('&nbsp; &nbsp;');
        } else{
            document.write(`${((v / 10) < 1 ? '&nbsp;' : '') + v++ } `);
        }
    }
    document.write('<br/>');
}

document.write('<br/>')

//9
for (let i = 1, v = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if ((j >= i && j <= num + 1 - i) || (j <= i && j >= num + 1 - i)) {
            document.write(`${((v / 10) < 1 ? '&nbsp;' : '') + v++} `);
        } else {
            document.write('&nbsp; &nbsp;');
        }
    }
    document.write('<br/>');
}


'use strict'
// let score1, score2, tot;
// tot = 0;


// do{
//     score1 = +prompt('점수1 : ');
//     score2 = +prompt('점수2 : ');
// }while(score1>=score2);

// for (let i = score1; i<=score2; i++){
//     tot += i;
// }

// alert(`${score1}부터 ${score2}의 합:${tot}`);



let un,up;
let tot = 0;

do{
    un = +prompt('점수1 : ');
    up = +prompt('점수2 : ');
}while(un>=up);

for (let i = un; i<=up; i++){
    tot += i;
}

alert(`${score1}부터 ${score2}의 합:${tot}`);


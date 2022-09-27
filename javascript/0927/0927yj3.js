'use strict'

// let nm, ko, en, ma, av, lank;

// nm =  prompt('이름: ');
// ko =  +prompt('국어 점수: ');
// en =  +prompt('영어 점수: ');
// ma =  +prompt('수학 점수: ');
// av = (ko + en +ma)/3;



// if(av>=90){
//     lank = "A";
// } else if(av>=80){
//     lank = "B";
// } else if(av>=70){
//     lank = "C";
// } else{
//     lank = "F"; 
// }


// alert (`<성적>
// 학생명: ${nm} 학점: ${lank} 평균: ${av}`);

let stname;
let kor, eng, math;
let avg;
let grade;

stname = prompt('이름 : ')
kor = +prompt('국어 점수: ')
eng = +prompt('영어 점수 : ')
math = +prompt('수학 점수 : ')

avg = (kor + eng +math)/3;

if(avg>=90){
    grade = 'A';
} else if(avg>=80){
    grade = 'B';
} else if(avg>=70){
    grade = 'C';
} else{
    grade = 'F';
}

alert (`<성적>
학생명: ${nm} 학점: ${lank} 평균: ${av}`);
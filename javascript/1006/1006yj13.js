/*
    < 문제 >

- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.


    < 조건 >

1> 외부 스타일 시트와 외부 스크립트 적용.
2> 
   단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.

*/

// let stName = prompt('학생명 :')
// let kor = prompt('국어점수 :')
// let eng = prompt('영어점수 :')
// let math = prompt('수학점수 :')


// let min = 100, max =0;



'use strict';

let stName = prompt('학생명: ');
let kor, eng, math;
let sum = 0, average;

const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
const scores = [];


for (let i = 0; i < subjects.length - 2; i++) {
  scores[i] = +prompt(`${subjects[i]}`);
  sum += scores[i];
}

average = Math.trunc(sum / (subjects.length - 2));

document.write('<table>');
document.write(`<caption><${stName} 학생의 성적></caption>`);
for (let i = 0, content; i < subjects.length; i++) {
  console.log(subjects.length, i);
  document.write('<tr>');
  document.write(`<th>${subjects[i]}</th>`);
  if (i < subjects.length - 2) {
    content = scores[i] ;
  } else if (i < subjects.length - 1) {
    content = sum ;
  } else {
    content = average ;
  }

  document.write(`<td>${content} 점</td>`);
  document.write('</tr>');
}
document.write('</table>');
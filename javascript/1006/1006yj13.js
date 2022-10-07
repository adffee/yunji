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



// 'use strict';

// let stName = prompt('학생명: ');
// let kor, eng, math;
// let sum = 0, average;

// const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
// const scores = [];


// for (let i = 0; i < subjects.length - 2; i++) {
//   scores[i] = +prompt(`${subjects[i]}`);
//   sum += scores[i];
// }

// average = Math.trunc(sum / (subjects.length - 2));

// document.write('<table>');
// document.write(`<caption><${stName} 학생의 성적></caption>`);
// for (let i = 0, content; i < subjects.length; i++) {
//   console.log(subjects.length, i);
//   document.write('<tr>');
//   document.write(`<th>${subjects[i]}</th>`);
//   if (i < subjects.length - 2) {
//     content = scores[i] ;
//   } else if (i < subjects.length - 1) {
//     content = sum ;
//   } else {
//     content = average ;
//   }

//   document.write(`<td>${content} 점</td>`);
//   document.write('</tr>');
// }
// document.write('</table>');



// 'use strict';

// let stName = prompt('학생명: ');
// let sum = 0;

// const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
// const scores = [];

// for (let i = 0; i < subjects.length; i++) {
//   if (i < subjects.length - 2) {
//     scores[i] = +prompt(`${subjects[i]}`);
//     sum += scores[i];
//   } else if (i < subjects.length - 1) {
//     scores[i] = sum;
//   } else {
//     scores[i] = Math.trunc(sum / (subjects.length - 2));
//   }
// }

// document.write('<table>');
// document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
// for (let i = 0, content; i < subjects.length; i++) {
//   console.log(subjects.length, i);
//   document.write('<tr>');
//   document.write(`<th scope="col">${subjects[i]}</th>`);
//   document.write(`<td>${scores[i]} 점</td>`);
//   document.write('</tr>');
// }
// document.write('</table>');


// 'use strict';

// let stName = prompt('학생명: ');
// let sum = 0;

// const subjects = ['국어점수', '영어점수', '수학점수',];
// const scores = new Array(subjects.length);

// for (let i = 0; i < subjects.length; i++) {
//   scores[i] = +prompt(`${subjects[i]}`);
//   sum += scores[i];
// }

// document.write('<table>');
// document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
// for (let i = 0, content; i < subjects.length; i++) {
//   document.write('<tr>');
//   document.write(`<th scope="col">${subjects[i]}</th>`);
//   document.write(`<td>${scores[i]} 점</td>`);
//   document.write('</tr>');
// }

// document.write(`<tr><th>합계</th>`);
// document.write(`<td>${sum} 점</td></tr>`);

// document.write(`<tr><th>평균</th>`);
// document.write(`<td>${Math.trunc(sum / subjects.length)} 점</td></tr>`);

// document.write('</table>');



'use strict';

// let stName = prompt('학생명: ');
// let sum = 0;

// const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
// const scores = new Array(subjects.length);

// for (let i = 0; i < subjects.length; i++) {
//   if (i < subjects.length - 2) {
//     scores[i] = +prompt(`${subjects[i]}`);
//     sum += scores[i];
//   } else if (i < subjects.length - 1) {
//     scores[i] = sum;
//   } else {
//     scores[i] = Math.trunc(sum / (subjects.length - 2));
//   }
// }

// document.write('<table>');
// document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
// for (let i = 0, content; i < subjects.length; i++) {
//   document.write('<tr>');
//   document.write(`<th scope="col">${subjects[i]}</th>`);
//   document.write(`<td>${scores[i]} 점</td>`);
//   document.write('</tr>');
// }

// document.write('</table>');


// let sum = 0, average;

// const subjects = ['학생명: ', '국어점수', '영어점수', '수학점수', '합계', '평균'];
// const scores = new Array(subjects.length);
// for (let i = 0; i < 2; i++) {
//     scores[i] = new Array(2);
// }

// for (let i = 0; i <subjects.length; i++) {
//     for (let j = 0; j < 2; j++) {
//         if (j < 1) {
//             scores[i][j] = subjects[i];
//         } else {
//             scores[i][j] = prompt(`${subjects[i]}`);
//         }
//     }   
// }



// for (let i = 0; i < subjects.length; i++) {
//   for (let j = 0; j < 2; j++) {
//       if (j < 1) {
//           scores[i][j] = subjects[i];
//       } else if (i < 1) {
//           scores[i][j] = prompt(`${subjects[i]}`);
//       } else if (i < subjects.length - 2) {
//           scores[i] = +prompt(`${subjects[i]}`);
//           sum += scores[i];
//       } else if (i < subjects.length - 1) {
//           scores[i] = sum;
//       } else {
//           scores[i] = Math.trunc(sum / (subjects.length - 3));
//       }
//   }
// }



let stInfo = [
  ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균'], ];
stInfo[1] = new Array(stInfo[0].length);


for (let i = 0, sum = 0; i <stInfo[0].length; i++){
  if (i === 0) {
    stInfo[1][i] = prompt(`${stInfo[0][i]}`);
  } else if (i < stInfo[0].length - 2) {
    stInfo[1][i] = +prompt(`${stInfo[0][i]}`);
    sum += stInfo[1][i];
  } else if (i < stInfo[0].length - 1) {
    stInfo[1][i] = sum;
  } else {
    stInfo[1][i] = Math.trunc(sum / (stInfo[0].length - 3));
  }dbsw
}
console.log(stInfo);

document.write('<table>');
document.write(`<caption>&lt; ${stInfo[1][0]} 학생의 성적 &gt;</caption>`);
for (let i = 1; i < stInfo[0].length; i++) {
  document.write('<tr>');
  document.write(`<th scope="col">${stInfo[0][i]}</th>`);
  document.write(`<td>${stInfo[1][i]} 점</td>`);
  document.write('</tr>');
}


/////////정현이 코드

'use strict';

let stInfo = [
    ['학생명', '국어점수', '영어점수', '수학점수', '합계', ' 평균'],
];
stInfo[1] = new Array(stInfo[0].length);
stInfo[1][4] = 0;

for (let i = 0 ; i < stInfo[0].length-2; i++) {
    stInfo[1][i] = prompt(`${stInfo[0][i]}:`);
    if (i >=1) {
        stInfo[1][4] += +stInfo[1][i];
    }
}
stInfo[1][5] = Math.trunc(stInfo[1][4] / (stInfo[0].length - 3));
console.log(`${stInfo[1][5]}`);

console.log(stInfo);

document.write('<table>');
document.write(`<caption>&lt; ${stInfo[1][0]} 학생의 성적 &gt;</caption>`);
for (let i = 1; i < stInfo[0].length; i++) {
    document.write('<tr>');
    document.write(`<th scope="col">${stInfo[0][i]}</th>`);
    document.write(`<td>${stInfo[1][i]} 점</td>`);
    document.write('</tr>');
}
console.log(stInfo);


///선생님
'use strict';

let st = [
    ['이름', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];

let stnum = +prompt('학생수: ');
for (let i = 1; i <= stnum; i++) {
    st[i] = new Array(st[0].length);
    st[i][st[i].length - 2] = 0;
}

// 저장
for (let i = 1; i <= st.length - 1; i++) {
    for (let j = 0; j < st[1].length - 2; j++) {
        st[i][j] = prompt(`${st[0][j]}: `);
        if (j > 0) {
            st[i][st[i].length - 2] += +st[i][j];
        }
    }
    st[i][st[i].length - 1] = st[i][st[i].length - 2] / (st[i].length - 3);
}

// 출력
for (let i = 1; i <= st.length - 1; i++) {
    document.write('<table>');
    document.write(`<caption>< ${st[i][0]} 학생의 성적 ></caption>`);
    for (let j = 1; j < st[1].length; j++) {
        document.write(`<tr><th>${st[0][j]}</th>`)
        document.write(`<td>${st[i][j]} 점</td></tr>`)
    }
    document.write('</table>');
}
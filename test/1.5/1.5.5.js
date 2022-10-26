'use strict';

const labels = ['이름', '국어', '영어', '수학', '총점', '평균'];
const score = {};

/**
 * 1. 학생의 이름과 국어, 영어, 수학 성적을 입력받아 객체에 키와 밸류의 형태로 저장한다.
 * 2. 저장한 객체를 이용해 총점과 평균을 구하는 메소드를 구현한다.
 * 3. 완성된 객체를 이용해 웹 페이지에 테이블을 출력한다.
 * 4. 객체의 키는 labels 배열을 이용하라.
 */


// function score() {
//     document.write(`<tr>`);

//     for (let i = 0; i < labels.length-2; i++){
//         document.write(`<td>${labels}${score}</td>`)
//     }
//     document.write(`</tr>`);
// }

// document.write(`<table border=1?`);
// document.write(`<tr>`);
// for (let i = 0; i < labels.length; i++){
//     document.write(`<th>${labels[i]}</th>`);
// }

// document.write(`</tr>`);

// let av = 0;
// let sum = 0;
// for (let i = 0, v = 0; i < labels.length; i++){
//     score[v] = +prompt(`${labels[i]}: `);
//     sum += v;
//     av = `${sum} / labels.length`;
//     score();
// }

// document.write('</table>');


/////이름, 점수 넣기

for (let i = 0; i < labels.length - 2; i++){
    score[labels[i]] = prompt(`${labels[i]}: `);
}

/////총점 계산

score.총점 = function () {
    let total = 0;
    for (let i = 1; i < labels.length - 2; i++){
        total += +score[labels[i]];
    }
    return total;
}

////평균 구하기

score.평균 = function () {
    return Math.trunc(this.총점() / (labels.length - 3));
}

/////테이블 만들기

document.write('<table>');

for (let key in score) {
    let content;

    switch (key) {
        case '이름':
            content = score[key];
            break;
        case '총점':
        case '평균':
            content = score[key]() + ' 점';
            break;
        default:
            content = score[key] + ' 점';
    }
    document.write(`<tr><th>${key}</th><td>${content}</td></tr>`);
}
document.write < '</table>';
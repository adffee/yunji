// 'use strict';

// let kor, eng, math;
// let average = 0;

/**
 * 주어진 세가지 변수에 국어, 영어, 수학 점수를 입력받는다.
 * 
 * 전부 입력되었을 때에만 평균을 계산하는 프로그램을 구현하라.
 * 도중에 하나라도 입력하지 않으면 프로그램은 종료되도록 구현하라.
 * 단, 유지보수성은 체크하지 않는다.
 */



// kor = +prompt('국어점수: ') || null;

// for (; ;){
//     if (!(kor === null)) {
//         eng = +prompt('영어점수: ') || null;
//         if (!(eng == null)) {
//             math = +prompt('수학점수: ') || null;
//             if (!(math == null)) {
//                 average = (kor + eng + math) / 3;
//                 alert(average);
//                 break;
//             }
//         }
//     }
// }


// if (kor = +prompt('국어점수: ')) {
//     if (eng = +prompt('영어점수: ')) {
//         if (math = +prompt('수학점수: ')) {
//             average = (kor + eng + math) / 3;
//             alert(average);
//         }
//     }
// } 

// if (!math) {
//     console.log('asd');
// } else {
//     console.log(`${kor} + ${eng} + ${math}`);
// }

'use strict';

let kor, eng, math;
let average = 0;

/**
 * 주어진 세가지 변수에 국어, 영어, 수학 점수를 입력받는다.
 * 전부 입력되었을 때에만 평균을 계산하는 프로그램을 구현하라.
 * 도중에 하나라도 입력하지 않으면 프로그램은 종료되도록 구현하라.
 * 단, 유지보수성은 체크하지 않는다.
 */

if (kor = +prompt('국어 점수')) {
    if (eng = +prompt('영어 점수')) {
        if (math = +prompt('수학 점수')) {
            average = (kor + eng + math) / 3;
        }
    }
}

if (!math) {
    console.log('계산을 진행할 수 없습니다.');
} else {
    console.log(`결과: ${kor} + ${eng} + ${math} / 3 = ${average}`);
}
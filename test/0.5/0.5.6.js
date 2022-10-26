'use strict';

let input1, input2, input3;

/**
 * 변수 input1, input2, input3에 각각 값을 입력받는다.
 * 셋 중 하나라도 값이 비어있거나 null이라면 '하나 이상의 입력에 값이 없음' 문자열을 출력하고
 * 셋 전부 값이 있다면 입력한 값들을 순서대로 출력하는 프로그램을 구현하라.
 * 추가적인 변수는 result로 제한한다.
 */

// input1 = prompt('입력: ') || null;
// input2 = prompt('입력: ') || null;
// input3 = prompt('입력: ') || null;

// let result = `${ input1}, ${input2}, ${input3 }`;

// if (input1 === null || input2 === null || input3 === null) {
//     alert('하나 이상의 입력에 값이 없음');
// } else {
//     alert(`${result}`);
// }


input1 = prompt('입력: ') ;
input2 = prompt('입력: ') ;
input3 = prompt('입력: ') ;

let result = `${ input1}, ${input2}, ${input3 }`;

if (input1&&input2&&input3) {
    alert(`${result}`);
} else {
    alert('하나 이상의 입력에 값이 없음');
}


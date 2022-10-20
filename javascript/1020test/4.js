'use strict';

let input;

/**
 * 변수 input에 값을 입력받는다. 빈 문자열을 입력했거나 취소를 눌렀다면 '기본값' 문자열을 출력하고
 * 아니면 입력한 문자열을 출력하는 프로그램을 구현하라.
 */


input = prompt('입력') || '기본값';
console.log(input);

// if (input === null || '') {
//     alert('기본값');
// } else {
//     alert(`${input}`);
// }


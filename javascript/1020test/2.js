'use strict';

let input;

/**
 * 변수 input에 입력받은 값이 null인지 판단하는 프로그램을 구현하라.
 * null이면 숫자 0을 출력하고 아니면 1을 출력하라.
 */


input = +prompt('입력하세요 ')
// if (isNaN(input)) {
//     alert(1);
// } else {
//     alert(0);
// }


if (input === null) {
    alert('0');
} else {
    alert('1');
}




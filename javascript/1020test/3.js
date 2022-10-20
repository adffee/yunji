'use strict';

let input;

/**
 * 변수 input에 값을 입력받는다. 입력받은 값이 숫자면 '숫자' 문자열을 출력하고
 * 숫자가 아니면 '숫자가 아님' 문자열을 출력하는 프로그램을 구현하라.
 * 단, prompt() 에 +를 사용하지 말 것.
 */

input = prompt('입력: ');
if (isNaN(input)) {
    alert('숫자가 아님');
} else {
    alert(`숫자`);
}


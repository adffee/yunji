/*
  < 문제 >

- 이름을 입력받아 대화상자 형태로 화면에 이름을 표시하는 프로그램을 구현.
  단, 입력 대화상자가 비어있는 상태로 "확인" 버튼을 누르거나 "취소" 버튼을
  눌렀을 때 "이름이 정상적으로 입력되지 않았습니다!!" 문구와 함께 페이지가
  종료되도록 구현.
*/

'use strict'

let name

name = prompt('이름 입력: ');

if () {
    alert('이름이 정상적으로 입력되지 않았습니다. ')
}

alert('${name}')

/////////////

let userName = prompt('이름 입력');

if (userName) {
    alert(userName);
} else {
    alert('이름이 정상적으로 입력되지 않았습니다.');
    close();
}

//////

let stName;

stName = prompt('이름 입력: ');

if (stName) {
    alert(stName)
} else {
    alert('이름이 정상적으로 입력되지 않았습니다.');
    close();
}


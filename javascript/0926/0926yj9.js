'use strict'


const id = 'lyj9587';

for (let inputId; ;){
    inputId = prompt('아이디 입력');

    if (confirm('아이디가 정확합니까?')) {
        if (inputId === id) {
            alert('입력한 아이디가 정확히 일치합니다.');
            break;
        } else {
            alert('아이디가 일치하지 않습니다. 재입력 바랍니다.');
        }
    }
}

/*
    < confirm > - 확인/취소 버튼을 제공하는 대화상자 활성화.

- 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여지고
  사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환.

형식    :    confirm( message? : string ) : boolean

*/

// 'use strict';

// const id = 'psy7758';

// for (let inputId; ;) {
//     inputId = prompt('아이디 입력');

//     if (confirm('아이디가 정확합니까?')) {
//         if (inputId === id) {
//             alert('입력한 아이디가 정확히 일치합니다.');
//             break;
//         } else {
//             alert('아이디가 일치하지 않습니다. 재입력 바랍니다.');
//         }
//     }
// }

// close();
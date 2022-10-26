'use strict';

let prevWord, word;

/**
 * 변수 prevWord 이전 단어를 의미한다. word는 현재 단어를 의미한다.
 *
 * 1. 단어는 입력을 받아 저장한다.
 * 2. 이전 단어의 마지막 글자와 현재 단어의 첫 글자를 비교해서 일치하면 성공 아니면 실패.
 * 3. 실패시에는 재입력을 받도록 만든다.
 * 4. 무한루프를 활용한다.
 */


// for (; ;){
//     prevWord = prompt('첫글자를 입력하세요');

//     if (prevWord) {
//         for (; ;){
//             word = prompt(`끝말잇기 단어 이전단어 : ${prevWord}`);
//             if (prevWord[prevWord.length - 1] == word[0]) {
//                 prevWord = word;
//             } else {
//                 alert('틀렸어용')
//             }
//         }
//     }
// }


    prevWord = prompt('첫 단어');
    if (prevWord) {
        for (; ;) {
            word = prompt(`끝말잇기 단어 이전단어 : ${prevWord}`);
            if (prevWord[prevWord.length - 1] == word[0]) {
                prevWord = word;
            } else {
                alert('틀렸어용')
            }
        }
    }
}
'use strict'

let beforeword, afterword;
let corretctcnt;
let endflag = true;

alert('끝말잇기 start');

outer:
for (; endflag ;) {
    beforeword = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

    if (beforeword === null) {
        if (confirm('정말로 종료하시겠습니까?')) {
            alert('게임종료!!');
            break;
        }
    } else if (beforeword.length === 3) {
        alert('ok!! 게임시작~~');

        for (; ;) {
            afterword = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^(이전단어:${beforeword})`);
        

            if (afterword === null) {
                if (confirm('정말 종료하시겠습니까?')) {
                    alert('게임종료!!');
                    break outer;
                }
            } else if (afterword.length === 3) {
                if (afterword[0] === beforeword[beforeword.length - 1]) {
                    corretctcnt++;
                    alert('ok!! excellent!')
                    beforeword = afterword;
                } else {
                    alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~ㅠㅠ');
                }
            } else if (afterword === '끝') {
                if (confirm('정말 끝내시겠습니까??')) {
                    alert(`${corretctcnt} 갸의 끝말잇기를 성공하셨어요^^`);
                    alert('게임종료!!');
                    endflag = false;
                    break outer;
                } else {
                    alert('세 글자 단어만 입력하세요~~');
                }
            }
        } 
    } else {
        alert('세 글자 단어만 입력하세요~~');
    }
}
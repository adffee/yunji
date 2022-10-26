/**
 * 주어진 문자열 배열을 매개변수에 전달하고 각 문자열 요소의 길이를 담은 배열을 반환하는 함수를 작성하라.
 */

'use strict'

const arr = ['We', 'are', 'the', 'world!',];
const tmp = [];

function me (ar) {
    for (let i = 0; i < ar.length; i++){
        tmp[i] = ar[i].length;
    }
    console.log(tmp);
}

me(arr);

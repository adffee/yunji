/**
 * button 태그를 불러오고 h1 태그를 불러온 후에
 * 버튼을 클릭할 시에 h1의 텍스트가 바뀌는 프로그램을 구현하라.
 * 텍스트가 어떻게 변해도 무관하다. 단, 한 번 더 클릭하면 원래대로 돌아와야한다.
 * 즉, 상태가 변했다가 원래대로 돌아오는 것이 반복될 수 있어야한다.
 */
'use strict';

let button = document.getElementsByTagName('button'),
    h1 = document.getElementsByTagName('h1');
    
button[0].addEventListener('click', () => {
    if (h1[0].textContent === '대충 제목') {
        h1[0].textContent = '바뀜';
    } else {
        h1[0].textContent = '대충 제목';
    }
});


// console.log(button[0].textContent);
// if (h1[0].textContent === '대충 제목') {
//     console.log(h1[0].textContent);
//     h1[0].textContent = '바뀜';
// }

// console.log(button[0].innerHTML);
// h1[0].innerHTML = '<h1>제목</h1>';

// function change() {
//     let button = document.getElementsByTagName('button'),
//     h1 = document.getElementsByTagName('h1');

//     h1.innerText = '구독중'
// }


// function changeBtnName()  {
//     const button = document.getElementsByTagName('button'),
//     h1 = document.getElementsByTagName('h1');
//     h1.innerText = '새이름!';
// }
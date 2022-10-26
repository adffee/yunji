/**
 * 버튼을 클릭하면 숫자가 올라가는 프로그램을 구현하라.
 * 숫자가 올라갈 때 5의 배수가 되면 h1 태그에 red 클래스를 주고 아닐 때에는 red 클래스가 없어야한다.
 */



'use strict';

let box = document.querySelector('.box2'),
    button = document.querySelector('button');

button.addEventListener('click', function () {
    box.textContent = +box.textContent + 1;
    if (box.textContent % 5 === 0) {
        box.classList.add('red');
    } else {
        box.classList.remove('red')
    }
});

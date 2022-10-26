/**
 * 마우스를 호버하면 div의 배경이 바뀌는 프로그램을 구현하라.
 * CSS로 호버를 하는 것이 아닌 오로지 자바스크립트로만 구현하라.
 * 단, 배경이 바뀔 때 트랜지션을 넣어야한다.
 */

let box = document.querySelector('.box2');

box.addEventListener('mouseenter', function () {
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseleave', function () {
    box.style.backgroundColor = 'black';
});
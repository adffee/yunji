'use strict';

/**
 * 1. 페이지가 로드 되면 이미지가 자동으로 슬라이드를 시작함.
 * 2. 이미지 태그는 사라지고 li에 백그라운드를 적용.
 * 3. 사라지는 이미지는 왼쪽에서 오른쪽으로 사라지고 투명하게 변하면서 사라짐.
 * 4. 나타나는 이미지는 오른쪽에서 왼쪽으로 나타남. 투명도 변화 없음.
 */

const $slide_list = document.querySelector('.slide_list');
let slideNumber = 0;

const images = [
  './images/img1.jpg',
  './images/img2.jpg',
  './images/img3.jpg',
  './images/img4.jpg',
  './images/img5.jpg',
];

for (let i = 0; i < images.length; i++) {
  $slide_list.innerHTML += '<li></li>';
}

const $li = $slide_list.querySelectorAll('li');

for (let i = 0; i < images.length; i++) {
  $li[i].style.background = `url(${images[i]}) center/100% 100% no-repeat`;
}

setInterval(() => {
  $li[slideNumber].style.left = '100%';
  $li[slideNumber].classList.remove('invisible');

  slideNumber = ++slideNumber % images.length;

  $li[slideNumber].style.left = '0px';
  $li[slideNumber].classList.add('invisible');
}, 1500);

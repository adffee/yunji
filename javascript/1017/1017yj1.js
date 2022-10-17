'use strict'

const container = document.getElementById('main_container'),
    id = container.querySelector('img'),
    nation_container = container.querySelector('.nation_container');

let intervalId, slideCount = 1, trigger = true;

const images = {
    '../../image-gallery2/images/img1.jpg',
    '../../image-gallery2/images/img2.jpg',
    '../../image-gallery2/images/img3.jpg',
    '../../image-gallery2/images/img4.jpg',
    '../../image-gallery2/images/img5.jpg',
    '../../image-gallery2/images/iu.jpg',
    '../../image-gallery2/images/arin.jpg',
    '../../image-gallery2/images/shin-saekyeong.jpg',
};

for (let i = 0; i < images.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

const nationBox = container.getElementsByClassName('nationBox');
let tmp = nationBox[0];




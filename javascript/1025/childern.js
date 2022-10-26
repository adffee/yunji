

'use strict';

const slide_list = document.querySelector('.slide_list');
console.log(slide_list);

const imgArray = [
    './images/bg1.jpg',
    './images/bg2.jpg',
    './images/bg3.jpg',
    './images/bg4.jpg',
    './images/bg5.jpg',
];

for (let i = 0; i < imgArray.length; i++) {
    slide_list.appendChild(document.createElement('li')).style.background = `url(${imgArray[i]}) center/100% 100%`;
}
// let el = document.createElement('li') -> 요소 1개를 만드는 것이므로 이와 같이 만들어야
// 독립적인 요소들이 만들어지고 바로 스타일 걸고 다 가능해짐
// ==================================================================================

const imgList = slide_list.getElementsByTagName('li');

let i = 0;

setInterval(() => {
    imgList[i].style.opacity = 0;
    imgList[i].style.left = '100%';

    i++;
    i = i % imgArray.length;

    imgList[i].style.opacity = 1;
    imgList[i].style.left = 0;
}, 1500);

console.log(slide_list.children[0]);
console.log(slide_list.children[1]);
console.log(slide_list.children[2]);


console.log(slide_list.childNodes[0]);
console.log(slide_list.childNodes[1]);
console.log(slide_list.childNodes[2]);


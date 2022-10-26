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

    /* 
        < createElement >

    - 인수로 지정한 태그명에 해당하는 태그 요소를 생성하여 반환.
      단, 생성 시의 요소는 모두 독립적인 개별요소가 반환됨에 따라 재활용이 되지 않음에 주의.


        < appendChild >

    - 지정한 부모 요소에 인수로 전달한 요소를 부모 요소의 마지막 자식 요소로 추가후
      추가된 자식 요소의 참조를 반환.
    */
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
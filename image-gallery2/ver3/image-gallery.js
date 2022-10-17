'use strict';
//선생님코드

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');


let imgAr = [
    '../images/img1.jpg',
    '../images/img2.jpg',
    '../images/img3.jpg',
    '../images/img4.jpg',
    '../images/img5.jpg'
]


/*동적 요소 생성*/

for (let i = 0; i < images.length; i++) {
  nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}


/*==========================*/
const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg_nation() {
  img.setAttribute('src', imgAr[this.textContent - 1])
  
  // img.src = imgAr[this.textContent - 1];

  beforeNation.style.opacity = '.3';
  this.style.opacity = '1';
  beforeNation = this;
}

for (const nation of nationBox) {
  nation.addEventListener('click', changeImg_nation);
}



'use strict';
///통과코드
// const $container = document.getElementById('main_container');
// const $img = $container.querySelector('img');
// const $nation_container = $container.querySelector('.nation_container');
// const $nationBox = $container.getElementsByClassName('nationBox');
// let tmp;

// const images = [
//   'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg',
//   'iu.jpg', 'arin.jpg', 'shin-saekyeong.jpg',
// ];

// function imageChange() {
//   $img.setAttribute('src', `../images/${images[this.textContent - 1]}`);
//   tmp.style.opacity = '.3';
//   this.style.opacity = '1';

//   tmp = this;
// }

// for (let i = 0; i < images.length; i++) {
//   $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
// }

// tmp = $nationBox[0];

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', imageChange);
// }




//1차
// const $img = document.querySelector('img');
// const $nation_container = document.querySelector('.nation_container');
// const $nationBox = document.getElementsByClassName('nationBox');

// const imageCount = 8;
// const images = new Array(imageCount);

// for (let i = 0; i < images.length; i++) {
//   images[i] = `img${i + 1}`;
// }

// for (let i = 0; i < images.length; i++) {
//   $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
// }

// $nationBox[0].style.backgroundColor = '#555555';
// $nationBox[0].style.color = '#ffffff';

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', function () {
//     for (let j = 0; j < $nationBox.length; j++) {
//       if (i === j) {
//         $img.src = `../images/${images[i]}.jpg`;
        
//         this.style.backgroundColor = '#555555';
//         this.style.color = '#ffffff';
//       } else {
//         $nationBox[j].style.backgroundColor = '#aaaaaa';
//         $nationBox[j].style.color = '#ffffffa0';
//       }
//     }
//   });
// }
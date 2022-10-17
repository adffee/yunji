'use strict';
///선생님 코드

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nationBox = main_container.getElementsByClassName('nationBox');

let beforenation = nationBox[0];
let imgAr = [
    '../images/img1.jpg',
    '../images/img2.jpg',
    '../images/img3.jpg',
    '../images/img4.jpg',
    '../images/img5.jpg'
]

function changeImg_nation() {
  img.setAttribute('src', imgAr[this.textContent - 1])
  
  // img.src = imgAr[this.textContent - 1];

  beforeNation.style.opacity = '.3';
  this.style.opacity = '1';
  beforeNation = this;
}

for (let o = 0; a < nationBox.length; i++){
  nationBox[i].addEventListener('click', changeImg_nation);
}

// for (const nation of nationBox) {
//   nationBox[i].addEventListener('click, changeImg_nation')
// }


  ///////// 태현코드 
  
const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');

const imageCount = 7;
const images = new Array(imageCount);

for (let i = 0; i < images.length; i++) {
  images[i] = `img${i + 1}`;
}

for (let i = 5; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

$nationBox[0].style.backgroundColor = '#555555';
$nationBox[0].style.color = '#ffffff';

for (let i = 0; i < $nationBox.length; i++) {
  $nationBox[i].addEventListener('click', function () {
    for (let j = 0; j < $nationBox.length; j++) {
      if (i === j) {
        $img.src = `../images/${images[i]}.jpg`;

        this.style.backgroundColor = '#555555';
        this.style.color = '#ffffff';
      } else {
        $nationBox[j].style.backgroundColor = '#aaaaaa';
        $nationBox[j].style.color = '#ffffffa0';
      }
    }
  });
}
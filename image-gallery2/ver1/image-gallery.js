'use strict';
//선생님

const main_container = document.getElementById('main_container'),
  img = main_container.querySelector('img'),
  nationBox = main_container.getElementsByClassName('nationBox');


let beforeNation = nationBox[0];


$nationBox[0].style.opacity = '1';

// function imageChange_nation() {
//   img.setAttribute('src', `../images/img${this.textContent}.jpg`);
//   beforeNation.style.opacity = '.3';
//   this.style.opacity = '1';
//   beforeNation = this;
// }

for (let i = 0; i < $nationBox.length; i++) {
  nationBox[i].addEventListener('click', function () {
    img.setAttribute('src', `../images/img${this.textContent}.jpg`);

    // img.src = `../images/img${this.textContent}.jpg`;

    beforeNation.style.opacity = '.3';
    this.style.opacity = '1';
    beforeNation = this;
  });
}



/////통과한 코드 

// const $container = document.getElementById('main_container');
// const $img = $container.querySelector('img');
// const $nationBox = $container.getElementsByClassName('nationBox');
// let tmp = $nationBox[0];

// $nationBox[0].style.opacity = '1';

// function imageChange() {
//   $img.setAttribute('src', `../images/img${this.textContent}.jpg`);
//   tmp.style.opacity = '.3';
//   this.style.opacity = '1';
//   tmp = this;
// }

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', imageChange);
// }


///1차 시도
// const $img = document.querySelector('img');
// const $nationBox = document.getElementsByClassName('nationBox');

// function clearActive() {
//   for (let i = 0; i < $nationBox.length; i++) {
//     $nationBox[i].style.backgroundColor = '#aaaaaa';
//     $nationBox[i].style.color = '#ffffffa0';
//   }
// }

// function changeColor(self) {
//   clearActive();
//   self.style.backgroundColor = '#555555';
//   self.style.color = '#ffffff';
// }

// $nationBox[0].style.backgroundColor = '#555555';
// $nationBox[0].style.color = '#ffffff';

// $nationBox[0].addEventListener('click', function () {
//   $img.src = '../images/img1.jpg';
//   changeColor(this);
// });

// $nationBox[1].addEventListener('click', function () {
//   $img.src = '../images/img2.jpg';
//   changeColor(this);
// });

// $nationBox[2].addEventListener('click', function () {
//   $img.src = '../images/img3.jpg';
//   changeColor(this);
// });

// $nationBox[3].addEventListener('click', function () {
//   $img.src = '../images/img4.jpg';
//   changeColor(this);
// });


// $nationBox[4].addEventListener('click', function () {
//   $img.src = '../images/img5.jpg';
//   changeColor(this);
// });


///민성이네


// 'use strict';

// const $container = document.getElementById('main_container');
// const $img = $container.querySelector('img');
// const $nationBox = $container.getElementsByClassName('nationBox');
// let tmp = $nationBox[0];

// $nationBox[0].style.opacity = '1';

// function imageChange() {
//   $img.setAttribute('src', `../images/img${this.textContent}.jpg`);
//   tmp.style.opacity = '.3';
//   this.style.opacity = '1';
//   tmp = this;
// }

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', imageChange);
// }

//우리조





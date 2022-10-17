'use strict';

const container = document.getElementById('main_container'),
  img = container.querySelector('img'),
  nation_container = container.querySelector('.nation_container');

  
  const images = [
    '../images/img1.jpg',
    '../images/img2.jpg',
    '../images/img3.jpg',
    '../images/img4.jpg',
    '../images/img5.jpg',
    '../images/iu.jpg',
    '../images/arin.jpg',
    '../images/shin-saekyeong.jpg',
  ];
  /***************************************** */
  
  let intervalId, // setinterval
    slideCount = 1,
    trigger = true; // 슬라이드 멈춤/재시작 true/false 
  
for (let i = 0; i < images.length; i++) {
  nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

const nationBox = container.getElementsByClassName('nationBox');
let tmp = nationBox[0];

// function imageChange() {
//   $img.setAttribute('src', images[this.textContent - 1]);
//   tmp.style.opacity = '.3';
//   this.style.opacity = '1';
//   slideCount = this.textContent - 1;

//   tmp = this;
// }

// for (let i = 0; i < $nationBox.length; i++) {
//   $nationBox[i].addEventListener('click', imageChange);
// }

/*슬라이드 카운트 쓰지마라 */

function imageSlide() {
  img.setAttribute('src', images[slideCount]);

  tmp.style.opacity = '.3';
  nationBox[slideCount].style.opacity = '1';
  tmp = nationBox[slideCount++];

  if (slideCount === images.length) slideCount = 0;
}

intervalId = setInterval(imageSlide, 1500);

container.addEventListener('click', function () {
  if (trigger) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(imageSlide, 1500);
  }

  trigger = !trigger;
});



////1차 

// 'use strict';

// const $img = document.querySelector('img');
// const $nation_container = document.querySelector('.nation_container');
// const $nationBox = document.getElementsByClassName('nationBox');
// const $main_container = document.querySelector('#main_container');

// const imageCount = 8;
// const images = new Array(imageCount);

// let indexNumber = 1, trigger = true;
// let intervalId;

// function imageSlide() {
//   return setInterval(() => {
//     $img.src = `../images/${images[indexNumber]}.jpg`;

//     for (let j = 0; j < $nationBox.length; j++) $nationBox[j].classList.remove('active');
    
//     $nationBox[indexNumber].style.backgroundColor = '#555555';
//     $nationBox[indexNumber].style.color = '#ffffff';

//     indexNumber++;

//     if (indexNumber > imageCount - 1) indexNumber = 0;
//   }, 1500);
// }

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

//         indexNumber = i;
//       } else {
//         $nationBox[j].style.backgroundColor = '#aaaaaa';
//         $nationBox[j].style.color = '#ffffffa0';
//       }
//     }
//   });
// }

// intervalId = imageSlide();

// $main_container.addEventListener('click', function () {
//   trigger = !trigger;
//   if (trigger) {
//     clearInterval(intervalId);
//   } else {
//     clearInterval(intervalId);
//     intervalId = imageSlide();
//   }
// });





// 민성이네 코드

// 'use strict';

// let nationBox = document.getElementsByClassName("nationBox");    // nationBox 클래스명으로 변수에 참조 저장
// let img = document.querySelector("img");                         // img태그 변수에 참조 저장
// let tmp = 0;                                                     // nation 임시 저장 변수 선언

// // nation 색상 전환 및 img 변경 함수
// function changeImgNation(temp) {
//     img.setAttribute("src", `../images/${temp.textContent}.jpg`);
//     nationBox[tmp].style.opacity = ".3";
//     temp.style.opacity = "1";
//     tmp = (+temp.textContent - 1);
// }

// // 클릭 이벤트    콜백함수 활용
// for (let i = 0; i < nationBox.length; i++) {
//   nationBox[i].addEventListener("click", function call() {
//     changeImgNation(this);
//   });
// }
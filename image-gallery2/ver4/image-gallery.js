'use strict';

//////선생님코드

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

const imgAr = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
    './image/bg5.jpg',
];

for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

/* =========================================================================================== */

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg_nation() {
    /* 
        현재 요소(beforeNation)의 컨테트와 다음 요소의 인덱스 관계를 활용.
        단, 현재 요소의 컨텐트가 다음 요소의 인덱스가 되기 위해 인덱스 범위를
        벗어나는 상황을 대비하기 위해 나머지 원리를 활용.
    */
    let currentNationNumIdx = beforeNation.textContent % imgAr.length;

    img.src = imgAr[currentNationNumIdx];

    beforeNation.style.opacity = '.5';
    nationBox[currentNationNumIdx].style.opacity = '1';
    beforeNation = nationBox[currentNationNumIdx];
}

/* =========================================================================================== */

// 자동 이미지 교체

let stopActiveImg, flag;

function activeImg() {
    stopActiveImg = setInterval(changeImg_nation, 2000);
}

function stopImg() {
    clearInterval(stopActiveImg);
}

activeImg();

main_container.addEventListener('click', () => {
    if (flag) {
        activeImg();
    } else {
        stopImg();
    }
    flag = !flag;
});


/// 선생님한테 검사 맡은 코드 

const $container = document.getElementById('main_container'),
  $img = $container.querySelector('img'),
  $nation_container = $container.querySelector('.nation_container');

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

for (let i = 0; i < images.length; i++) {
  $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// ==================== 슬라이드  ====================

// 1. slideCount 없애고 다른 방법을 강구하라. = 해결
// 2. setInterval이 두번 나온다. 모듈을 이용하라. = 심사 대기

const $nationBox = $container.getElementsByClassName('nationBox');
let tmp = $nationBox[0];
let intervalId, trigger = true;

function slide() {
  let computedIndex = tmp.textContent % images.length;

  $img.src = images[computedIndex];
  tmp.style.opacity = '.3';
  $nationBox[computedIndex].style.opacity = '1';
  tmp = $nationBox[computedIndex];
}

function start() {
  intervalId = setInterval(slide, 1500);
};

function stop() {
  clearInterval(intervalId);
};

start();

$container.addEventListener('click', function () {
  if (trigger) {
    stop();
  }
  
  else {
    start();
  }

  trigger = !trigger;
});

//////
// const container = document.getElementById('main_container'),
//   img = container.querySelector('img'),
//   nation_container = container.querySelector('.nation_container');

  
//   const images = [
//     '../images/img1.jpg',
//     '../images/img2.jpg',
//     '../images/img3.jpg',
//     '../images/img4.jpg',
//     '../images/img5.jpg',
//     '../images/iu.jpg',
//     '../images/arin.jpg',
//     '../images/shin-saekyeong.jpg',
//   ];
//   /***************************************** */
  
//   let intervalId, // setinterval
//     slideCount = 1,
//     trigger = true; // 슬라이드 멈춤/재시작 true/false 
  
// for (let i = 0; i < images.length; i++) {
//   nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
// }

// const nationBox = container.getElementsByClassName('nationBox');
// let tmp = nationBox[0];

// // function imageChange() {
// //   $img.setAttribute('src', images[this.textContent - 1]);
// //   tmp.style.opacity = '.3';
// //   this.style.opacity = '1';
// //   slideCount = this.textContent - 1;

// //   tmp = this;
// // }

// // for (let i = 0; i < $nationBox.length; i++) {
// //   $nationBox[i].addEventListener('click', imageChange);
// // }

// /*슬라이드 카운트 쓰지마라 */

// function imageSlide() {
//   img.setAttribute('src', images[slideCount]);

//   tmp.style.opacity = '.3';
//   nationBox[slideCount].style.opacity = '1';
//   tmp = nationBox[slideCount++];

//   if (slideCount === images.length) slideCount = 0;
// }

// intervalId = setInterval(imageSlide, 1500);

// container.addEventListener('click', function () {
//   if (trigger) {
//     clearInterval(intervalId);
//   } else {
//     intervalId = setInterval(imageSlide, 1500);
//   }

//   trigger = !trigger;
// });



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
//     img.setAttribute("src", `../images/${temp.textContent}.                                                                                                                                                                                                                                                                                                                                                                                                       jpg`);
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



///// 피드백 받은 내용 

// 'use strict';

// const container = document.getElementById('main_container'),
//     img = container.querySelector('img'),
//     nation_container = container.querySelector('.nation_container');

// const images = [
//     './week_ex_image/1.jpg',
//     './week_ex_image/2.jpg',
//     './week_ex_image/3.jpg',
//     './week_ex_image/4.jpg',
//     './week_ex_image/5.jpg',
//     './week_ex_image/ato.jpg',
//     './week_ex_image/psycoato.jpg',
// ];

// for (let i = 0; i < images.length; i++) {
// nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
// }

// // ==================== 슬라이드  ====================

// // 1. slideCount 없애고 다른 방법을 강구하라. = 해결
// // 2. setInterval이 두번 나온다. 모듈을 이용하라. = 심사 대기

// const nationBox = container.getElementsByClassName('nationBox');
// let tmp = nationBox[0];
// let intervalId, trigger = true;

// function slide() {
// let computedIndex = tmp.textContent % images.length;

// img.src = images[computedIndex];
// tmp.style.opacity = '.3';
// nationBox[computedIndex].style.opacity = '1';
// tmp = nationBox[computedIndex];
    
// }

// function start() {
// intervalId = setInterval(slide, 1500);
// };

// function stop() {
// clearInterval(intervalId);
// };

// start();

// container.addEventListener('click', function () {
// if (trigger) {
// stop();
// }
// else {
//     start();
// }

// trigger = !trigger;
// });
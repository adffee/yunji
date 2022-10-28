/**
 * < 구현 목표 >
 * 1. 리사이징 할 때 이벤트를 이용해 사이즈를 바꾸는 것을 구현.
 * 1.1. 사이즈가 변할 때마다 main에 margin-top 주는 것
 * 2. selected 클래스를 활용한다. 클릭됐을 시에 선택되고 색상이 변하는 것 구현.
 * 3. 이번에는 target이 아닌 a 태그의 href 속성을 이용해 div contents가 보이도록 만듬.
 *
 * < 흐름 분석 >
 * 1. 최초에 클릭되어있는 놈을 나타내는 변수가 필요함.
 * 2. 버튼을 클릭하면 클릭되어있는 놈의 클래스를 없애주고 클릭한 놈에게 클래스를 넣어줌.
 * 3. 클릭이 발생하면 이전 버튼 변수에 '현재' 버튼을 넣음. 그래야 다른 버튼을 누를 때 방금 내가 누른 버튼이 원래대로 돌아옴.
 * 4. 우리는 버튼을 클릭했을 때 내용물이 보이게끔 만들어야함. 하지만 그 이전에 기존에 보이던 놈을 숨겨야함.
 * 5. 숨기기 위해서는 우리가 클릭한 버튼의 href 속성을 알아야하고 이 속성을 통해서 contents의 id 속성과 일치하는 녀석을 보이거나 안보이게 만들면 된다.
 */

 'use strict';

 // 노드 가져옴
 const $header = document.querySelector('header'),
   $a = $header.querySelectorAll('a'),
   $contents = $header.querySelector('.contents');
 const $main = document.querySelector('main');
 
 let beforeButton = $a[0]; // 최초로 선택되어있는 버튼.
 let beforeContents = $contents.children[0]; // 최초로 보이는 내용
 
 function mainHeight() {
   $main.style.marginTop = `${$header.offsetHeight}px`;
 }
 
 function findChange(contents) {
   beforeContents.classList.remove('visible');
   contents.classList.add('visible');
 }
 
 findChange(beforeContents);
 mainHeight();
 
 $header.addEventListener('click', function (event) {
   const nowButton = event.target;
 
   if (nowButton.tagName === 'A') {
     beforeButton.classList.remove('selected');
     nowButton.classList.add('selected');
 
     // 현재 선택된 target에 해당하는 내용물을 선택함.
     const nowContents = $contents.querySelector(nowButton.getAttribute('href'));
     findChange(nowContents);
 
     mainHeight();
 
     // 버튼과 컨텐츠를 스왑함.
     beforeButton = nowButton;
     beforeContents = nowContents;
   }
 });
 
 window.addEventListener('resize', mainHeight);
 



 ////스티키 버전

 
 /**
 * < 구현 목표 >
 * 1. 리사이징 할 때 이벤트를 이용해 사이즈를 바꾸는 것을 구현.
 * 1.1. 사이즈가 변할 때마다 main에 margin-top 주는 것
 * 2. selected 클래스를 활용한다. 클릭됐을 시에 선택되고 색상이 변하는 것 구현.
 * 3. 이번에는 target이 아닌 a 태그의 href 속성을 이용해 div contents가 보이도록 만듬.
 *
 * < 흐름 분석 >
 * 1. 최초에 클릭되어있는 놈을 나타내는 변수가 필요함.
 * 2. 버튼을 클릭하면 클릭되어있는 놈의 클래스를 없애주고 클릭한 놈에게 클래스를 넣어줌.
 * 3. 클릭이 발생하면 이전 버튼 변수에 '현재' 버튼을 넣음. 그래야 다른 버튼을 누를 때 방금 내가 누른 버튼이 원래대로 돌아옴.
 * 4. 우리는 버튼을 클릭했을 때 내용물이 보이게끔 만들어야함. 하지만 그 이전에 기존에 보이던 놈을 숨겨야함.
 * 5. 숨기기 위해서는 우리가 클릭한 버튼의 href 속성을 알아야하고 이 속성을 통해서 contents의 id 속성과 일치하는 녀석을 보이거나 안보이게 만들면 된다.
 */

// 'use strict';

// // 노드 가져옴
// const $header = document.querySelector('header'),
//   $a = $header.querySelectorAll('a'),
//   $contents = $header.querySelector('.contents');
// const $main = document.querySelector('main');

// let beforeButton = $a[0]; // 최초로 선택되어있는 버튼.
// let beforeContents = $contents.children[0]; // 최초로 보이는 내용

// function findChange(contents) {
//   beforeContents.classList.remove('visible');
//   contents.classList.add('visible');
// }

// findChange(beforeContents);

// $header.addEventListener('click', function (event) {
//   const nowButton = event.target;
//   event.preventDefault();

//   if (nowButton.tagName === 'A') {
//     beforeButton.classList.remove('selected');
//     nowButton.classList.add('selected');

//     // 현재 선택된 target에 해당하는 내용물을 선택함.
//     const nowContents = $contents.querySelector(nowButton.getAttribute('href'));
//     findChange(nowContents);

//     // 버튼과 컨텐츠를 스왑함.
//     beforeButton = nowButton;
//     beforeContents = nowContents;
//   }
// });

// window.addEventListener('load', function () {
//   setTimeout(function () {
//     scrollTo(0, 0);
//   }, 100);
// });

/**
 * 1. service_header 클릭하면 service_body 열림
 * 2. 열려 있는거 눌러도 아무런 변화 없음. 안열려 있는거 누르면 그게 열리고 열렸던 게 닫힘
 * 3. COLLAPSE ALL 버튼 누르면 열려있던 게 뭐든 닫힘.
 * 4. childNode, children중 하나 반드시 그냥 사용하기.
 */

'use strict';

/**
 * 1. service_header 클릭하면 service_body 열림
 * 2. 열려 있는거 눌러도 아무런 변화 없음. 안열려 있는거 누르면 그게 열리고 열렸던 게 닫힘
 * 3. COLLAPSE ALL 버튼 누르면 열려있던 게 뭐든 닫힘.
 * 4. childNode, children중 하나 반드시 그냥 사용하기.
 */

 'use strict';

 const service_container = document.querySelector('.service_container'),
   $service_list = service_container.querySelectorAll('.service_list'),
   $service_header = service_container.querySelectorAll('.service_header'),
   $btn_collapseAll = service_container.querySelector('.btn_collapseAll');
 
 let beforeLi = $service_header[0];
 
 function replace(target, sign1, sign2) {
   target.textContent = target.textContent.replace(sign1, sign2);
 }
 
 function beforeHidden() {
   beforeLi.parentNode.classList.add('hidden');
   replace(beforeLi, '-', '+');
 }
 
 service_container.addEventListener('click', function (event) {
   if (event.target.classList.contains('service_header')) {
     beforeHidden();
     beforeLi = event.target;
 
     event.target.parentNode.classList.remove('hidden');
     replace(event.target, '+', '-');
   }
 });
 
 $btn_collapseAll.addEventListener('click', beforeHidden);


// target에 parentNode 바로 거는건 위험
// const service_container = document.querySelector('.service_container'),
//   $service_list = service_container.getElementsByClassName('service_list'),
//   $btn_collapseAll = service_container.querySelector('.btn_collapseAll');

// let beforeLi = $service_list[0];

// function replace(target, sign1, sign2) {
//   target.children[0].textContent = target.children[0].textContent.replace(sign1, sign2);
// }

// function beforeHidden() {
//   beforeLi.classList.add('hidden');
//   replace(beforeLi, '-', '+');
// }

// service_container.addEventListener('click', function (event) {
//   const liTarget = event.target.parentNode;

//   if (liTarget.classList.contains('service_list')) {
//     beforeHidden();

//     beforeLi = liTarget;

//     liTarget.classList.remove('hidden');
//     replace(liTarget, '+', '-');
//   }
// });

// $btn_collapseAll.addEventListener('click', beforeHidden);

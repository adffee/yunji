'use strict';

const service_container = document.querySelector('.service_container'),
    service_ul = service_container.querySelector('ul'),
    service_li = service_ul.getElementsByTagName('li'),
    service_list = service_container.getElementsByClassName('service_list'),
    clear = service_container.querySelector('button');
    

service_ul.addEventListener('click', click_li);

// 되지만 이렇게를 원하시는게 아님
function close(i) {
    service_list[i].classList.add('hidden');
    service_list[i].children[0].textContent = service_list[i].children[0].textContent.replace('-', '+');
}

clear.addEventListener('click', function () {
    for (let i = 0; i < service_list.length; i++) {
        // service_list[i].classList.add('hidden');
        // service_list[i].children[0].textContent = service_list[i].children[0].textContent.replace('-', '+');
        close(i);
    }
});
function click_li(e) {

    for (let i = 0; i < service_list.length; i++) {
        if (e.target === service_list[i].children[0]) {
            console.log(e.target);
            e.target.parentNode.classList.remove('hidden');
            e.target.textContent = e.target.textContent.replace('+', '-');
        } else {
            // service_list[i].classList.add('hidden');
            // service_list[i].children[0].textContent = service_list[i].children[0].textContent.replace('-', '+');
            close(i);
        }
    }
}

////////////////////////H///////////TH//////////////////////////////////////////////////////
// const service_container = document.querySelector('.service_container'),
//   $ul = service_container.querySelector('ul'),
//   $li = service_container.getElementsByClassName('service_list'),
//   $button = service_container.querySelector('.btn_collapseAll');

// let beforeLi = $li[0];

// function beforeHidden() {
//   beforeLi.classList.add('hidden');
//   beforeLi.children[0].textContent = beforeLi.children[0].textContent.replace('-', '+');
// }

// $ul.addEventListener('click', function (event) {
//   const liTarget = event.target.parentNode;

//   if (liTarget.tagName === 'LI') {
//     beforeHidden();

//     beforeLi = liTarget;

//     liTarget.classList.remove('hidden');
//     liTarget.children[0].textContent = liTarget.children[0].textContent.replace('+', '-');
//   }
// });

// $button.addEventListener('click', function () {
//   beforeHidden();
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function click_li(e) {
//     const header = e.target.closest('.service_list');

//     for (let i = 0; i < service_list.length; i++) {
//         if (header === service_list[i]) {
//             header.classList.remove('hidden');
//             header.children[0].textContent = header.children[0].textContent.replace('+', '-');
//         } else {
//             // service_list[i].classList.add('hidden');
//             // service_list[i].children[0].textContent = service_list[i].children[0].textContent.replace('-', '+');
//             abc(i);
//         }
//     }
// }
// 첨에 e.target으로 해서 service_list[i]랑 같으면 되게 하려고 했는데...실질적으로 e.target이 p라서 반복이 안되었고,
// 지금은 closest으로 걸어서 list 가 되니까 되는듯하다.
// CLOSEST을 쓰지 말라고 하셨단다...

// //버트 눈른걸 이전, 지금은 현재로 해서 하려고 했는데 실팽
// let prev = p[0], currentN;

// function click_li(e) {
//     currentN = e.target;
//     if(currentN.classList.contains('')) {
//         currentN.parentNode.classList.remove('hidden');
//         currentN.textContent = currentN.textContent.replace('+', '-');
//     } 
//     close();
//     prev = currentN;
// }


// clear.addEventListener('click', function () {
//     close();
// });

// function close() {
//     prev.parentNode.classList.add('hidden');
//     prev.textContent = prev.children[0].textContent.replace('-', '+');
// }
/////////////////////////////////////////////////////////////////////////////////





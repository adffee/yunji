/* 
    < deltaY >

- wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/

/* wheel */
/* 
< wheel 이벤트 > - 구버전 이벤트 : mousewheel( 현재는 사용되지 않음 )

- 마우스 휠을 조작했을 때의 이벤트.
이벤트의 대상은 일반적으로 window 나 document 가 대상이 되며 스클롤이 생성되는 다른 요소가 될 수도 있음.
*/

'use strict';

// const pageFrame = document.querySelector(".pageFrame"),
//     page = pageFrame.querySelectorAll(".page");


// for (let i = 0; i < page.length; i++) {
//     page[i].style.top = i+"00%";
// }

// let height = 0;

// window.addEventListener("wheel", function(e){
//     let wheel =  e.deltaY;


    
//     if(wheel > 0){
//         height++
//         pageFrame.style.top = -height+"00%";
//     }else if(wheel < 0){
//         height--
//         pageFrame.style.top = -height+"00%";
//     }
    
// })


const pageFrame = document.querySelector('.pageFrame'),
    page = pageFrame.querySelectorAll('.page'),
    button = document.querySelectorAll('.btn');


    


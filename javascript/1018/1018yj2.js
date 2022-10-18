'use strict';

let li = document.getElementsByTagName('li');

window.addEventListener('load', () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
});


let scrollBox = document.querySelector('.scrollBox');

let stop;

document.addEventListener('scroll', () => {

    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br>( x = ${posX}, y = ${posY})`;


    if (posX > 500 || posY > 500) {
        window.scroll(0, 0);
    }


    if (posX > 500) {
        let stopTimeout = setInterval(() => {
            window.scroll(posX -= 5, posY);

            if (posX <= 0) {                // posX 값이 감소 연산으로 직접 계속
                clearInterval(stopTimeout); // 변경되므로 미만(<) 으로 비교해도 무방.
            }
        }, 5);
    }

    if (posY > 500) {
        let stopTimeout = setInterval(() => {

            window.scrollBy(posX, -5);

   //       
            posY = parseInt(window.scrollY);

            if (posY <= 0) {                
                clearInterval(stopTimeout); 
            }                               
        }, 5);                              
    }

    clearTimeout(그만);

    stop = setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);
});


///간단하게 통합한 버전... 개어려움 


function scrollBack(bc) {
    let stopTimeout = setInterval(() => {
        scrollBack(bc);

        if (posX < 0 || posY < 0) {
            clearInterval(stopTimeout);
        }
    }, 5);
}

if (posX > 500) {
    scrollBack(() => window.scroll(posX -= 5, posY));
}

if (posY > 500) {
    scrollBack(() => window.scrollBy(posX, posY -= 5));
}

'use strict';

let main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.querySelectorAll('li'),
    btn = main_container.querySelectorAll('a');

let slide_idx = 0,                      // 현재 슬라이드 인덱스.
    slide_endIdx = li.length - 1,       // 슬라이드 인덱스 종료값.
    beforeEventTime = -new Date();

let stop;

/* =================================================================================== */

function executable() {               // 버튼 연속 실행 제어 함수.
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

function activeSlide() {
    if (executable()) {
        /*
            자동슬라이드 실행시 setInterval 함수에 대한 this 로 반환되는
            window 객체인 경우에는 1 을 반환하여 foward 방향으로만 이동시키되,
            window 객체가 아닌 경우에는 해당 객체(btn)가 가지고 있는 사용자
            정의 속성값을 활용하여 이동.
        */
        let move = this === window ? 1 : +this.dataset.moveValue;

        slide_idx += move;
        slide_idx %= li.length;

        slide_list.style.left = `${-slide_idx * 100}%`;

        btn[0].classList.remove('nonVisible');
        btn[1].classList.remove('nonVisible');
        if (slide_idx <= 0) {
            btn[0].classList.add('nonVisible');
        } else if (slide_idx >= slide_endIdx) {
            btn[1].classList.add('nonVisible');
        }
    }
}

btn[1].addEventListener('click', activeSlide);
btn[0].addEventListener('click', activeSlide);

// ===============================================================================
/* 자동 슬라이드 */

/* 
    main_container 에 이벤트 지정시 버튼(btn)에도 자동슬라이드 이벤트가 걸리는
    문제가 발생되므로 slide_container 에 지정해야 함에 주의.
*/
let slide_container = main_container.querySelector('.slide_container');

slide_container.addEventListener('mouseenter', () => {
    stop = setInterval(activeSlide, 2000);
});

slide_container.addEventListener('mouseleave', () => {
    clearInterval(그만);
});
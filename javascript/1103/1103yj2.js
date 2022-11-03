'use strict';

import executable from "./executable.js";

const body = document.querySelector('body'),
    main_container = body.querySelector('.main_container'),
    slides = main_container.querySelectorAll('.slide_list li'),
    btn = main_container.querySelectorAll('.main_container a'),
    pager = body.querySelector('.pager');


for (let i = 0; i < slides.length; i++){
    pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
}

const pagers = pager.querySelectorAll('.pager a');

let beforeIdx = 0,
    currentIdx = 0;

const DELAYTIME = 800,
    confirmActionable = executable(DELAYTIME);


function checkStartEnd(idx) {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');

    if (idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (idx >= slides.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

function highlightPager(nextIdx) {
    pagers[currentIdx].style.background = '#66666680';
    pagers[nextIdx].style.background = '#666666';
    
}

function positionBeforeMove(nextIdx, directionMove) {
    const nextEle = slides[nextIdx];
    nextEle.classList.remove('animated');
    nextEle.style.left = `${directionMove * 100}%`;
}

function activeSlide(nextIdx, directionMove) {
    const currentEle = slides[currentIdx],
        nextEle = slides[nextIdx];

    currentEle.classList.add('animated');
    currentEle.style.left = `${-directionMove * 100}%`;

    nextEle.classList.add('animated');
    nextEle.style.left = 0;

    highlightPager(nextIdx);
    checkStartEnd(nextIdx);

    if (currentIdx === slides.length - 1 && currentIdx !== nextIdx) {
        setTimeout(() => {
            currentEle.classList.remove('animated');
            currentEle.style.left = '100%';
        }, DELAYTIME);
    }
    currentIdx = nextIdx;
}


pager.addEventListener('mouseover', (e) => {
    const pagerBtn = e.target,
        extractDirection = +pagerBtn.dataset.direction;
    
    if (pagerBtn.tagName === 'A' && currentIdx !== extractDirection && beforeIdx !== extractDirection) {
        positionBeforeMove(
            extractDirection, extractDirection > currentIdx ? 1 : -1
        );
    }
});


body.addEventListener('click', function (e) {
    const eventTarget = e.target.closest('a')
    
    if (this.contains(eventTarget) && confirmActionable()) {
        e.preventDefault();

        const extractDirection = + eventTarget.dataset.direction;
        let nextIdx = currentIdx + extractDirection;

        if (eventTarget.children[0]) {
            positionBeforeMove(nextIdx, extractDirection);
        } else {
            nextIdx = extractDirection;
        }
        beforeIdx = currentIdx;
        setTimeout(() => {
            activeSlide(nextIdx, nextIdx > currentIdx ? 1 : -1);
        }, 10);
    }
});


const slide_list = main_container.querySelector('.slide_list');
let autoSlide;

slide_list.addEventListener('mouseenter', () => {
    autoSlide = setInterval(() => {
        if (confirmActionable()) {
            let nextIdx = (currentIdx + 1) % slides.length;

            positionBeforeMove(nextIdx, 1);
            beforeIdx = currentIdx;
            
            setTimeout(() => {
                activeSlide(nextIdx, 1);
            }, 10);
        }
    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlide);
});
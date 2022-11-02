'use strict';

// ==================== 노드 가져옴 ====================
const $body = document.querySelector('body'),
  $main_container = $body.querySelector('.main_container'),
  $li = $main_container.querySelectorAll('.slide_list li'),
  [$prev, $next] = $main_container.querySelectorAll('a'),
  $pager = $body.querySelector('.pager');

let beforeTime = 0;

// ==================== 타이머 ====================
function timer(delay) {
  let afterTime = new Date();
  if (afterTime - beforeTime > delay) {
    beforeTime = afterTime;

    return true;
  }
}

// ==================== 페이저 만들어줌 ====================
for (let i = 0; i < $li.length; i++) {
  $pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
}

// 이 외의 변수 준비.
const $pagerButton = $pager.querySelectorAll('a');
let slideIndex = 0, slideEndIndex = $li.length - 1;

$pagerButton[0].classList.add('selected');

// ==================== 버튼 가시 여부 ====================
function slideButtonVisible(index) {
  $prev.classList.remove('hidden');
  $next.classList.remove('hidden');

  if (index <= 0) {
    $prev.classList.add('hidden');
  } else if (index >= slideEndIndex) {
    $next.classList.add('hidden');
  }
}

// ==================== 페이저 불투명도 컨트롤 ====================
function pagerOpacity(index) {
  $pagerButton[slideIndex].classList.remove('selected');
  $pagerButton[index].classList.add('selected');
}

// ==================== 움직이게하는 함수? ====================
function movement(nextIndex, direction) {
  const nextElement = $li[nextIndex];

  nextElement.style.visibility = 'hidden';
  nextElement.classList.remove('animated');

  nextElement.style.left = `${direction * 100}%`;
}

// ==================== 슬라이드 ====================
function slide(nextIndex, direction) {
  const currentElement = $li[slideIndex],
    nextElement = $li[nextIndex];

  currentElement.classList.add('animated');
  currentElement.style.left = `${-direction * 100}%`;

  nextElement.classList.add('animated');
  nextElement.style.visibility = 'visible';
  nextElement.style.left = 0;

  pagerOpacity(nextIndex);
  slideButtonVisible(nextIndex);

  slideIndex = nextIndex;
}

// ==================== 페이저 호버 이벤트 ====================
$pager.addEventListener('mouseover', function (event) {
  const pagerButton = event.target;

  if (pagerButton.tagName === 'A') {
    const direction = +pagerButton.dataset.direction;

    if (slideIndex !== direction) {
      movement(direction, direction > slideIndex ? 1 : -1);
    }
  }
});

// ==================== 버튼, 페이저 이벤트 ====================
$body.addEventListener('click', function (event) {
  const aTarget = event.target.closest('a');

  if (this.contains(aTarget) && timer(1000)) {
    event.preventDefault();

    const direction = +aTarget.dataset.direction;
    let nextIndex = slideIndex + direction;

    if (aTarget.children[0]) {
      movement(nextIndex, direction);
    } else {
      nextIndex = direction;
    }

    setTimeout(function () {
      slide(nextIndex, nextIndex > slideIndex ? 1 : -1);
    }, 10);
  }
});

// ==================== 자동 슬라이드 ====================
let $slide_list = $main_container.querySelector('.slide_list');
let intervalId;

$slide_list.addEventListener('mouseenter', function() {
  intervalId = setInterval(function () {
    if (timer(1000)) {
      let nextIndex = (slideIndex + 1) % $li.length;

      movement(nextIndex, 1);

      setTimeout(function () {
        slide(nextIndex, 1);
      }, 10);
    }
  }, 1500);
});

$slide_list.addEventListener('mouseleave', function() {
  clearInterval(intervalId);
});

0// ==================== 노드 가져오기 및 기초 작업 ====================
const $body = document.querySelector('body'),
  $main_container = $body.querySelector('.main_container'),
  $slide_list = $main_container.querySelector('.slide_list'),
  [$prev, $next] = $main_container.querySelectorAll('a'),
  $pager = $body.querySelector('.pager');

// 넣을 필요 없지만 이미지 하나 추가하기 위해 필요한 로직
const images = [
  './images/soul_stone.png',
];

// li 추가 생성하기
for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.setAttribute('src', images[i]);
  img.setAttribute('alt', images[i].replace('./images/', '').replace('.png', ''));

  const li = document.createElement('li');
  li.appendChild(img);

  $slide_list.appendChild(li);
}
// 여기까지
-const $li = $slide_list.querySelectorAll('li');

// 페이저 버튼 만들기
for (let i = 0; i < $li.length; i++) {
  const $a = document.createElement('a');
  $a.setAttribute('href', '#');
  $a.setAttribute('data-direction', i);

  $pager.appendChild($a);
}

const $pagerButton = $pager.querySelectorAll('a');
let slideIndex = 0;

// ==================== 중복 클릭 방지를 위한 타이머 ====================
let beforeTime = -new Date();

function timer(time) {
  let afterTime = new Date();
  if (afterTime - beforeTime > time) {
    beforeTime = afterTime;

    return true;
  }
}

// ==================== 함수 선언 ====================
// 버튼 숨기기
function slideButtonVisible(index) {
  if (index <= 0) {
    $prev.classList.add('hidden');
    $next.classList.remove('hidden');
  } else if (index >= $li.length - 1) {
    $next.classList.add('hidden');
    $prev.classList.remove('hidden');
  } else {
    $prev.classList.remove('hidden');
    $next.classList.remove('hidden');
  }
}

// 먼저 이동시키는 함수
function preMove(nextIndex, direction) {
  const nextElement = $li[nextIndex]; // 클릭할 요소의 인덱스 받아서 요소 뽑아낸 후에

  nextElement.style.visibility = 'hidden'; // 숨기고
  nextElement.classList.remove('animated'); // 트랜지션 없애고
  nextElement.style.left = `${direction * 100}%`; // 옮김
}

// 슬라이드 인덱스보다 크면 오른쪽, 작으면 왼쪽으로 보내기 위한 다이렉션 반환 함수
function getDirection(index) {
  if (index > slideIndex) {
    return 1;
  } else {
    return -1;
  }
}

// 페이저 버튼 opacity 조절
function pagerOpacity(nextIndex) {
  $pagerButton[nextIndex].style.backgroundColor = '#666666'; // 다음 버튼을 선택
  $pagerButton[slideIndex].style.backgroundColor = '#66666680'; // 현재 버튼 선택 해제
}

// 기존의 요소 이동
function currentElementMove(direction) {
  const currentElement = $li[slideIndex]; // 기존 요소 뽑아내고

  currentElement.classList.add('animated'); // 트랜지션을 주고
  currentElement.style.left = `${-direction * 100}%`; // 옮김 -가 없으면 반대로 움직임. 매우 불편.
}

// 선택한 요소 이동
function nextElementMove(nextIndex) {
  const nextElement = $li[nextIndex]; // 선택 요소 뽑고

  nextElement.style.visibility = 'visible'; // 보이게 만들고
  nextElement.classList.add('animated'); // 트랜지션 주고
  nextElement.style.left = 0; // 옮김.
}

function slideAction(index, direction) {
  setTimeout(() => {
    currentElementMove(direction);
    nextElementMove(index);
    pagerOpacity(index);
    slideButtonVisible(index);

    slideIndex = index;
  }, 10);
}

// ==================== 슬라이드 버튼 클릭 ====================
$main_container.addEventListener('click', function (event) {
  const aTarget = event.target.closest('a');

  if (this.contains(aTarget) && timer(1000)) {
    event.preventDefault();

    const direction = +aTarget.dataset.direction;
    let nextIndex = slideIndex + direction; // 기존의 인덱스에 다이렉션 더해서 다음 인덱스 뽑아내기

    preMove(nextIndex, direction);
    slideAction(nextIndex, direction);
  }
});

// ==================== 페이저 버튼 이벤트 ====================
$pager.addEventListener('mouseover', function (event) {
  if (event.target.hasAttribute('href')) {
    const pagerIndex = +event.target.dataset.direction;

    if (slideIndex !== pagerIndex) { // 현재 인덱스와 페이저 인덱스가 일치하지 않으면 실행
      preMove(pagerIndex, getDirection(pagerIndex));
    }
  }
});

$pager.addEventListener('click', function (event) {
  const aTarget = event.target.closest('a');

  if (this.contains(aTarget) && timer(1000)) {
    event.preventDefault();

    const nextIndex = +aTarget.dataset.direction;

    slideAction(nextIndex, getDirection(nextIndex));
  }
});

// ==================== 자동 슬라이드 이벤트 ====================
let intervalId;

$slide_list.addEventListener('mouseenter', function () {
  intervalId = setInterval(function () {
    if (timer(1000)) {
      let nextIndex = (slideIndex + 1) % $li.length;

      preMove(nextIndex, 1);
      slideAction(nextIndex, 1);
    }
  }, 1500);
});

$slide_list.addEventListener('mouseleave', function () {
  clearInterval(intervalId);
});

// 업그레이드 방향
// 컨테이너를 호버하면 이미지가 자동으로 넘어간다. 마지막 이미지가 되면 처음으로 되돌아간다.
// 호버를 하지 않을 시에는 멈춘다.
// 버튼은 여전히 기능을 해야한다.
// data-move-value 속성을 적극 활용해야한다.

// 태그 불러오기
const $slide_container = document.getElementById('slide-container'),
    $image_container = $slide_container.querySelector('.image-container'),
    $images = $image_container.querySelectorAll('img'),
    [$prev, $next] = $slide_container.getElementsByTagName('a');

const prevMove = $prev.dataset.moveValue,
    nextMove = $next.dataset.moveValue;

let slideIndex = 0, before = 0;

// 타이머 정의
function timer(delay) {
  let after = new Date();

  if (delay < (after - before)) {
    before = after;
    return true;
  }
}

// 컨테이너에 이벤트를 추가.
$slide_container.addEventListener('click', function (event) {
  event.preventDefault();

  const aTarget = event.target.closest('a');
  if (timer(1000)) {
    if (aTarget === $prev) {
      slideIndex += +prevMove;

      $next.classList.remove('hidden');
      if (slideIndex <= 0) {
        $prev.classList.add('hidden');
      }
    } else if (aTarget === $next) {
      slideIndex += +nextMove;

      $prev.classList.remove('hidden');
      if (slideIndex >= $images.length - 1) {
        $next.classList.add('hidden');
      }
    } else {
      return;
    }

    $image_container.style.left = `${slideIndex * -100}%`;
  }
});

// ==================== 이미지 자동 슬라이드 ====================
let intervalId;

function start() {
  intervalId = setInterval(function () {
    slideIndex += +nextMove;

    if (slideIndex === $images.length) {
      slideIndex = 0;
      $prev.classList.add('hidden');
      $next.classList.remove('hidden');
    } else if (slideIndex === $images.length - 1) {
      $next.classList.add('hidden');
    } else {
      $prev.classList.remove('hidden');
    }

    $image_container.style.left = `${slideIndex * -100}%`;
  }, 1500);
}

function stop() {
  clearInterval(intervalId);
}

// 이미지 슬라이드에 호버를 하면 이미지가 자동으로 움직이게 만든다.
$image_container.addEventListener('mouseenter', function () {
  start();
});

// 마우스를 거두면 멈춘다.
$image_container.addEventListener('mouseleave', function () {
  stop();
});
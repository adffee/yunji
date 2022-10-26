// 업그레이드 방향
// 컨테이너를 호버하면 이미지가 자동으로 넘어간다. 마지막 이미지가 되면 처음으로 되돌아간다.
// 호버를 하지 않을 시에는 멈춘다.
// 버튼은 여전히 기능을 해야한다.
// data-move-value 속성을 적극 활용해야한다.

// 피드백
// 1. 변수 초기화 하지 않고 다른 방법 강구
// 2. 버튼 로직 두 이벤트에서 사용할 수 있는 방법 강구

// 업그레이드 방향
// 이미지 넘어갈 때 사라지는 이미지는 오른쪽으로 사라지고(투명해짐)
// 나타나는 이미지는 왼쪽으로 나타남.(투명도 영향 없음.)

// 태그 불러오기
const $slide_container = document.getElementById('slide-container'),
  $image_container = $slide_container.querySelector('.image-container'),
  $images = $image_container.querySelectorAll('img'),
  [$prev, $next] = $slide_container.getElementsByTagName('a');

let slideIndex = 0, before = 0;

// 타이머 정의
function timer(delay) {
  let after = new Date();

  if (delay < (after - before)) {
    before = after;
    return true;
  }
}

// ==================== 이미지 자동 슬라이드 ====================
// 인터벌 멈추기 위한 식별자
let intervalId;

function slide() {
  const computedIndex = slideIndex % $images.length;
  $image_container.style.left = `${computedIndex * -100}%`;

  if (computedIndex === 0) {
    $prev.classList.add('hidden');
    $next.classList.remove('hidden');
  } else if (computedIndex === $images.length) {
    $next.classList.add('hidden');
  } else {
    $prev.classList.remove('hidden');
    $next.classList.remove('hidden');
  }
}

// 버튼 클릭시 1 혹은 -1 더함.
$slide_container.addEventListener('click', function (event) {
  const button = event.target.closest('a');

  if (timer(1000)) {
    if (this.contains(button)) {
      slideIndex += +button.dataset.moveValue;
      slide();
    }
  }
});

// 이미지 슬라이드에 호버를 하면 이미지가 자동으로 움직이게 만든다.
$image_container.addEventListener('mouseenter', function () {
  intervalId = setInterval(function () {
    slideIndex++;
    slide();
  }, 1500);
});

// 마우스를 거두면 멈춘다.
$image_container.addEventListener('mouseleave', function () {
  clearInterval(intervalId);
});

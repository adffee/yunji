// 스크롤이 페이지의 3분의 1이 되면 top 버튼이 생김
// top에 호버하면 투명도가 1이 되고 너비가 늘어남. 커서도 바뀜.
// top은 창 위치에 고정됨.
// top을 클릭하면 페이지 상단으로 천천히 올라감.

// 이번 코드 컨셉: CSS에서 호버 안하고 스크립트로 이벤트 걸어서 호버 효과내기

const $top = document.querySelector('.scrollTop');

// 스크롤 여부에 따라서 visible이 사라졌다가 생김.
window.addEventListener('scroll', function () {
  if (parseInt(scrollY) >= (innerHeight / 3)) {
    $top.classList.add('visible');
  } else {
    $top.classList.remove('visible');
  }
});

// 커서가 버튼 위로 올라가면 호버 효과
$top.addEventListener('mouseenter', function () {
  this.classList.add('hover');
});

// 커서가 버튼 위에서 사라지면 다시 원래대로
$top.addEventListener('mouseleave', function () {
  this.classList.remove('hover');
});

// 클릭하면 상단으로 올라가게 만듬.
$top.addEventListener('click', function () {
  let stop = setInterval(() => {
    window.scrollBy(scrollX, -10);

    if (parseInt(scrollY) <= 0) {
      clearInterval(stop);
    }
  }, 5);
});

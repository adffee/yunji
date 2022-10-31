/**
 * 1. 커서 올리면 자동 슬라이드
 * 2. 화살표 눌러도 슬라이드, 아래 버튼 눌러도 슬라이드
 * 3. 1~2는 같은 기능이므로 하나로 통일.
 * 4. 마지막 이미지에서 처음 이미지로 바로 넘어감.
 * 5. data-direction 사용하기
 */

// ==================== 노드 가져오기 ====================
const $main_container = document.querySelector('.main_container'),
    $slide_list = $main_container.querySelector('.slide_list'),
    [$prev, $next] = $main_container.querySelectorAll('a'),
    $pager = document.querySelector('.pager');

const prevMove = $prev.dataset.direction,
    nextMove = $next.dataset.direction;

let slideIndex = 0, beforeTime = 0;

const images = [
    './images/ssg1.jpg',
    './images/ssg2.jpg',
    './images/yooa.jpg',
];

function timer(delay) {
    let afterTime = new Date();

if (delay < (afterTime - beforeTime)) {
    beforeTime = afterTime;
    return true;
}
}

for (let i = 0; i < images.length; i++) {
    const $li = document.createElement('li');
    const $img = document.createElement('img');

    $img.src = images[i];
    $img.alt = images[i].replace('./images/', '').replace('.jpg', '');

    $li.appendChild($img);
    $slide_list.appendChild($li);
}

for (let i = 0; i < $slide_list.children.length; i++) {
    const pageButton = document.createElement('a');
    pageButton.classList.add('page-button');;
    pageButton.href = '#';

    $pager.appendChild(pageButton);
}

// ==================== 이벤트 ====================
$main_container.addEventListener('click', function (event) {
    const aTarget = event.target.closest('a');

    if (timer(1000)) {
        if (aTarget === $next) {
        slideIndex += +nextMove;

        $prev.classList.remove('hidden');
        if (slideIndex >= $slide_list.children.length - 1) {
            $next.classList.add('hidden');
        }
        } else if (aTarget === $prev) {
        slideIndex += +prevMove;

        $next.classList.remove('hidden');
        if (slideIndex <= 0) {
            $prev.classList.add('hidden');
        }
        } else {
        return;
        }
    }
});

$pager.addEventListener('mouseover', function (event) {
    if (event.target.hasAttribute('href')) {
    console.log(event.target);
    }
});

$pager.addEventListener('click', function (event) {
    console.log(event.target);
}); 
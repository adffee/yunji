// 업그레이드 방향
// 컨테이너를 호버하면 이미지가 자동으로 넘어간다. 마지막 이미지가 되면 처음으로 되돌아간다.
// 호버를 하지 않을 시에는 멈춘다.
// 버튼은 여전히 기능을 해야한다.


// 이미지는 화면 중앙.
// 둥글게
// 슬라이드 버튼 화살표 호버됨.
// 다음 이미지로 넘어가면 이전 이미지로 넘어가는 버튼 생김.
// 반대로 마지막 이미지가 되면 다음 이미지로 넘어가는 버튼 사라짐.

// 추가 사항
// 이미지 하나가 다 넘어가기 전에 이미지가 넘어가면 안된다.
// = 중복 클릭 방지.

const $slide_container = document.getElementById('slide-container'),
    $image_container = $slide_container.querySelector('.image-container'),
    $images = $image_container.querySelectorAll('img');
const a_button = $slide_container.getElementsByTagName('a');

let slideIndex = 0;
let before = 0;

$slide_container.addEventListener('click', function (event) {
    event.preventDefault();

    let after = new Date();
    const aTarget = event.target.closest('a');

    if (1000 < (after - before)) {          // 시간측정 실행여부 판별 로직 모듈화
        if (aTarget === a_button[0]) {
            slideIndex--;
        }

        if (aTarget === a_button[1]) {      // 불필요한 무조건 두번씩 비교
            slideIndex++;
        }

        /* 이하 버튼이 아닌 다른 요소가 클릭되었을 때 불필요한 실행 */
        $image_container.style.left = `-${slideIndex * 100}%`;
        before = after;

        if (slideIndex >= 1) {
            a_button[0].classList.remove('hidden');
        } else {
            a_button[0].classList.add('hidden');
        }

        if (slideIndex === $images.length - 1) {
            a_button[1].classList.add('hidden');
        } else {
            a_button[1].classList.remove('hidden');
        }
    }
});
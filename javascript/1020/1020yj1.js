const $slide_container = document.getElementById('slide-container'),
  $image_container = $slide_container.querySelector('.image-container'),
  $images = $slide_container.querySelectorAll('img');
const [$prev, $next] = $slide_container.querySelectorAll('button>img');

let slideIndex = 0;

$slide_container.addEventListener('click', function (event) {
  if (event.target === $prev) {
    slideIndex--;
    $image_container.style.left = `-${slideIndex * 100}%`;
  }

  if (event.target === $next) {
    slideIndex++;
    $image_container.style.left = `-${slideIndex * 100}%`;
  }

  if (slideIndex >= 1) {
    $prev.classList.remove('hidden');
  } else {
    $prev.classList.add('hidden');
  }

  if (slideIndex === $images.length - 1) {
    $next.classList.add('hidden');
  } else {
    $next.classList.remove('hidden');
  }
});
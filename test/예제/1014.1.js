'use strict';

const img = document.querySelector('img');
const nationBox = document.getElementsByClassName('nationBox');

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

nationBox[0].classList.add('active');

for (let i = 0; i < nationBox.length; i++){
    nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < nationBox.length; j++){
            if (i == j) {
                img.src = `../../image/images/${images[i]}`;
                this.classList.add('active');
            } else {
                nationBox[j].classList.remove('active');
            }
        }
    });
}

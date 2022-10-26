'use strict';

const header = document.querySelector('.header'),
    btn = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforebtn = btn[0],
    beforeHref;

function setMain() {
    main.style.marginTop = header.offsetHeight + 'px'; 
}
function viewContent(self) {
    contents.querySelector(beforebtn.getAttribute('href')).style.display = 'none';
    contents.querySelector(this.getAttribute('href')).style.display = 'block';

}

viewContent(beforebtn);
setMain();

for (let i = 0; i < btn.length;i++){
    btn[i].addEventListener('click', function () {
        beforebtn.classList.remove('selected');
        this.classList.add('selected');
        
        viewContent(this);

        setMain();
        beforebtn = this;
    });
}

window.addEventListener('resize', setMain);


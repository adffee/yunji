'use strict';

const data = [
    {
        name: '임윤지',
        adress: '경기도 성남시 분당구 판교원로 82번길',
        phone: 01027769587,
        etc:'',
    }
];


const orderinfo = document.querySelector('.info-block');

for (let i = 0; i < data.length; i++){
    
    let infodiv = document.createElement('div');
    let nametdiv = document.createElement('div');
    let namediv = document.createElement('div');
    let emailtdiv = document.createElement('div');
    let emaildiv = document.createElement('div');
    let phonetdiv = document.createElement('div');
    let phonediv = document.createElement('div');

    infotdiv.classList.add('item-box');

////////
    nametdiv.classList.add('line-title');
    namediv.classList.add('line-content');

    namediv.textContent = data[i].name;
//////////
    emailtdiv.classList.add('line-title');
    emaildiv.classList.add('line-content');

    emaildiv.textContent = data[i].amount;
///////////
    phonetdiv.classList.add('line-title');
    phonediv.classList.add('line-content');

    phonediv.textContent = data[i].price;


///////////////////
    nametdiv.appendChild(namediv);
    emailtdiv.appendChild(emaildiv);
    phonetdiv.appendChild(phonediv);

    infodiv.appendChild(nametdiv);
    infodiv.appendChild(emailtdiv);
    infodiv.appendChild(phonetdiv);

    orderlist.appendChild(infodiv);
}



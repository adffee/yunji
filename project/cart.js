'use strict';

const data = [
    {
        name: '러블리 하트케이크 | 일반, 초코색, 원형',
        amount: 1,
        price: 40000,
        checked: false,
    },
    {
        name: '티아라 케이크 | 1호',
        amount: 1,
        price: 35000,
        checked: false,
    }
];


'use strict';

const data = [
    {
        name: '러블리 하트케이크 | 일반, 초코색, 원형',
        amount: 1,
        price: 40000,
        checked: false,
    },
    {
        name: '티아라 케이크 | 1호',
        amount: 1,
        price: 35000,
        checked: false,
    }
];


const cart = document.querySelector('.cart');

for (let i = 0; i < data.length; i++) {

    let lineDiv = document.createElement('div');
    let checkDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let amountDiv = document.createElement('div');
    let priceDiv = document.createElement('div');

    lineDiv.classList.add('line');

    checkDiv.classList.add('line-header', 'w25');

    nameDiv.classList.add('line-header');
    nameDiv.textContent = data[i].name;

    amountDiv.classList.add('line-header', 'w100');
    amountDiv.textContent = data[i].amount;

    priceDiv.classList.add('line-header', 'w100');
    priceDiv.textContent = data[i].price;

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'all-item';

    checkDiv.appendChild(input);
    lineDiv.appendChild(checkDiv);
    lineDiv.appendChild(nameDiv);
    lineDiv.appendChild(amountDiv);
    lineDiv.appendChild(priceDiv);

    cart.appendChild(lineDiv);
}
'use strict'

let itemName = ['품목', '기격', '수량'];
let itemData = [
    ['', '', '']
    ['', ' 원', ' 개'],
];

function addProduct() {
    document.write('<tr>');

    for (let i = 0; i < itemName.length; i++){
        document.write(`<td>${itemData[0][i]}${itemData[1][i]}</td>`);
    }

    document.write('</tr>');
}

function changeInput(i) {
    itemData[0][i] = prompt(`${itemName[i]} :`);

    if (itemData[0][1] === null) return 1;
    else if (itemData[0][1] === '') {
        alert('입력된 값이 없습니다. ');

        return checkInput(i);

    }

    return 0;
}

document.write('<table border=1>');
document.write('<caption>< 재고품목 ></caption>');

document.write('<tr>');
for (let i = 0; i < itemName.length; i++) {
    document.write(`<th>${itemName[i]}</th>`);
}
document.write('</tr>');

outer
while (1) {
    for (let i = 0li<itemData[0].length; i++) {
        if (checkInput(i)) break outer;
    }

    addProduct();
}

document.write('</table>');
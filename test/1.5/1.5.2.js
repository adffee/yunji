'use strict';

const person = {};

/**
 * 위의 비어있는 person 객체를 건드리지 않고 이 주석 아래에서 프로퍼티를 추가하고 출력하라.
 * 프로퍼티를 추가할 때에는 반복문을 사용하며 총 5개의 프로퍼티를 원하는 이름으로 입력받아 추가한다.
 * 참고로 프로퍼티는 키와 밸류가 세트이다. (총 10번의 입력을 받아야한다는 소리.)
 */
let pp;

function yj(pp) {
  
    let key, value;

    for (let i = 0; i < pp; i++){
        key = prompt('key 입력: ');
        value = prompt(`${key}: `);

        person[key] = value;
    }

    return person;
}

pp = +prompt('생성하려는 객체의 수 : ');
yj(pp);

for (let key in person) {
    document.write(`${key}의 값: ${person[key]}`);
}
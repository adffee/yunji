/**
 * 옆집 꼬맹이가 당신에게 숫자가 적힌 구슬을 상자에 잔뜩 담아서 선물로 줬다.
 * 상자를 숫자가 담긴 배열이라고 생각했을 때 숫자 6의 개수를 구해라.
 *
 * 배열을 문자열로 만드는 메소드 join()를 이용하라. 괄호에는 구분자가 들어간다.
 * split() 메소드가 구분자를 기준 삼아 제외하고 쪼개준다면
 * join()은 구분자를 '포함해서' 합쳐줌.
 */

'use strict';

// const box = [6, 66, 16, 62, 64, 26, 60,];

// let v;
// let s = 0;
// v = box.join('');
// console.log(v)

// for (let i = 0; i < v.length; i++) {
//     if (v[i] === '6') {
//         ++s;
//     }
// }
// console.log(s);


///수진이 코드

// let v = 0;
// const box = [ 6, 66, 16, 62, 64, 26, 60, ];
// const array = [ , ];
// // 음.. box.join('')이거를 box에 저장하고 index 돌릴려고 했는데 저장안됨
// // 숫자 카운팅을 6찾는 수에 맞춰 카운팅하게 v를 넣고, v 출력해야 하니깡 외부에 변수선언함.
// for(let i = 0, sub = 0; ;) {
//     sub = box.join('').indexOf('6', i);
//     if(sub == -1) break;
//     v++;
//     i = sub + 1;
// }
// console.log(v);

const box = [6, 66, 16, 62, 64, 26, 60,];
const joinBox = box.join('');
let v = 0;

for (let i = 0; i < joinBox.length; i++) {
    if (joinBox[i] === '6') {
        v++;
    }
}
console.log(v);

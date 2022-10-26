/**
 * 1분동안 초를 세는 프로그램을 만들려고 한다. setTimeout을 이용해 1분까지만 세는 프로그램을 구현하라.
 * 시간은 콘솔을 통해서 출력한다.
 */

// 'use strict';

// // timer(60);


// for (let i = 0; i <= 60; i++){
//     setTimeout(
//         () => document.write(`${i + "<br>"}`),
//         1000 * i
//     )
// }

// //태현이 코드 

'use strict';

// function timer(time) {
// for (let second = 0; second <= time; second++) {
//     setTimeout(function () {
//     console.log(second);
//     }, 1000 * second);
// }
// }

// timer(60);


function timer(time) {
    for (let i = 0; i <= time; i++) {
        setTimeout(function () {
        console.log(i);
        }, 1000 * i);
    }
}

timer(60);
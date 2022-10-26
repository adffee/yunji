/**
 * 1분동안 초를 세는 프로그램을 만들려고 한다.
 * setInterval을 이용해 0초부터 시작해서 1분까지만 세는 프로그램을 구현하라.
 * setInterval은 timer 함수를 선언한 뒤 그 안에서 실행하도록 구성하라.
 * 60초를 초과하면 프로그램이 멈추도록 구성하라.
 */

'use strict';


// function timer(time) {
//     for (let i = 0; i <= time; i++){
//         setInterval(() => {
//             document.write(`${i + "<br>"}`);
//         }, 1000 * i);
//     }
//     setTimeout(() => clearInterval(), 60000);
// }

// timer(60);


function timer(time) {
    setInterval(() => {
        for (let i = 0; i <= time; i++) {
            document.write(`${i + "<br>"}`);
        } 
    }, 1000);
}

setInterval(() => clearInterval(), 60000);
timer(60);


'use strict';

function timer(time) {
    let second = 0;
    let stopInterval = setInterval(function () {
    console.log(second++);

    if (second > time) {
        clearInterval(stopInterval);
    }
    }, 1000);
}

timer(60);
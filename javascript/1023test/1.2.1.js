'use strict';

/**
 * setTimeout을 통해서 time 변수만큼의 시간 뒤에 handler 함수를 실행시키고 싶다.
 * 
 * handler 함수와 time 변수는 이 주석 하단에 직접 선언하고 내용을 작성하도록 한다.
 * 
 * handler 함수 내에서는 time 변수에 2를 곱하는 내용이 들어있다.
 * 
 * setTimeout은 이 주석 아래에 작성하며 4초 뒤에 실행되어야한다.
 * 
 * handler 함수 내에 console.log를 통해 결과값을 출력한다.
 */




// setTimeout(() => document.write('setTimeout 함수 ' + '<br>'), 4000);


// for (let i = 4; i < time.lenght; i++){
//     setTimeout(
//         () => document.write(`${i + "<br>"}`),
//         1000*i
//         )
// }
    
//     setTimeout(handler, time);


////태현이 코드 
'use strict';

let time = 4000;
const handler = () => {
  console.log(time *= 2);
};

setTimeout(handler, time);



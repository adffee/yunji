/* 
    < 이메일 주소와 개인 전화번호를 이용한 비밀번호 생성 >

step1 : 이메일 주소의 "@" 직전의 두 글자.                           =>      58
step2 : 이메일 주소의 "." 직전까지의 전체 문자열 크기.               =>      15
step3 : 개인 전화번호의 두 번째 "-" 문자 이후 두 개 숫자.            =>      56

password : 이메일 주소의 두 번째와 세 번째 문자 + step1 + step2 + step3

※ 단, 이메일 주소의 두 번째 문자가 문자형태이면 그 값 그대로를
   결합하고 숫자타입이면 "@" 문자 다음의 첫 글자를 이용하여 결합.

< 예시 >

psy7758@hanmail.net     =>      sy581556

k1234@naver.com         =>      n2341156

*/

'use strict';



///선생님 답안
'use strict';

// let email = 'psy7758@naver.com';
let email = 'kf1234@naver.com';
let phoneNum = '010-1234-5678';
let step1, step2, step3;
let password;

step1 = email.split('@')[0].slice(-2);
console.log(step1);

step2 = email.split('.')[0].length;
console.log(step2);

step3 = phoneNum.split('-')[2].slice(0, 2);
console.log(step3);

password = `${isNaN(email[1]) ? email.slice(1, 3) : email.split('@')[1][0] + email[2]}${step1 + step2 + step3}`
console.log(password);
/////////////////////
// let step1, step2, step3;
// const email = 'yoonji105@naver.com';
// const phone = '010-2776-9587';

// step1 = email.split('@')[0].slice(-2);
// console.log(step1);

// step2 = email.split('.')[0].length;
// console.log(step2);

// step3 = phone.split('-')[2].slice(0, 2);
// console.log(step3);

// console.log(`${email.slice(1, 3)}${step1 + step2 + step3}`);

// ////////////////
// let step1, step2, step3, prefix;

// const email = 'yoonji105@naver.com';
// const phone = '010-2776-9587';

// step1 = email.split('@')[0].slice(-2);
// console.log(step1);

// step2 = email.split('.')[0].length;
// console.log(step2);

// step3 = phone.split('-')[2].slice(0, 2);
// console.log(step3);

// prefix = isNaN(+email.slice(1, 2))
//   ? email.slice(1, 3)
//   : email.split('@')[1].slice(0, 1);

// console.log(`${prefix}${step1 + step2 + step3}`);

// ///////일단 입력 받지 않는 경우 완성
// let step1, step2, step3;
// let password;

// let email = 'psy7758@hanmail.net';
// let phoneNum = '010-2212-9155';

// //step1 구하기
// step1 = email.indexOf('@');
// step1 = email.slice(step1 - 2, step1);
// console.log(step1);

// //step2 구하기
// step2 = email.split('.')[0];
// step2 = step2.length;
// console.log(step2);

// //step3 구하기
// step3 = phoneNum.lastIndexOf('-');
// step3 = phoneNum.slice(step3 + 1, step3 + 3);
// console.log(step3);

// password = email.slice(1, 3) + step1 + step2 + step3;
// console.log(password);



// /////입력 받는 버전
// let step1, step2, step3;
// let password;

// let email = prompt('이메일입력:');
// let phoneNum = prompt('번호입력');

// step1 = email.indexOf('@');
// step1 = email.slice(step1 - 2, step1);

// // step1 = email.split('@')[0].slice(-2)
// console.log(step1);

// step2 = email.split('.')[0].length;

// step3 = phoneNum.lastIndexOf('-');
// step3 = phoneNum.slice(step3 + 1, step3 + 3);

// // alert(`${isNaN(email[1]) ? email.slice(1, 3) : (email[step1 + 1] + email[2])}${step1}${step2}${step3}`);- > [step1 + 1]에서 문자가 들어있어서 X


// alert(`${(isNaN(+email[1])) ? email.slice(1, 3) : email.split('@')[1].slice(0, 1) + email[2]}${step1}${step2}${step3}`);

// //////

// let email = 'yoonji105@naver.com';
// let phone = '010-2776-9587';
// let step1, step2, step3;
// let password;



// step1 = email.split('@')[0].slice(-2);
// console.log(step1);

// step2 = email.split('.')[0].length;
// console.log(step2);

// step3 = phone.split('-')[2].slice(0, 2);
// console.log(step3);

// password = `${isNaN(email[1]) ? email.slice(1, 3) : email.split('@')[1][0]}`


// 'use strict';

// // let email = 'psy7755@hanmail.net';
// let email = 'k1234@naver.com';

// let phoneNum = '010-1234-5678';
// let step1, step2, step3;
// let password;

// step1 = email.split('@')[0].slice(-2);

// step2 = email.split('.')[0].length;

// step3 = phoneNum.split('-')[2].slice(0.2);

// password = `${isNaN(email[1]) ? email.slice(1, 3) : email.split('@')[1][0] + email[2]}${step1 + step2 + step3}`;
// console.log(password)
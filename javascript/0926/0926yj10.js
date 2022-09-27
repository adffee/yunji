// 'use strict';

// let sum = 0;

// while (1) {
//     let value = prompt('숫자를 입력하세요.');

//     if (value == 0) break;

//     sum += value;

// alert('합계: ' + sum)


// let sum = 0;

// while(true) {
//     let value = prompt('숫자를 입력하세요.' '');
//     if (value === 0) break;

//     sum +=value;
// }
// alert('합계: ' + sum);

// let sum = 0;

// while(true) {
//     let value = +prompt('숫자를 입력하세요.');

//     if(!value) break;

//     sum += value;
// }
// alert('합계: ' + sum)


'use strict';

// let sum = 0;

// while (1) {        // C언어와 같이 0으로 평가되는 falsy값이 아닌 모든 값을 truthy값으로 평가.
//     let value = prompt("숫자를 입력하세요.");

//     if (value == 0) break;   // == (equal) : 피연산자들의 값만 비교. 단, 숫자형태의 문자열은 다른 숫자 타입의 값과
//     //                       //              비교시 숫자 타입으로 형변환되어 비교. 따라서 입력된 문자열 '0'과 '확인'
//     sum += value;            //              버튼을 눌렀을 때 반환되는 빈 문자열 ('')은 모두 숫자 0으로 변환되어 비교.
//     //                       //              단,원시값 중 빈 문자열('')과 false 만 추상 동등 비교(==) 시 0 으로 변환되어
//     //                       //              평가.
//     //                       //              숫자 형태의 문자열과 숫자 형태가 아닌 모든 문자열은 복합 대입 연산자에
//     //                       //              의해 문자열 결합 연산 처리되는 것을 확인 가능.
// }
// alert('합계: ' + sum);


// let sum = 0;

// while (true) {

//   let value = prompt("숫자를 입력하세요.", '');

//   if (value === 0) break;     // === (strict equal) : 피연산자들의 값뿐만 아니라, 타입까지 포함하여 비교. 따라서 이 때에는
//   sum += value;               //                      숫자 형태의 문자열이더라도 다른 숫자 타입과 비교시 형변환이 되지 않아
//   //                          //                      무한루프 탈출 불가.

// }
// alert('합계: ' + sum);


let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.");      // 문자열 타입을 숫자 타입으로 변환하기 위한 부호 연산자(+).

  if (!value) break;      // 입력된 값이 0 이나 입력없이 '확인' 또는 '취소' 버튼을 눌렀을 때 반환되는 빈 문자열
  sum += value;           // ('') 또는 null일 때의 무한루프 탈출 처리를 위한 부정(!) 평가.
  //                      // 입력된 값이 숫자 형태가 아닌 문자열인 경우에도 부호 연산자(+)에 의해 NaN값 반환.
  //                      // js에서는 논리 평가시 0, null, '', NaN, undefined 등의 값들을 falsy값으로 평가.
}
alert('합계: ' + sum);
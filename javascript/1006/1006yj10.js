/*
  < 문제 >

- 고객명과 나이, 연락처를 입력받아 아래의 조건에 맞추어 확인이 가능한 프로그램 구현.

----------------------------------------------------------------------------------------------------------------

  < 조건 >

1) 고객명, 나이, 연락처 입력 시 정보가 입력되지 않거나 "취소" 버튼을 누르면 "미입력" 이라는 문자열
   정보가 저장되도록 프로그램 구현.
2) 고객명, 나이, 연락처가 모두 정상적으로 입력된 것이 확인되면 아래 < 예시 > 와 같이 고객 정보를 보여주고
   "확인" 버튼을 누르면 "정보 확인에 감사드립니다. ^^" 문구가 대화상자 형태로 표시되도록 구현.
   "취소" 버튼을 누르면 "차후에 다시 정확한 정보 입력을 부탁드립니다." 문구가 대화상자 형태로 표시되도록
   프로그램 구현.

   < 예시 >

   고객명 : 박성연      나이 : 22       연락처 : 010-1234-5678
   
   입력하신 고객명은 박성연님 이고 나이는 22세, 연락처는 010-1234-5678 입니다. 맞습니까?

3) 고객명, 나이, 연락처 정보 중에 상기 1) 의 조건에 의해 어느 하나라도 "미입력" 문자열 정보가 저장되는
   경우에는 "고객명, 나이, 연락처가 모두 입력되어야 합니다." 라는 형태로 대화상자가 표시되도록 구현.
   
*/

'use strict'

let name1, age, phone, value, none;

none = '미입력';
name1 = prompt('고객명: ') || none;
age = prompt('나이: ') || none;
phone = prompt('연락처: ') || none;

// value = name1 && age && phone;

console.log('cond >> ', cond);
console.log(hostName, age, phone);

if (name1 === none || age === none || phone === none) {
    alert('고객명, 나이, 연락처가 모두 입력되어야 합니다.');
    } else {
    if (confirm(`입력하신 고객명은 ${name1}님이고 나이는 ${age}세, 연락처는 ${phone}입니다. 맞습니까?`)) {
        alert('정보 확인에 감사드립니다.');
    } else {
        alert('차후에 정확한 정보 입력을 부탁드립니다.');
    }
}
    
/////////2222
// if (value) {
//     if (confirm(`입력하신 고객명은 ${name1}이고 나이는 ${age}세, 연락처는 ${phone}입니다. 맞습니까?`)) {
//         alert('정보 확인에 감사드립니다. ^^')
//     } else {
//         alert('차후에 다시 정확한 정보를 입력 부탁드립니다. ')
//     }
// } else {
//     alert('고객명, 나이, 연락처가 모두 입력되어야 합니다. ')
// }

/////333333
if (!(hostName === none || age === none || phone === none)) {
    // true
    } else {
    // false
    }
    
    if (hostName !== none && age !== none && phone !== none) {
    // true
    } else {
    // false
}
    
////선생님꺼 


'use strict';

let clientName;
let age;
let phoneNum;
let defaultData = '미입력';

clientName = prompt('고객명 : ');
age = prompt('나이 : ');
phoneNum = prompt('연락처 : ');

if (!clientName) {
    clientName = defaultData;
}

if (!age) {
    age = defaultData;
}

if (!phoneNum) {
    phoneNum = defaultData;
}

if (clientName === defaultData || age === defaultData || phoneNum === defaultData) {
    alert('고객명, 나이, 연락처가 모두 입력되어야 합니다.');
} else {
    if (confirm(`입력하신 고객명은 ${clientName}님 이고 나이는 ${age}세, 연락처는 ${phoneNum} 입니다. 맞습니까?`)) {
        alert('정보 확인에 감사드립니다. ^^');
    } else {
        alert('차후에 다시 정확한 정보 입력을 부탁드립니다.');
    }
}

/* ================================================================================================================ */
let clientName;
let age;
let phoneNum;
let defaultData = '미입력';

clientName = prompt('고객명 : ') || defaultData;     // or의 단락평가 성질을 활용한 디폴트값 초기화. prompt함수의
age = prompt('나이 : ') || defaultData;              // 디폴트값을 활용 시에는 "취소" 버튼을 눌렀을 때 지정된
phoneNum = prompt('연락처 : ') || defaultData;       // 디폴트값이 아닌 null값이 반환됨에 주의.

if (clientName != defaultData && age != defaultData && phoneNum != defaultData) {
    if (confirm(`입력하신 고객명은 ${clientName}님 이고 나이는 ${age}세, 연락처는 ${phoneNum} 입니다. 맞습니까?`)) {
    alert('정보 확인에 감사드립니다. ^^');
    } else {
    alert('차후에 다시 정확한 정보 입력을 부탁드립니다.');
    }
} else {
    alert('고객명, 나이, 연락처가 모두 입력되어야 합니다.');
}
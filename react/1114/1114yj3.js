export default function GridstaffList({ staffData }) {
    let createStaffList = [];

    for (let i = 0; i < staffData.length; i++) {
        createStaffList[i] = <div key={`staffList${i}`}>{staffData[i]}</div>;
    }

    return (
        <div>
            {createStaffList}
        </div>
    );
}


/*
    JSX 는 DOM 요소를 표현하기 위한 특수한 형태의 객체로 하기와 같은 결합은 단순한
    JSX 객체 간의 문자열 형태의 결합 결과 확인 가능.
*/
// export default function GridstaffList({ staffData }) {
//     let createStaffList = '';

//     for (let i = 0; i < staffData.length; i++) {
//         createStaffList += <div key={`staffList${i}`}>{staffData[i]}</div>;

//     }

//     return (
//         <div>
//             {createStaffList}
//         </div>
//     );
// }

import { useState } from 'react';
import GridstaffList from './subModule/GridstaffList';

/* 
    ※ 컴포넌트의 설계는 모듈화 원칙에 의거하여 주 데이터를 항상 상위 모듈에서 관리하고
       하위 모듈에서는 그 데이터를 기반으로 실제 구현만 하는 구조적 이해가 필요.
       즉, 주 데이터를 하위에서 관리 및 저장하는 것은 설계원칙에도 부합되지 않고 구현상
       에서도 실제 문제가 발생함에 주의.
*/
function App() {
    const [staffName, setStaffName] = useState(''),         // 입력 직원명.
        [staffData, setstaffData] = useState([]);   // 등록 직원명 배열.

    function inputStaffName(e) {            // 입력된 직원명을 저장하는 함수.
        setStaffName(e.target.value);
    }

    /* 
        입력된 직원명을 배열에 저장하고 입력 변수를 초기화하는 함수.
    */
    function registerStaffName() {
        if (staffName) {                             // 입력없이 빈 등록 버튼을 클릭하는 경우 빈 문자열이
            setstaffData([...staffData, staffName]); // 배열에 저장되므로 렌더링시에는 추가 되지 않아
            setStaffName('');                        // 문제가 없지만, 배열의 크기가 필요없이 확대되므로
            // 이에 대한 방어 코드 필요.
        }
    }

    return (
        <>
            <div style={{ marginBottom: '20px' }}>&lt; 직원 명단&gt;</div>
            <GridstaffList staffData={staffData} />
            <input
                type="text"
                value={staffName}
                onChange={inputStaffName} />
            <button
                style={{ marginTop: '20px' }}
                onClick={registerStaffName}>
                명단추가
            </button>
        </>
    );
}

export default App;'use strict';

let ar1 = [1, 2, 3, 4, 5];

/*
    < fill >

- 배열의 요소들을 인수값으로 초기화한 원본 배열 반환.
  초기화한 새로운 배열이 아닌 원본 배열 자체를 초기화함에 주의.
  offset 설정이 가능하며 end 인덱스는 포함되지 않아 end 직전까지만 지정.

형식    :   Array<any>.fill(value: any, start?: number | undefined, end?: number | undefined): any[]

*/
let ar2 = ar1.fill(5);

console.log(ar1);
console.log(ar2);
console.log();

ar2[0] = 7;

console.log(ar1);
console.log(ar2);
console.log();

/* ================================================================================================ */

ar1.fill(0, 1, 3);      // end 인덱스 직전까지 초기화.
console.log(ar1);
console.log('======================');

/* ================================================================================================ */

/* 
    < forEach 와 map 의 특성 >

- forEach, map 메서드는 크기가 할당되더라도 초기화되지 않은 상태에서는 자동 순회되지 않으며,
  콜백함수에 익명함수나 람다식 적용시 this 는 적용되지 않음. ( undefined 반환 )
*/

let ar3 = new Array(5);

ar3.forEach((v, i) => console.log(i));  // 배열의 크기가 할당되더라도 초기화되지 않아
//                                      // 배열 순회가 되지 않음을 확인 가능.

ar3.fill(0).forEach((v, i) => console.log(i));
console.log();

ar3.forEach(function () {   // forEach 메서드의 악명객체 내에서의 this 는 undefined 반환.
    console.log(this);
});
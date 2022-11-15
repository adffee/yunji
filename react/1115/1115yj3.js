export default function StudentList({ studentInfo }) {
    return (
        <>
            {studentInfo.map(e =>
                <div key={e.stNum}>{e.stName}</div>
            )}
        </>
    );
}

///

import { useRef, useState } from 'react';
import StudentList from './subModule/StudentList';

export default function App() {
    const [studentInfo, setStudentInfo] = useState(         // 학생정보 배열.
        [
            {
                stNum: 'st_' + 1,
                stName: '박성연',
            },
            {
                stNum: 'st_' + 2,
                stName: '홍길동',
            },
        ]
    );

    const [inputValue, setInputValue] = useState(''),       // 입력상자 상태값.
        inputBox = useRef(),          // 입력상자의 참조를 위한 useRef.

        /* 
            < 리렌더링이 전제되지 않는 상태값 - useRef >

        - useRef 함수의 인수에 초기값을 할당하고 이를 참조하는 변수를 설정함으로써,
          해당 변수가 가지고 있는 참조를 통한 current 프로퍼티 접근을 통해 상태값의
          변경이 가능하며 이는 해당 컴포넌트를 리렌더링하지 않는 특성.
          따라서 렌더링 상황에 영향을 주지않는 컴포넌트 내부 데이터를 관리함에 유용.

        */
        stNum = useRef(3);

    /* =========================================================== */

    function onChangeInput(e) {             // 입력상자 변화 감지를 통한 inputValue 업데이트.
        setInputValue(e.target.value);
    }

    /* 
        "등록" 버튼을 클릭했을 때 inputValue 에 값이 존재하는 경우에만,
        일련번호 형태의 학번과 학생명을 가진 임시 객체를 학생정보 배열에
        업데이트하여 추가.
    */
    function regidentSt() {
        if (inputValue) {
            const addSt = {
                stNum: 'st_' + stNum.current,
                stName: inputValue,
            }

            setStudentInfo([...studentInfo, addSt]);        // 전개구문을 활용한 배열 업데이트.
            // setStudentInfo(studentInfo.concat(addSt));   // concat 메서드를 활용한 배열 업데이트

            stNum.current++;        // useRef 로 참조된 변수는 current 프로퍼티를 이용해 참조 및
            //                      // 변경 가능. 이는 리렌더링이 필요치 않거나 직접 영향을 주지
            //                      // 않는 컴포넌트 내부 변경정보를 관리함에 유용.

            setInputValue('');
        }

        inputBox.current.focus();   // "등록" 버튼을 클릭 후에는 입력상자로 다시 포커스 조정.
    }

    /* =========================================================== */

    function testUseRef() {     // useRef 상태값에 변화에 따른 리렌더링 여부를 측정하기 위한 함수.
        stNum.current++;
    }

    console.log(stNum.current); // testUseRef 함수 호출에 따를 useRef 상태값(stNum)의 변화에도
    //                          // 리렌더링이 되지 않는 것을 확인 가능.

    return (
        <>
            <input
                name='inputBox'
                type="text" value={inputValue}
                onChange={onChangeInput}
                ref={inputBox}
            />
            <button onClick={regidentSt}>등록</button>
            <button onClick={testUseRef}>useRef 테스트</button>
            <StudentList studentInfo={studentInfo} />
        </>
    );
}
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
    ),
        [inputValue, setInputValue] = useState(''),       // 입력상자 상태값.
        inputBox = useRef(),          // 입력상자의 참조를 위한 useRef.
        stNum = useRef(3);

    /* =========================================================== */

    function onChangeInput(e) {             // 입력상자 변화 감지를 통한 inputValue 업데이트.
        setInputValue(e.target.value);
    }

    function regidentSt() {
        if (inputValue) {
            const addSt = {
                stNum: 'st_' + stNum.current,
                stName: inputValue,
            }

            setStudentInfo([...studentInfo, addSt]);
            stNum.current++;
            setInputValue('');
        }

        inputBox.current.focus();
    }

    /* 
        filter 메서드를 이용하여 클릭이벤트가 발생한 요소의 학생번호가 아닌
        요소만 추출한 새로운 배열로 학생정보배열(studentInfo)을 업데이트함
        으로써 해당 요소가 삭제되는 효과.
    */
    function removeSt(stNum) {
        setStudentInfo(studentInfo.filter((st) => st.stNum !== stNum));
    }

    return (
        <>
            <input
                name='inputBox'
                type="text" value={inputValue}
                onChange={onChangeInput}
                ref={inputBox}
            />
            <button onClick={regidentSt}>등록</button>
            <StudentList studentInfo={studentInfo} removeSt={removeSt} />
        </>
    );
}


////

export default function StudentList({ studentInfo, removeSt }) {
    function revokeRegident(stNum) {
        removeSt(stNum);
    }

    return (
        <>
            {/* 
                map 메서드 람다식의 JSX 요소들이 하나의 부모로 둘러싸여 있어 요소 하나로
                간주됨으로써, 블럭{} 없이도 명시적 리턴이 필요치 않음.
            */}
            {studentInfo.map(e =>
                <div key={e.stNum}>
                    {e.stName}

                    {/* 
                        이벤트에 직접 함수를 호출하는 형태는 불가하므로 이와같이 익명객체를
                        생성하여 참조를 전달하되 그 내부에서 함수를 호출하는 형식을 취함.
                    */}
                    <button onClick={() => revokeRegident(e.stNum)}>등록취소</button>
                </div>
            )}
        </>
    );
}
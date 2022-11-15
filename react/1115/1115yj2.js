import PersonalInfo from "./PersonalInfo";

function App() {
    return (
        <PersonalInfo />
    );
}

export default App;


///


import { useRef } from 'react';

/* 
    < 컴포넌트 내 요소의 참조 >

- useRef 함수를 이용하여 컴포넌트 내 요소의 참조를 담을 수 있는
  변수를 선언후, 참조를 받기 위한 요소의 ref 프로퍼티에 그 변수를
  지정함으로써 해당 변수를 통한 요소의 참조 반환.
  단, 해당 요소의 참조를 통해 직접 js 적용은 불가하며, 반환받은 참조를
  통해 current 속성을 얻어야만 해당 요소에 대한 js 적용 가능.
  
※ useRef 함수를 통해 할당 가능한 대상은 단일 변수만 가능함에 주의.
   구조분해할당이나 루프를 통한 배열 요소에는 할당 불가.
*/
function PersonalInfo() {
    const inputName = useRef(),
        inputPhoneNum = useRef();

    function registeredName() {
        inputName.current.disabled = true;
        inputPhoneNum.current.focus();
    }

    function registeredPhoneNum() {
        inputPhoneNum.current.disabled = true;
    }

    return (
        <>
            <div>
                <label>
                    이름
                    <input type="text" ref={inputName} />
                </label>
                <button onClick={registeredName}>등록</button>
            </div>

            <div>
                <label>
                    전화번호
                    <input type="text" ref={inputPhoneNum} />
                </label>
                <button onClick={registeredPhoneNum}>등록</button>
            </div>
        </>
    );
}

export default PersonalInfo;

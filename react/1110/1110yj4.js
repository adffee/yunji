import InputClient from "./InputClient";

function App() {
    return (
        <InputClient />
    );
}

export default App;


import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),   // 입력값.
        [clientName, setclientName] = useState('');          // 입력 확인을 했을 때의 출력값.

    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    function confirm() {
        setclientName(inputValue);
    }

    /*
        < "다시입력" onClick 이벤트 >

    - "다시입력" 버튼을 클릭했을 때 입력값 변수(inpuValue)에 빈 문자열 할당.
      하기의 이벤트 처리로 입력상태값(inputValue)은 초기화 되어 출력상태값(clientName)에
      전달함으로써 "확인완료" 버튼을 클리했을 때 빈 문자열로 변환되어 출력되는 것을 확인
      가능.
      하지만 입력상태값에만 초기화된 것 뿐이지 input 상자는 초기화되지 않아 값이 그대로
      남아 있는 것을 확인 가능.
    */
    function tryagain() {
        setInputValue('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            onChange={onChangeInput}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}


//// 다시입력 되게 하기 
import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),   // 입력값.
        [clientName, setclientName] = useState('');          // 입력 확인을 했을 때의 출력값.

    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    function confirm() {
        setclientName(inputValue);
    }

    function tryagain() {
        setInputValue('');
    }
    /*
        < "다시입력" onClick 이벤트 >

    - "다시입력" 버튼을 클릭했을 때 입력값 변수(inpuValue)에 빈 문자열 할당.
      하기의 이벤트 처리로 입력상태값(inputValue)은 초기화 되어 출력상태값(clientName)에
      전달함으로써 "확인완료" 버튼을 클리했을 때 빈 문자열로 변환되어 출력되는 것을 확인
      가능.
      하지만 입력상태값에만 초기화된 것 뿐이지 input 상자는 초기화되지 않아 값이 그대로
      남아 있는 것을 확인 가능.
    */
    function tryagain() {
        setInputValue('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            onChange={onChangeInput}
                            value={inputValue}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}



///이렇게 하지마 
import { useState } from "react";

export default function InputClient() {
    const
        [clientName, setclientName] = useState('');   // 입력값.
    let inputValue;

    function onChangeInput(e) {
        inputValue= (e.target.value);
    }

    function confirm() {
        setclientName(inputValue);
    }

    function tryagain() {
        inputValue=('');
    }
    /*
        < "다시입력" onClick 이벤트 >

    - "다시입력" 버튼을 클릭했을 때 입력값 변수(inpuValue)에 빈 문자열 할당.
      하기의 이벤트 처리로 입력상태값(inputValue)은 초기화 되어 출력상태값(clientName)에
      전달함으로써 "확인완료" 버튼을 클리했을 때 빈 문자열로 변환되어 출력되는 것을 확인
      가능.
      하지만 입력상태값에만 초기화된 것 뿐이지 input 상자는 초기화되지 않아 값이 그대로
      남아 있는 것을 확인 가능.
    */

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            onChange={onChangeInput}
                            value={inputValue}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}
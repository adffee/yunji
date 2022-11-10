
import { useState } from "react";

export default function InputOutputClient() {
    const [clientName, setClientName] = useState(''),           // 고객명 출력 변수.
        [clientNum, setClientNum] = useState(''),               // 고객번호 출력 변수.

        [clientNameValue, setClientNameValue] = useState(''),
        [clientNumValue, setClientNumValue] = useState('');

    function onChangeInput(setter, e) {
        setter(e.target.value);
    }

    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    function confirm() {
        setClientName(clientNameValue);
        setClientNum(clientNumValue);
    }

    function tryagain() {
        setClientNameValue('');
        setClientNumValue('');
    }

    return (
        <>
            <div>
                <label>고객명
                    <input name='clientName'
                        type="text"
                        placeholder='이름을 입력하세요'
                        value={clientNameValue}
                        onChange={e => onChangeInput(setClientNameValue, e)}
                        onKeyDown={checkEnter}
                    />
                </label>
                <label>고객번호
                    <input name='clientNum'
                        type="text"
                        placeholder="고객번호를 입력하세요"
                        value={clientNumValue}
                        onChange={e => onChangeInput(setClientNumValue, e)}
                        onKeyDown={checkEnter}
                    />
                </label>
                <button onClick={confirm}>확인완료</button>
                <button onClick={tryagain}>다시입력</button>
            </div>

            <div>
                {clientName} 고객님의 고객번호는 {clientNum} 입니다
            </div>
        </>
    );
}
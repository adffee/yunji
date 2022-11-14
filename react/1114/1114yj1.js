import { useState } from 'react';

function App() {
    const [staffName, setStaffName] = useState(''),         // 입력 직원명.
        [staffList, setstaffList] = useState([]),
        [serialNum, setSerialNum] = useState(0);

    function inputStaffName(e) {            // 입력된 직원명을 저장하는 함수.
        setStaffName(e.target.value);
    }

    /* 
        이벤트 발생시 함수내에서 배열에 요소를 직접 추가하는 방식을 취하므로
        하위 컴포넌트 적용이 불필요.
    */
    function registerStaffName() {
        if (staffName) {

            setstaffList([
                ...staffList,
                <div key={`staffList${serialNum}`}>{staffName}</div>
            ]);

            setStaffName('');
            setSerialNum(serialNum + 1);
        }
    }

    return (
        <>
            <div style={{ marginBottom: '20px' }}>&lt; 직원 명단&gt;</div>
            {staffList}
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

export default App;


///import { useState } from "react";

export default function InputOutputClient() {
    const [clientInfo, setClientInfo] = useState({
        clientName: '',
        clientNum: '',
        clientNameValue: '',
        clientNumValue: '',
    });

    const { clientName, clientNum, clientNameValue, clientNumValue } = clientInfo;

    function onChangeInput(e) {
        const { name, value } = e.target;

        setClientInfo({
            ...clientInfo,
            [name]: value,
        });
    }

    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    function confirm() {
        setClientInfo({
            ...clientInfo,
            clientName: clientNameValue,
            clientNum: clientNumValue,
        });
    }

    function tryagain() {
        setClientInfo({
            ...clientInfo,
            clientNameValue: '',
            clientNumValue: '',
        });
    }

    return (
        <>
            <div>
                <label>고객명
                    <input name='clientNameValue'
                        type="text"
                        placeholder='이름을 입력하세요'
                        value={clientNameValue}
                        onChange={onChangeInput}
                        onKeyDown={checkEnter}
                    />
                </label>
                <label>고객번호
                    <input name='clientNumValue'
                        type="text"
                        placeholder="고객번호를 입력하세요"
                        value={clientNumValue}
                        onChange={onChangeInput}
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

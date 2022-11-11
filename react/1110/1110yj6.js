import { useState } from "react";

function InputClient() {
    const [clientInput, setClientInput] = useState('');
    const [clientNumberInput, setClientNumberInput] = useState('');

    const [client, setClient] = useState('');
    const [clientNumber, setClientNumber] = useState('');

    function onChangeValue(e) {
        if (e.target.className === 'client-name') {
        setClientInput(e.target.value);
        } else {
        setClientNumberInput(e.target.value);
        }
    }

    function onKeyDownInput(e) {
        if (e.keyCode === 13) {
        confirm();
        }
    }

    function confirm() {
        setClient(clientInput);
        setClientNumber(clientNumberInput);
    }

    function tryAgain() {
        setClientInput('');
        setClientNumberInput('');
    }

    return (
        <>
        <div>
            <label> 고객명
            <input
                type="text"
                className="client-name"
                placeholder="이름을 입력하세요"
                onChange={onChangeValue}
                onKeyDown={onKeyDownInput}
                value={clientInput}
            />
            </label>
            <label> 고객번호
            <input
                type="text"
                className="client-number"
                placeholder="고객번호를 입력하세요"
                onChange={onChangeValue}
                onKeyDown={onKeyDownInput}
                value={clientNumberInput}
            />
            </label>
            <button onClick={confirm}>확인완료</button>
            <button onClick={tryAgain}>다시입력</button>
        </div>
        <div>{client}님의 고객번호는 {clientNumber}입니다.</div>
        </>
    );
}

export default InputClient;

///도진이 
import { useState } from 'react';

export default function InputClient2() {
    const [inputName, setInputName] = useState(''),
        [clientName, setClientName] = useState(''),
        [inputNumber, setInputNumber] = useState(''),
        [clientNumber, setClientNumber] = useState('');

    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    function onChangeName(e) {
        setInputName(e.target.value);
    }
    function onChangeNumber(e) {
        setInputNumber(e.target.value);
    }


    function confirm() {
        setClientName(inputName);
        setClientNumber(inputNumber);
    }

    function tryagain() {
        setInputNumber('');
        setInputName('');
    }


    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input type="text"
                            placeholder='이름을 입력하세요.'
                            onChange={onChangeName}
                            value={inputName}
                        />
                    </label>
                    <label>고객번호
                        <input type="text"
                            placeholder='고객번호를 입력하세요.'
                            onChange={onChangeNumber}
                            value={inputNumber}
                            onKeyDown={checkEnter}
                        />
                    </label>

                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName}님의 고객번호는 {clientNumber} 입니다.
                </div>
            </div>
        </>
    )
}


////수진이


//1. 일단 틀 만들자
import { useState } from 'react';

export default function InputClient() {
    const [inputValue, setinputValue] = useState(''),
        [inputValue2, setinputValue2] = useState(''),
        [clientName, setclientName] = useState(''),
        [clientNum, setclientNum] = useState('');
    
    function onChangeName(e) {
        setinputValue(e.target.value);
    }
    // 이름 입력하면 바뀌게..
    function onChangeNum(e) {
        setinputValue2(e.target.value);
    }
    // 고객번호 입력하면 바뀌게
    
    function confirm() {
        if(inputValue !== '') {
        setclientName(inputValue);
        setclientNum(inputValue2);
        }
    }
    //확인 누르면 두 값이 바뀌게...?

    function tryagain() {
        setinputValue('');
        setinputValue2('');
    }
    //다시입력 누르면 지워지게

    function checkEnter(e) {
        if (e.key === 'Enter') {
        confirm();
        }
    }
    //이름은 엔터 누르면 넘어가게

    return (
        <>
        <div>
            <div>
            <label>고객명
                <input type="text"
                placeholder="이름을 입력하세요."
                value={inputValue}
                onChange={onChangeName}
                onKeyDown={checkEnter} />
            </label>
            <label>고객번호
                <input type="text"
                placeholder="고객번호를 입력하세요."
                value={inputValue2}
                onChange={onChangeNum} />
            </label>
            <button onClick={confirm}>확인완료</button>
            <button onClick={tryagain}>다시입력</button>
            </div>
            <div>
            {clientName} 고객님의 고객번호는 {clientNum} 입니다.
            </div>
        </div>
        </>
    );
}


////선생님코드 

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


/// 선생님 코드 2

import { useState } from "react";

export default function InputOutputClient() {
    const [clientName, setClientName] = useState(''),           // 고객명 출력 변수.
        [clientNum, setClientNum] = useState(''),               // 고객번호 출력 변수.

        [clientNameValue, setClientNameValue] = useState(''),   // "다시입력" 버튼을 눌렀을 때 input 상자를 초기화하고,
        [clientNumValue, setClientNumValue] = useState('');     // 저장된 값을 "확인완료" 버튼 또는 "Enter" 키를 눌렀을
    //                                                          // 때 출력변수에 전달하기 위한 변수.

    /*
        입력상자에 변화가 감지되었을 때 name 프로퍼티를 이용하여 개별 입력상자를
        식별함으로써 이벤트 객체의 value 속성을 통해 입력상자에 입력된 값을
        clientNameValue 나 clientNumValue 에 저장.
    */
    function onChangeInput(e) {
        const eventOj = e.target;

        if (eventOj.name === 'clientName') {
            setClientNameValue(eventOj.value);
        } else {
            setClientNumValue(eventOj.value)
        }
    }

    /* 
        엔터키가 감지되면 setOutputData 함수를 통해 입력상자의
        value 값을 출력 변수에 할당하는 함수.
    */
    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    /* 
        "확인완료" 버튼을 클릭했을 때 setOutputData 함수를 통해
        입력상자의 value 값을 출력 변수에 할당하는 함수.
    */
    function confirm() {
        setClientName(clientNameValue);
        setClientNum(clientNumValue);
    }

    /* 
        "다시입력" 버튼을 클릭했을 때 입력상자의 value 값을
        빈문자열로 초기화하는 함수.
    */
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
                        onChange={onChangeInput}
                        onKeyDown={checkEnter}
                    />
                </label>
                <label>고객번호
                    <input name='clientNum'
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

/////////////////태현이가 보낸  전개구문적용

import { useState } from "react";

function InputClient() {
    const [inputData, setInputData] = useState({
        clientName: {
        input: '',
        output: '',
        },
        clientNumber: {
        input: '',
        output: '',
        },
    });

    const { clientName, clientNumber } = inputData;

    function onChangeValue(e) {
        setInputData({
        ...inputData,
        [e.target.className]: {
            ...[e.target.className],
            input: e.target.value,
        }
        });
    }

    function onKeyDownInput(e) {
        if (e.keyCode === 13) {
        confirm();
        }
    }

    function confirm() {
        setInputData({
        ...inputData,
        clientName: {
            ...clientName,
            output: clientName.input,
        },
        clientNumber: {
            ...clientNumber,
            output: clientNumber.input,
        }
        });
    }

    function tryAgain() {
        setInputData({
        ...inputData,
        clientName: {
            ...clientName,
            input: '',
        },
        clientNumber: {
            ...clientNumber,
            input: '',
        }
        });
    }

    return (
        <>
        <div>
            <label> 고객명
            <input
                type="text"
                className="clientName"
                placeholder="이름을 입력하세요"
                onChange={onChangeValue}
                onKeyDown={onKeyDownInput}
                value={clientName.input}
            />
            </label>
            <label> 고객번호
            <input
                type="text"
                className="clientNumber"
                placeholder="고객번호를 입력하세요"
                onChange={onChangeValue}
                onKeyDown={onKeyDownInput}
                value={clientNumber.input}
            />
            </label>
            <button onClick={confirm}>확인완료</button>
            <button onClick={tryAgain}>다시입력</button>
        </div>
        <div>{clientName.output}님의 고객번호는 {clientNumber.output}입니다.</div>
        </>
    );
}

export default InputClient;





/////태현이 전개구문 2

import { useState } from "react";

function InputClient() {
    // const [inputData, setInputData] = useState({
    //   clientName: {
    //     input: '',
    //     output: '',
    //   },
    //   clientNumber: {
    //     input: '',
    //     output: '',
    //   },
    // });
    const [inputData, setInputData] = useState({
        clientName: '',
        clientNumber: '',
        clientNameOutput: '',
        clientNumberOutput: '',
    });

    const { clientName, clientNumber, clientNameOutput, clientNumberOutput } = inputData;

    function onChangeValue(e) {
        setInputData({
            ...inputData,
            [e.target.className]: e.target.value,
        });
        // setInputData({
        //   ...inputData,
        //   [e.target.className]: {
        //     ...[e.target.className],
        //     input: e.target.value,
        //   }
        // });
    }

    function onKeyDownInput(e) {
        if (e.keyCode === 13) {
            confirm();
        }
    }

    function confirm() {
        setInputData({
            ...inputData,
            clientNameOutput: clientName,
            clientNumberOutput: clientNumber,
        });
        // setInputData({
        //   ...inputData,
        //   clientName: {
        //     ...clientName,
        //     output: clientName.input,
        //   },
        //   clientNumber: {
        //     ...clientNumber,
        //     output: clientNumber.input,
        //   }
        // });
    }

    function tryAgain() {
        setInputData({
            ...inputData,
            clientName: '',
            clientNumber: '',
        });
        // setInputData({
        //   ...inputData,
        //   clientName: {
        //     ...clientName,
        //     input: '',
        //   },
        //   clientNumber: {
        //     ...clientNumber,
        //     input: '',
        //   }
        // });
    }

    return (
        <>
            <div>
                <label> 고객명
                    <input
                        type="text"
                        className="clientName"
                        placeholder="이름을 입력하세요"
                        onChange={onChangeValue}
                        onKeyDown={onKeyDownInput}
                        value={clientName}
                    />
                </label>
                <label> 고객번호
                    <input
                        type="text"
                        className="clientNumber"
                        placeholder="고객번호를 입력하세요"
                        onChange={onChangeValue}
                        onKeyDown={onKeyDownInput}
                        value={clientNumber}
                    />
                </label>
                <button onClick={confirm}>확인완료</button>
                <button onClick={tryAgain}>다시입력</button>
            </div>
            <div>{clientNameOutput}님의 고객번호는 {clientNumberOutput}입니다.</div>
        </>
    );
}

export default InputClient;



////선생님꺼 
import { useState } from "react";

export default function InputOutputClient() {
    const [clientInfo, setClientInfo] = useState({
        clientName: '',
        clientNum: '',
        clientNameValue: '',
        clientNumValue: '',
    });

    function onChangeInput(e) {
        const eventOj = e.target;

        if (eventOj.name === 'clientName') {
            setClientInfo({
                ...clientInfo,
                clientNameValue: eventOj.value,
            });
        } else {
            setClientInfo({
                ...clientInfo,
                clientNumValue: eventOj.value,
            });
        }
    }

    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    function confirm() {
        setClientInfo({
            ...clientInfo,
            clientName: clientInfo.clientNameValue,
        });
        setClientInfo({
            ...clientInfo,
            clientNum: clientInfo.clientNumValue,
        });
    }

    function tryagain() {
        setClientInfo({
            ...clientInfo,
            clientNameValue: '',
            clientNum: '',
        });
    }

    return (
        <>
            <div>
                <label>고객명
                    <input name='clientName'
                        type="text"
                        placeholder='이름을 입력하세요'
                        value={clientInfo.clientNameValue}
                        onChange={onChangeInput}
                        onKeyDown={checkEnter}
                    />
                </label>
                <label>고객번호
                    <input name='clientNum'
                        type="text"
                        placeholder="고객번호를 입력하세요"
                        value={clientInfo.clientNumValue}
                        onChange={onChangeInput}
                        onKeyDown={checkEnter}
                    />
                </label>
                <button onClick={confirm}>확인완료</button>
                <button onClick={tryagain}>다시입력</button>
            </div>

            <div>
                {clientInfo.clientName} 고객님의 고객번호는 {clientInfo.clientNum} 입니다
            </div>
        </>
    );
}
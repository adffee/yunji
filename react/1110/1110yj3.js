import InputClient from "./InputClient";
import { useState } from 'react';

function App() {
    return (
        <InputClient />
    );
}

export default App;

///////

import { useState } from "react";


export default function InputClient() {
    
    const [inputValue, setInputValue] = useState(' '),
        [clientName, setclientName] = useState(' ');
    
    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    function confirm() {
        setclientName(inputValue);
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
                </div>
            </div>
        </>
    );
}
import ChangeStateValue from "./ChangeStateValue";
import ChangeStateValue2 from "./ChangeStateValue2";

function App() {
    console.log('App');

    return (
        <>
            <ChangeStateValue />
            <ChangeStateValue2 />
        </>
    );
}

export default App;


////

import { useState } from "react";

/* 
    연동된 계층화된 임의 컴포넌트가 해당 상태값 변화에 따라 다시 렌더링
    되더라도 다른 컴포넌트들은 함께 재렌더링되지 않고 변화가 발생치 않는
    독립적 특성을 확인 가능.
*/
export default function ChangeStateValue() {
    const [stateValue, setStateValue] = useState(5);

    console.log('ChangeStateValue');

    function setValue() {
        setStateValue(stateValue + 1);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}


///


import { useState } from "react";

export default function ChangeStateValue2() {
    const [stateValue, setStateValue] = useState(10);

    console.log('ChangeStateValue2');

    function setValue() {
        setStateValue(stateValue + 1);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue2</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}
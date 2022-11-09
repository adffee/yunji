import ChangeStateValue from "./ChangeStateValue";
import ChangeStateValue2 from "./ChangeStateValue2";
function App() {
    let syncValue = 0;

    /* 
        하위 컴포넌트(ChangeStateValue)로 부터 전달된 값을 상위 컴포넌트의
        동기값(syncValue)에 전달을 하면 재렌더링이 되지 않아, 동기값에 대한
        변화를 기대할 수 없으며 다른 하위 컴포넌트에 대한 전달도 불가.
    */
    function transValue(value) {
        syncValue = value;
    }

    return (
        <>
            <ChangeStateValue transValue={transValue} />
            <ChangeStateValue2 syncValue={syncValue} />
            {syncValue}
        </>
    );
}

export default App;

///////////

import { useState } from "react";

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(5);

    function setValue() {
        setStateValue(stateValue + 1);
        transValue(stateValue);
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
////////////

export default function ChangeStateValue2({ syncValue }) {

    /* 
        JSX 표현식 블럭{} 은 단독으로 렌더링할 수 없음에 주의.
        반드시 부모 요소가 있어야 정상적 렌더링 가능.
    */
    return (
        <div>
            { syncValue }
        </div>
    );
}

import ChangeStateValue from "./ChangeStateValue";
import ChangeStateValue2 from "./ChangeStateValue2";
import { useState } from 'react';

function App() {
    const [aSyncValue, setAsyncValue] = useState(0);

    /* 
        컴포넌트간 통신에서 상위에서 하위 컴포넌트에 데이터를 전달할 때에는
        props 를 통해 참조 전달이 되므로 하위 컴포넌트에서는 별도의 동기나
        비동기 변수의 선언없이 바로 재렌더링 적용 가능.
        반면, 하위에서 상위 컴포넌트로 데이터 전달시에는 상위 컴포넌트 함수의
        참조를 통한 호출로 매개변수 형태의 지역변수로 전달되므로 상위 컴포넌트
        에서 이를 재렌더링 하기 위해서는 재렌더링이 수반되는 비동기 변수에
        할당하는 작업이 반드시 필요.
        즉, 컴포넌트간 통신을 위해서는 상위에서 하위인지 또는 하위에서 상위인지
        방향에 따라 비동기 변수의 필요성이 가변적.
    */
    function transValue(value) {
        setAsyncValue(value);
    }

    return (
        <>
            <ChangeStateValue transValue={transValue} />
            <ChangeStateValue2 aSyncValue={aSyncValue} />
            {aSyncValue}
        </>
    );
}

export default App;



////

import { useState } from "react";

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(5);

    function setValue() {
        /* 
            함수 내에서 setStateValue 와 transValue 함수의 실행 순서에
            관계없이 상태값 변환 함수(setStateValue)가 다른 실행문 보다
            가장 최후에 실행되는 것을 확인 가능.
            따라서 실행 순서에 주의.
        */
        setStateValue(stateValue + 1);

        console.log(stateValue);

        transValue(stateValue);
    }

    /* 
        실제 배치 순서는 상관이 없지만 직관적인 동기화를 맞추기 위해서는
        set~ 함수를 무조건 가장 뒤에 배치하는 것이 논리적 이해가 편리.
    */
    // function setValue() {
    //     let value = stateValue + 1;

    //     transValue(value);
    //     setStateValue(value);
    // }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}


///export default function ChangeStateValue2({ aSyncValue }) {
    return (
        <div>
            {aSyncValue}
        </div>
    );
}

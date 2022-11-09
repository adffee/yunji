export default function SetName({ setName }) {
    const myName = [
        '박성연',
        '홍길동',
        '김구라',
    ];

    /* 
        클릭 이벤트가 발생했을 때 해당 객체의 컨텐트 값을 얻어
        상위 컴포넌트에서 전달받은 함수(setName)의 참조를 통해
        호출함으로써 상위 컴포넌트의 실함수에서 매개변수 형태로
        전달받는 형태.
    */
    function getName(e) {
        setName(e.target.textContent);
    }

    return (
        <>
            <button onClick={getName}>{myName[0]}</button>
            <button onClick={getName}>{myName[1]}</button>
            <button onClick={getName}>{myName[2]}</button>
        </>
    );
}



//////

import { useState } from 'react';
import SetName from './subModule/SetName';

/* 
    < 하위 컴포넌트에서 상위 컴포넌트로 값 전달 >

- 하위 컴포넌트에서 상위 컴포넌트로 값을 전달하기 위해서는 상위 컴포넌트에서
  정의한 함수의 참조를 하위 컴포넌트에 전달하고, 하위 컴포넌트에서 상위
  컴포넌트로 전달할 값을 상위 컴포넌트의 함수 참조를 통해 실인수와 함께 호출
  함으로써 상위 컴포넌트에서는 매개변수 형태로 전달된 값을 수신하고 이를
  set~ 함수를 이용 상태값에 저장하여 활용.
*/
function App() {
    const [yourName, setYourName] = useState('');

    /* 
        하위 컴포넌트에서 전달된 값을 매개변수 형태로 수신하기 위한 함수.        
    */
    function setName(transName) {
        setYourName(transName);
    }

    return (
        <>
            <SetName setName={setName} />
            <div>당신의 이름은 {yourName}입니다.</div>
        </>
    );
}

export default App;
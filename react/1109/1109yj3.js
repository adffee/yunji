import { useState } from 'react';
import SetName from './subModule/SetName';

function App() {
    const [yourName, setYourName] = useState('박성연');

    return (
        <>
            {/* 
                상태값 변경을 위한 set~ 함수의 참조를 하위 컴포넌트에 직접
                전달함으로써 별도의 함수 선언 필요없이 하위 컴포넌트에서
                set~ 함수의 직접 호출을 통해 상위 컴포넌트에서 수신.
            */}
            <SetName setYourName={setYourName} />
            <div>당신의 이름은 {yourName}입니다.</div>
        </>
    );
}

export default App;

////
export default function SetName({ setYourName }) {
    const myName = [
        '머털이',
        '홍길동',
        '김구라',
    ];

    function getName(e) {
        setYourName(e.target.textContent);
    }

    return (
        <>
            <button onClick={getName}>{myName[0]}</button>
            <button onClick={getName}>{myName[1]}</button>
            <button onClick={getName}>{myName[2]}</button>
        </>
    );
}
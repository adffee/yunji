import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
    하나의 모듈에서 다중 컴포넌트를 한꺼번에 임포트시 표현식 블럭{} 을
    이용하여 객체 형태로 나열함으로써 다중 컴포넌트에 대한 임포트가 가능.
    단, default 컴포넌트는 아래와 같이 객체 형태가 아닌 별도로 임포트해야
    함에 주의.
*/
import App, { TestReact, TestReact2 } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
        <TestReact />
        <TestReact2 />
    </>
);
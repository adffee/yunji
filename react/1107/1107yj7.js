import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
    < import 시 as 를 이용한 컴포넌트명 변경 >

형식    :       import 실제컴포넌트명 as 변경컴포넌트명

- 변경컴포넌트명 또한 반드시 대문자로 시작해야함에 주의.
  단, default 컴포넌트에 대해서는 as 적용 불가.
*/
import { TestReact as First, TestReact2 as Second } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <First />
        <Second />
    </>
)
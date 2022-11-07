import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
    하나의 모듈에서 다중 컴포넌트들을 한꺼번에 임포트하기 위해서 as 와 * 적용.

형식    :       import  *  as  객체화(그룹핑)_컨포넌트명

- 렌더링할 태그화 컴포넌트 적용시에는 반드식 객체화_컨포넌트명을 통해 임포트
  모듈 내의 실제 컴포넌트명을 호출.
*/
import * as Components from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Components.App/>
        <Components.TestReact />
        <Components.TestReact2 />
    </>
);
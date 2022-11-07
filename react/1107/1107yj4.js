import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
    < 모듈(파일)에서 다중 객체를 로드하는 경우의 import 형식 >

    import { 객체참조1, 객체참조2, ...} from 문자열 형태의 모듈 경로명


※ 경로명은 현재 경로를 의미하는 "./" 의 생략이 불가하며 로드 파일이 js 파일인
   경우 확장자 js 는 생략 가능.
   export 모듈의 클래스명 또는 함수명이 import 시 객체참조명과 동일해야 함에 주의.

*/
import { TestReact, TestReact2 } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // 컴포넌트 태그명의 이니셜은 대문자로하는 것이 원칙.
    <>
        <TestReact />
        <TestReact2 />
    </>
);
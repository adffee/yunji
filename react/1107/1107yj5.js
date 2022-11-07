import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
    < 모듈에서 하나의 객체만 로드하는 경우의 import 형식 >

- 모듈의 객체참조명에 대한 블럭{} 생략 가능.
  단, 이는 모듈에서 객체 export 시 default 지정자를 지정한 경우만 가능.
  또한 임포트 객체명(App)을 모듈의 디폴트 함수나 클래스명과 다르게
  적용하여도 무방.
*/
import App from './TestReact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
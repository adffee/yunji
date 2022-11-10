// import './App.css';
// import Img from './Img'
// import NationContainer from './NationContainer';
// import NationBox from "./NationBox";

// function App() {
//   return (
//     <div id="main_container">
//       <Img src="./images/pagenation1.jpg" alt="image" />
//       <NationContainer>
//         <NationBox number='1' opacity='1' />
//         <NationBox number='2' />
//         <NationBox number='3' />
//         <NationBox number='4' />
//         <NationBox number='5' />
//       </NationContainer>

//     </div>
//   );
// }

// export default App;

import "./App.css"
import Img from "./Img";
import NationContainer from "./NationContainer";
import NationBox from "./NationBox";

function App() {
    let nationBox = [];

    /* 
        루프 형태의 반복적인 JSX 요소 생성시에는 각 요소를 식별할 수
        있는 고유한 key 프로퍼티를 반드시 할당해야함에 주의.
        
        JSX props 에 Template literals 지정시에는 Template literals 을
        기본적으로 문자열 형식이 아닌 표현식으로 인식하여 반드시
        표현식 블럭{} 내에서 구현해야함에 주의.
    */
    for (let i = 0; i < 5; i++) {

        /* 
            JSX 표현식 블럭{} 내의 값은 기본적으로 모두 문자열 형식으로
            인식되므로 opacity 할당시 별도의 문자열 구분자 지정 불필요.
        */
        nationBox[i] = <NationBox key={`nation${i}`} nationNum={i + 1} opacity={i > 0 ? 0.5 : 1} />;
        // nationBox.push(<NationBox key={`nation${i}`} nationNum={i + 1} opacity={i > 0 ? 0.5 : 1} />);
    }

    return (
        <div id="main_container">
            <Img src="./images/pagenation1.jpg" alt="img" />
            <NationContainer>
                {nationBox}
            </NationContainer>
        </div>
    );
}

export default App;



///css
* {
    margin:0;
    padding:0;
  }
  
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #main_container {
    width: 500px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .nation_container {
    display: flex;
    justify-content:center;
    align-items:center;
    gap:10px;
  }
  
  #main_container img {
    width: 300px;
    height: 500px;
  }
  
  .nationBox {
    width: 30px;
    line-height: 30px;
    text-align: center;
    background-color: silver;
    text-decoration: none;
  }

  ///img js
  export default function Img({ src , alt}) {
    return <img src={src} alt={alt} />
;
}


//index js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



/* 
    < Page nation 구현 > - 태그간 종속 관계

- 아래 HTML 구조와 같은 형태로 구성되도록 리액트 구현.

=============================================================================
    
    < 조건 >

1) NationBox 컴포넌트는 NationContainer 에 컴포넌트 태그간 종속 관계가 되도록 구현.

2) NationBox 의 클래스 넘버링(nation1 ~nation5)을 삭제하고 CSS 파일의 opacity 도
  삭제하되, 이를 대체하여 컴포넌트 태그에서 직접 프로퍼티를 전달하는 방식으로 구현.
  단, 디폴트 파라미터나 defaultProps 필드 활용.
*/

///nationbox 
export default function NationBox({nationNum, opacity}) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="." className='nationBox' style={{opacity}}>{nationNum}</a>
    );
}


///nationcontainer

export default function NationContainer({children}) {
    return (
        <div className="nation_container">
            {children}
    </div>
    );
}


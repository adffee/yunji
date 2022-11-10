// import Img from './Img';
// import NationContainer from './NationContainer';

// function App() {
//   return (
//     <div id="main_container">
//       <Img src="./images/pagenation1.jpg" alt="image" />
//       <NationContainer/>
//     </div>
//   );
// }

// export default App;

//선생님
import './App.css';
import Img from './Img'
import NationContainer from './NationContainer';

function App() {
  return (
    <div id="main_container">
      <Img src="./images/pagenation1.jpg" alt="image" />
      <NationContainer/>
    </div>
  );
}

export default App;


////css

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
    opacity: 0.3;
  }
  
  .nationBox:first-child {
    opacity: 1;
  }
  


////index js

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


/* 
    < Page nation 구현 > - 모듈간 종속 관계

- 아래 HTML 구조와 같은 형태로 구성되도록 리액트 구현.

=============================================================================
    
    < 조건 >

1) 3개의 컴포넌트로 구현. ( Img, NationContainer, NationBox )

2) Img, NationContainer 컴포넌트는 형제 관계로 구성하되,
   NationBox 컴포넌트는 NationContainer 에 모듈간 종속 관계가 되도록 구현.

3) 이미지의 경로와 대체 텍스트는 Img 컴포넌트 태그에서 프로퍼티 형태로 전달하도록 구현.

4) NationBox 의 클래스(nation1 ~nation5) 넘버링과 컨텐트의 넘버링은 NationBox
   컴포넌트 태그에서 프로퍼티 형태로 전달하도록 구현.

5) 반복문은 미사용.

=============================================================================

    < HTML 구조 >

<div id="main_container">
    <img src="./images/bg1.jpg" alt="img">

    <div class="nation_container">
        <a href="#" class="nationBox nation1">1</a>
        <a href="#" class="nationBox nation2">2</a>
        <a href="#" class="nationBox nation3">3</a>
        <a href="#" class="nationBox nation4">4</a>
        <a href="#" class="nationBox nation5">5</a>
    </div>
</div>

*/


///index css

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
    opacity: 0.3;
  }
  
  .nationBox:first-child {
    opacity: 1;
  }

  

//nationbox
// export default function NationBox({ number }) {
//     return (
//         <a href="#" className={`nationBox nation${number}`}>{number}</a>
//         );
// }

///선생님 코드 

export default function NationBox({nationNum}) {
    return <a href="." className={`nationBox nation${nationNum}`}>{nationNum}</a>
;
}

///narioncontainer

// import NationBox from "./NationBox";
// import NationContainer from './NationContainer';

// export default function NationContainer() {
//     return (
//         <div className="nation_container">
//             <NationBox number='1'/>
//             <NationBox number='2'/>
//             <NationBox number='3'/>
//             <NationBox number='4'/>
//             <NationBox number='5'/>
//         </div>
//         );
// }

////선생님 코드 
import NationBox from "./NationBox"

export default function NationContainer() {
    return(
        <div className="nation_container">
            <NationBox nationNum='1'/>
            <NationBox nationNum='2'/>
            <NationBox nationNum='3'/>
            <NationBox nationNum='4'/>
            <NationBox nationNum='5'/>
        </div>
    )
}
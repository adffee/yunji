import ChangeStateValue from "./subModule/ChangeStateValue";

function App() {
    return (
        <ChangeStateValue />
    );
}

export default App;
//////////////////
import { useState } from "react";

export default function ChangeStateValue() {
    const [stateValue, setStateValue] = useState(5);

    console.log('동기식1');

    console.log(stateValue);

    let cnt = 0;

    cnt++;

    console.log(cnt);

    console.log('동기식2');

    /* 
        버튼을 클릭했을 때 동기값의 변화는 컴포넌트 함수가 재실행되지
        않음을 확인 가능.
    */
    function setCnt() {
        cnt++;
    }

    /* 
        버튼을 클릭했을 때 비동기값(stateValue)의 변화로 컴포넌트함수
        내의 모든 동기식이 다시 실행됨을 확인 가능.
        따라서 비동기값의 변화가 없다면 모든 동기식은 다시 실행되지
        않음.
    */
    function setValue() {
        setStateValue(stateValue + 1);
    }

    return (
        <>
            <button onClick={setCnt}>동기값 변화</button>
            <button onClick={setValue}>비동기값 변화</button>
        </>
    );
}


//// 이렇ㄱㅔ 하지마 
// import { useState } from "react";

// export default function ChangeStateValue() {
//     const [stateValue, setStateValue] = useState(5);

//     console.log('동기식1');

//     /* 
//         비동기 변수 stateValue 를 동기식 형태로 변경함으로써 모든 동기식의
//         반복 재실행으로 인한 무한루프 발생에 따른 에러 처리.
//         따라서 비동기 변수는 절대로 동기식 형태로의 변경 금지.
//     */
    
//     /*밖에 두지마라 set함수 */

//     setStateValue(10); /*이렇게 쓰지말고 */

//     console.log('동기식2');

//     function setValue() {
//         setStateValue(stateValue + 1);/*이렇게 써라  */
//     }

//     return (
//         <>
//             <div>
//                 <button onClick={setValue}>비동기값 변화</button>
//             </div>
//         </>
//     );
// }
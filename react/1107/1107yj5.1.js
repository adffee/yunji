/* 
    export 시 default 지정자를 지정함으로써 해당 모듈에서 하나의 객체만 외부로
    추출함을 명시적으로 표현하고 이에 따라 import 시 객체참조에 지정에 대한
    블럭{} 생략 가능.
    또한 이경우 export 클래스명이나 함수명은 import 시의 객체참조명과 다르거나
    생략해도 무방.
    즉, default 지정자 지정 시에는 익명함수 형태의 객체로 내보내기가 가능하며
    import 시 객체명은 임의로 지정 가능.
    단, 혼란을 방지하기 위해 이경우 모듈명과 동일한 객체참조명을 사용하는
    것이 바람직.
*/
export default function App() {
    return <h1>모듈 임포트1</h1>;
}

// export default function Appss() {
//     return <h1>모듈 임포트1</h1>;
// }

// export default function () {
//     return <h1>모듈 임포트1</h1>;
// }
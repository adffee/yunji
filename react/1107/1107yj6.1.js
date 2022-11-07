// export { TestReact, TestReact2 };
// export default App;

function App() {
    return <h1>모듈 임포트1</h1>;
  }
  
  function TestReact() {
    return <h1>모듈 임포트2</h1>;
  }
  
  function TestReact2() {
    return <h2>모듈 임포트3</h2>;
  }
  
  /* 
    export 구문은 아래와 같이 별도로 선언이 가능하며, 선언 위치는 상관이 없음.
    또한 여러개의 컴포넌트를 동시에 export 하는 경우에는 표현식 블럭{} 을
    이용하여 객체 형태로 컴포넌트들을 나열함으로써 한꺼번에 export 가능.
  */
  export { TestReact, TestReact2 };
  export default App;
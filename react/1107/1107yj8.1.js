function TestReact() {
    return <h1>모듈 임포트1</h1>;
  }
  
  function TestReact2() {
    return <h2>모듈 임포트2</h2>;
  }
  
  /* 
    export 구문 또한 as 적용 가능.
    또한 export 구문에서 as 적용후, import 구문에서도 as 적용 가능.
  */
  export { TestReact as First, TestReact2 as Second};
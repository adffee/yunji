import Hello from './Hello';

function App() {
  return (
    /* 
      태그 컴포넌트에 임의 사용자정의 프로퍼티와 값을 지정함으로써 해당 컴포넌트에
      객체 형태로 전달되고, 이를 매개변수(props)의 참조를 통해 태그 컴포넌트에 명시한
      프로퍼티명 그대로 멤버연산자(.)를 통해 필드와 동일한 형태로 참조 가능.
    */
    <Hello students="학생여러분!!" />
    
  );
}

export default App;
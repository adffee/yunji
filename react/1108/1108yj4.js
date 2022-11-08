import './App.css';

/* 
  < 이미지 임포트 >

- 이미지 임포트시 리액트의 public 폴더내에 이미지 파일들을 구성하면
  별도의 임포트 과정 필요없이 문자열 형태의 경로 설정이 직접 가능.
  설정 경로는 src 폴더내 index.js 파일 계층과 동일한 위치로 인정되어
  지정 가능.
*/
function App() {
  return (
    <div id="main_container">
        <img src="/images/pagenation1.jpg" alt="img"/>

        <div className="nation_container"></div>
    </div>
  );
}

export default App;
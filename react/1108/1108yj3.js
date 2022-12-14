import Parent from "./Parent";
import Son from "./Son";

function App() {

    /* 
        컴포넌트 태그간 계층 구조 구현.
    */
    return (
        <Parent parentName="박성연" >
            <Son sonName="홍길동"/>
        </Parent>
    );
}
   
export default App;



/////////////////////////////
export default function Parent({ parentName,children }) {

    /* 
        컴포넌트 태그간 계층 구조 구현시 컴포넌트 태그간에만
        종속 관계를 표현시 구조적인 구성만 했을뿐, 실제 구현되는
        부모 컴포넌트에 자식 컴포넌트의 실체가 존재하지 않으므로
        자식 컴포넌트는 구현되지 않음.
    */
    return (
        <>
            <div>나의 아빠는 {parentName}입니다</div>
            {children}
        </>
    );
}
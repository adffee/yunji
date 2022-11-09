import Parent from "./Parent";

function App() {
    return (
    <Parent parentName="박성연"/>
    );
}

export default App;


///////////////////////////

import Son from "./Son";

export default function Parent({ parentName }) {
    return (
        <>
            <div>나의 아빠는 {parentName}입니다</div>
            <Son sonName="홍길동"/>
        </>
    );
}

/////////////////////////////

export default function Son({ sonName }) {
    return (
        <div>나의 이름은 {sonName}입니다.</div>
    );
}

import Counter from "./Counter";

function App() {
    const spanStyle = {
        display: 'inline-block',
        margin: '20px 20px',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '2em',

    },
        btnStyle = {
            marginRight: '40px',
        };

    return (
        <Counter spanStyle={spanStyle} btnStyle={btnStyle} />
    );
}

export default App;


///////////////////

function Counter({ spanStyle, btnStyle }) {

    /* 
        < 동기값 >

    - 리액트에서 동기변수에 할당된 값은 순차적인 로직에 의한 변경만 가능.
      따라서 아래의 동기변수에 할당된 값은 이벤트 발생과 같은 비동기적
      상황에 의한 변경 불가.
    */
    let count = 0;      // 동기변수.

    return (
        <>
            <div>COUNTER
                <span style={spanStyle}>{count}</span>
            </div>
            <button style={btnStyle} onClick={() => ++count}>+1</button>
            <button style={btnStyle} onClick={() => ++count}>-1</button>
        </>
    );
}

export default Counter;
export default function TestReact() {
    return <h1>테스트 리액트</h1>;
}


import { useState } from "react";

function App() {
    const [number, setNumber] = useState('1');
    const numbers = [1, 2, 3, 4, 5];

    function onClickButton(e) {
        e.preventDefault();

        e.target.style.opacity = '1';

        setNumber(e.target.textContent);
    }

    return (
        <>
            <div id="main_container">
                <img src={`./images/img${number}.jpg`} alt={`img${number}`} />

                <div className="nation_container">
                    {numbers.map((item, index) => (
                        <a
                            key={item + index}
                            href="/"
                            className={`nationBox nation${item}`}
                            onClick={onClickButton}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;

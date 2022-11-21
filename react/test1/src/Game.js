import { useState } from "react";

function Game({ word, buttons, setButtons }) {
    const [count, setCount] = useState(10);
    const [usedButton, setUserdButton] = useState([]);
    // 원래대로라면 여기서 배열 만들고 버튼들 만들어야 하는데 그러려면 useEffect 필요.

    const totalCount = 10;

    function confirm(e) {
        const { textContent } = e.target;
        let transFormWord = [];

        word.forEach((item) => {
            if (item.codePointAt() >= 97) {
                transFormWord = [...transFormWord, item.toUpperCase()];
            } else {
                transFormWord = [...transFormWord, item.toLowerCase()];
            }
        });

        if (word.includes(textContent) || transFormWord.includes(textContent)) {

        } else {
            setButtons(buttons.filter((item) => item !== textContent));
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="game-info">
                <p>최대 도전 횟수: {totalCount}</p>
                <p>남은 도전 횟수: {count}</p>
            </div>
            <div className="word-container">
                {word.map((item) => (
                    <div key={item} className="char-box">{item}</div>
                ))}
            </div>
            <div className="button-container">
                {buttons.map((item, index) => (
                    <button key={item + index} type="button" onClick={confirm}>{item.toUpperCase()}</button>
                ))}
            </div>
        </>
    );
}

export default Game;
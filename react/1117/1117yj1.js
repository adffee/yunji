import { useState } from 'react';
import Game from"./Game";
import StartGame from "./StartGame";

function App() {
    const [word, setWord] = useState([]);
    const [isStart, setIsStart] = useState(false);
    const [buttons, setButtons] = useState([]);

    return (
        <>
            <h1>Welcome to hangman!</h1>
            <p className="game-message">do you want play game?</p>

            {
                !isStart
                    ? (
                        <StartGame
                            word={word}
                            setWord={setWord}
                            isStart={isStart}
                            setIsStart={setIsStart}
                            buttons={buttons}
                            setButtons={setButtons}
                        />
                    )
                    : <Game word={word} buttons={buttons} setButtons={setButtons} />
            }
        </>
    );
};

export default App;

/////// Game .js

import { useState } from "react";

function Game({ word, buttons, setButtons }) {
    const [count, setCount] = useState(10);
    const [useButton, setUserbutton] = useState([]);

    const totalCount = 10;

    function confirm(e) {
        const { textContent } = e.target;
        let transFormWord = [];

        word.foreach((item) => {
            if (item.codePointAt() >= 97) {
                transFormWord = [...transFormWord, item.toUpperCase()];
            } else {
                transFormWord = [...transFormWord, item.toLowerCase()];
            }
        })
    }
}
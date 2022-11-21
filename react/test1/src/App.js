/**
 * 1. set hiddenword 누르면 인풋, 버튼 사라짐.
 * 2. 입력한 글자의 수만큼 박스가 생김.
 * 3. 그리고 그 아래에 최대 도전 횟수(10), 남은 도전 횟수: 10, 버튼 리스트 뜸
 * 4. 최대 도전은 상수면 충분할 듯.남은 도전 횟수는 변수 필요.
 * 5. 도전시 맞추면 횟수 안까임, 틀리면 횟수 까임.
 * 6. 게임에서 승리하면 버튼들 사라짐.
 * 7. 버튼 클릭시 입력한 단어에 포함되어있는지 확인하는 로직 필요.
 * 8.
 */

import { useState } from "react";
import Game from "./Game";
import StartGame from "./StartGame";

function App() {
    const [word, setWord] = useState([]);
    const [isStart, setIsStart] = useState(false);
    const [buttons, setButtons] = useState([]);

    return (
        <>
            <h1>Welcome to Hangman!</h1>
            <p className="game-message">Do you want play game?</p>

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
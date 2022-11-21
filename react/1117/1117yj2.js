import './App.css';
import { useState } from 'react';
import InputSecretWord from './InputSecretWord/InputSecretWord';
import GameBoard from './GameBoard/GameBoard';

function App() {
    /* 상태값 및 전달 props  최소화를 위한 통합 객체 생성 */
    const [integreatedData, setIntegreatedData] = useState({
        secretWord: '',                    // 확정 secret 단어.
        inputSecretWord: '',             // 입력 secret 단어. 
        correctWord: '',                   // 선택 일치 단어.
        successFailure: false,             // 게임 성공/실패. 성공, 실패 모두 글자 버튼을 안보이게 설정.
        alphabet() {                    // 알파벳 배열 생성 메서드.
            let createAlphabet = [];

            for (let i = 'a'.codePointAt(); i <= 'z'.codePointAt(); i++) {
                createAlphabet.push(String.fromCodePoint(i).toUpperCase());
            }

            return createAlphabet;
        }
    });

    return (
        <div id="App">
            <h1>Welcome To Hangman !!</h1>
            <h3>Do you want to play game ?</h3>
            <InputSecretWord integreatedData={integreatedData} setIntegreatedData={setIntegreatedData} />
            <hr />
            <GameBoard integreatedData={integreatedData} setIntegreatedData={setIntegreatedData} />
        </div>
    );
}

export default App;

///

export default function InputSecretWord({ integreatedData, setIntegreatedData }) {
    const { secretWord, inputSecretWord, alphabet } = integreatedData;

    function onChangeInput(e) {
        const inputWord = e.target.value.toUpperCase();   // 입력단어의 비교 편의와 통일성을 위해 대문자로 변경.

        // 입력단어의 마지막 글자가 알파벳인지 측정.
        if (alphabet().includes(inputWord[inputWord.length - 1])) {

            /* 
                입력단어의 마지막 직전까지의 글자에 마지막 글자가 포함되는지 측정하여 포함되지 않으면
                중복되지 않으므로 입력 secret 단어에 저장.
            */
            if (!inputWord.slice(0, inputWord.length - 1).includes(inputWord[inputWord.length - 1])) {
                setIntegreatedData({
                    ...integreatedData,
                    inputSecretWord: inputWord
                });
            }
        }
    }

    /* 
        입력 secret 단어를 게임 내의 secret 단어로 확정.
    */
    function setsecretWord() {
        setIntegreatedData({
            ...integreatedData,
            secretWord: inputSecretWord,
        });
    }

    return (
        /* 
            확정 secret 단어가 존재하는 경우에는 루트 요소에 hidden 클래스를 삽입하여
            InputSecretWord 컴포넌트가 보이지 않도록 설정.
        */
        <div className={`inputBoxOfsecretWord ${secretWord ? 'hidden' : ''}`}>
            <input
                type="text"
                name="inputSecretWord"
                value={inputSecretWord}
                onChange={onChangeInput}
            />
            <button onClick={setsecretWord}>Set secretWord</button>
        </div>
    );
}

/////
import { useState, useRef } from "react";
import { GridLetter, GridBtn } from "./Grid_Letter_Btn/Grid_Letter_Btn";
import GridTryAgain from "./GridTryAgain/GridTryAgain";

export default function GameBoard({ integreatedData, setIntegreatedData }) {
    const { secretWord, correctWord, successFailure } = integreatedData,
        maxChallenge = 10;               // 최대 도전 횟수.

    const incorrectedCnt = useRef(0),    // 불일치 횟수.
        correctedCnt = useRef(0),        // 일치 횟수. 불일치 횟수와 일치 횟수는 integreatedData 변경시 setter 함수간의
        //                               // 비동기 업데이트 문제 발생으로 인한 영향을 주지 않기 위해 useRef 활용.

        /*
            selectedLetter 함수에서 선택 글자가 틀린 경우, 남은 도전 횟수 카운팅 감소에 대한
            표시를 위해 리렌더링이 필요한데,  로직 구조상 리렌더링을 위한 setter 함수가 존재하지
            않아 리렌더링 발생 요건을 갖추기 위한 가상 상태 변수 설정.
        */
        [virtualValue, setVirtualValue] = useState(0);

    // 버튼 선택에 대한 처리 함수.
    function selectedLetter(e) {
        const btn = e.target,                   // 선택 버튼에 대한 참조.
            selectLetter = btn.textContent;     // 선택 버튼에 대한 컨텐트 추출.

        btn.className = 'hidden';       // 선택 버튼을 안보이게 설정하기 위한 클래스 생성.

        /*
            확정 secret 단어에 선택 글자가 포함되어 있으면 선택일치 단어에 선택 글자를
            포함하여 다시 저장 및 맞는 회숫 증가 카운팅.
            단, 포함되지 않으면 선택 글자가 틀린것이므로 불일치 카운팅을 늘리고 틀린
            경우의 비동기 동작 setter 가 없어 리렌더링을 위한 가상 상태값 증가.
        */
        if (secretWord.includes(selectLetter)) {
            setIntegreatedData({
                ...integreatedData,
                correctWord: correctWord + selectLetter,
            });

            correctedCnt.current++;
        } else {
            incorrectedCnt.current++;
            setVirtualValue(virtualValue + 1);      //틀린 경우의 리렌더링을 위한 가상 상태변수의 값 변경.
        }

        /* 
            최대 도전 횟수를 넘거나 시크릿 단어와 선택 입력 단어의 크가가 secret 단어의 글자 크기가
            같으면 동일한 단어로 평가 가능하므로 successFailure true 로 변경하여 글자 버튼이 보이지
            않도록 설정.
        */
        if (incorrectedCnt.current >= maxChallenge || secretWord.length === correctedCnt.current) {
            setIntegreatedData({
                ...integreatedData,
                correctWord: correctWord + selectLetter,    // 상기 setter 함수의 실행으로 GridLetter 에서
                successFailure: true,                       // 입력한 글자가 표시되어야 하지만, 당 setter
                //                                          // 함수로 저장되는 integreatedData 에는 correctWord
                //                                          // 값이 반영되지 않아 최종 글자가 보이지 않는 현상
                //                                          // 발생. 따라서 이를 해결하기 위해 correctWord 를
                //                                          // 당 setter 함수에서 반영하도록 다시 저장.
            });
        }
    }

    // 게임 초기화
    function resetGame() {
        setIntegreatedData({
            ...integreatedData,
            secretWord: '',
            inputsecretWord: '',
            correctWord: '',
            successFailure: false,
        });

        incorrectedCnt.current = 0;
        correctedCnt.current = 0;
    }

    return (
        <div className={`gameBoard ${!secretWord ? 'hidden' : ''}`}>
            <h4>최대 도전 횟수 ({maxChallenge})</h4>
            <h4>남은 도전 횟수 : {maxChallenge - incorrectedCnt.current}</h4>
            <hr />
            <GridLetter integreatedData={integreatedData} />
            <hr />
            <GridBtn selectedLetter={selectedLetter} integreatedData={integreatedData} />
            <GridTryAgain
                successFailure={successFailure}
                outputText={secretWord.length === correctedCnt.current}
                resetGame={resetGame}
            />
        </div>
    );
}

///
function GridLetter({ integreatedData }) {
    const { hiddenWord, correctWord } = integreatedData;

    return (
        <div className="letterFrame">
            {
                hiddenWord.split('').map((letter, i) => {
                    let matchingWord = ''
                    correctWord.includes(letter) ?
                        matchingWord = letter :
                        matchingWord = '';

                    return <span className="letterBox" key={`letter${i}`}>{matchingWord}</span>;
                })
            }
        </div>
    );
}

function GridBtn({ selectedLetter, integreatedData }) {
    const { successFailure, alphabet } = integreatedData

    let hidden = '';

    if (successFailure) {
        hidden = 'hidden';
    }

    return (
        <div className={`btnFrame ${hidden}`}>
            {
                alphabet().map((alpha, i) => {
                    return <button
                        key={`${alpha + i}`}
                        onClick={selectedLetter}
                        className={hidden}
                    >
                        {alpha}
                    </button>
                })
            }
        </div>
    );
}

export { GridLetter, GridBtn };
///
export default function GridTryAgain({ successFailure, outputText, resetGame }) {
const resultText = ['You Failed!!', 'Greate Man!!',];
let hidden = 'hidden';

if (successFailure) {
    hidden = ''
}

return (
    <div className={hidden}>
        <span>{resultText[+outputText]}</span>
        <button onClick={resetGame}>Try Again</button>
    </div>
);
}
import { useState } from "react";

function StartGame({ word, setWord, isStart, setIsStart, buttons, setButtons }) {
    const [value, setValue] = useState('');

    function onChangeInput(e) {
        setValue(e.target.value);
    }

    function onClickButton(e) {
        e.preventDefault();

        if (value) {
            console.log('1. 시작 단어 >> ', value);
            const buttonStringArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

            setWord([...word, ...value.split('')]);
            setButtons([
                ...buttons,
                ...buttonStringArray,
            ]);
            setIsStart(!isStart);
        }
    }

    return (
        <>
            <form>
                <input type="text" value={value} onChange={onChangeInput} placeholder="단어를 입력하세요" />
                <button onClick={onClickButton}>게임 시작</button>
            </form>
        </>
    );
}

export default StartGame;
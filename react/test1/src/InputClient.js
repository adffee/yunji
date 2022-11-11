import { useState } from "react";


function onChangeValue(e) {
    setslist({
        ...list,
        e.target.value,
    })
}

//배열 하나로 만들기 ?
function NameList() {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const namesJSX = [];

    function onChangeInput(e) {
        setName(e.target.value);
    }

    function onClickButton() {
        if (name) {
            setNameList([...nameList, name]);
            setName('');
        }
    }


    //컴포넌트로 빼기 

    for (let i = 0; i < nameList.length; i++) {
        namesJSX.push((<div key={`${nameList[i]}-${i}`}>{nameList[i]}</div>));
    }

    return (
        <>
            <p>&lt; 직원 명단 &gt;</p>
            {namesJSX}
            <input
                style={{ marginTop: '20px' }}
                type="text"
                onChange={onChangeInput}
                value={name}
            />
            <button onClick={onClickButton}>명단 추가</button>
        </>
    );
}

export default NameList;




//도진이

import { useState } from "react";

export default function QUEST() {

    const [name, setName] = useState({
        stName: '',
        stNameValue: '',
    });
    const [list, setlist] = useState([]);

    function onChangeName(e) {
        setName({
            ...name,
            stNameValue: e.target.value,
        });
    }

    function confirm() {
        setName({
            ...name,
            stName: name.stNameValue,
        });
        setlist([...list, (<div>{name.stNameValue}</div>)]);
    }

    return (
        <>
            <div>
                직원명단
            </div>
            <br />
            <div>
                {list}
            </div>
            <br />
            <input type="text" onChange={onChangeName} />
            <button onClick={confirm}>명단추가</button>
        </>
    )
}

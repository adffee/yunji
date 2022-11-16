import { useState, useRef } from 'react';
import './App.css';
import ContentLists from "./ContentLists/ContentLists";
import InputUserInfo from "./InputUserInfo/InputUserInfo";

function App() {
    const [userList, setUserList] = useState([
        {
            serialNum: 2,
            userName: '류승제',
            subject: '괴물만들기',
            content: '야 ~ 밥목고 하자 ~',
        },
        {
            serialNum: 1,
            userName: '박성연',
            subject: '괴롭히기',
            content: '이 바보들아 왜 말을 안들어!!',
        },
    ]);

    const [inputData, setInputData] = useState({      // 입력 데이터의 관리 용이성을 위한 객체.
        userName: '',
        subject: '',
        content: '',
        delSerialNum: '',
    }),
        { userName, subject, content, delSerialNum } = inputData,
        serialNum = useRef(3);                                 // 일련번호 생성.

    function onChangeInput(e) {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });
    }

    function addUserList() {
        if (userName && subject && content) {
            const addUser = {                  // 입력 데이터를 원본 형식에 맞추어
                serialNum: serialNum.current,      // 추가하기 위한 임시 객체 생성.
                userName,
                subject,
                content,
            }

            serialNum.current++;

            /* 
                데이터 추가시 거꾸로 배치.
            */
            setUserList([
                addUser,
                ...userList,
            ])

            setInputData({
                ...inputData,
                userName: '',
                subject: '',
                content: '',
            })
        }
    }

    function removeUserList() {
        if (delSerialNum) {
            setUserList(userList.filter((user) => user.serialNum !== +delSerialNum));

            setInputData({
                ...inputData,
                delSerialNum: '',
            });
        }
    }

    return (
        <div id='noticeboard'>
            <h1>게시판</h1>
            <ContentLists userList={userList} />
            <InputUserInfo
                inputData={inputData}
                onChangeInput={onChangeInput}
                addUserList={addUserList}
                removeUserList={removeUserList}
            />
        </div>
    );
}

export default App;




///////

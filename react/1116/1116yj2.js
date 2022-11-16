import { useState, useRef } from 'react';
import './App.css';
import ContentLists from "./ContentLists/ContentLists";
import InputUserInfo from "./InputUserInfo/InputUserInfo";

function App() {
    const [userList, setUserList] = useState([
        {
            serialNum: 1,
            userName: '박성연',
            subject: '괴롭히기',
            content: '이 바보들아 왜 말을 안들어!!',
        },
        {
            serialNum: 2,
            userName: '류승제',
            subject: '괴물만들기',
            content: '야 ~ 밥목고 하자 ~',
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

            setUserList([
                ...userList,
                addUser,
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



///////////////////
export default function ContentLists({ userList }) {
    return (
        <ul className='listTable'>
            {
                userList.map((user) =>
                    <EachList
                        key={'sn' + user.serialNum}
                        user={user}
                    />
                ).reverse()
            }
        </ul>
    );
}

/* 
    재사용성이 없는 컴포넌트에 대하여 모듈화가 아닌 함수로 처리.
    ContentLists 에서 직접 포함하여 export 하므로 EachList 는
    별도의 export 구문 미필요.
*/
function EachList({ user }) {
    return (
        <li className="eachList">
            <div>{user.serialNum}</div>
            <div>{user.subject}</div>
            <div>{user.userName}</div>
        </li>
    );
}


////////////////

export default function InputUserInfo({ inputData, onChangeInput, addUserList, removeUserList }) {
    const { userName, subject, content, delSerialNum } = inputData;

    return (
        <div className="inputForm">
            {/* label 은 css 에서 block 처리 */}
            <label className="userName">
                사용자
                <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder='한글로만 입력해라'
                    onChange={onChangeInput}
                />
            </label>

            <label className="subject">
                제목
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    placeholder='제목은 파격적으로...'
                    onChange={onChangeInput}
                />
            </label>

            <label className="content">
                글쓰기
                <textarea cols="50" rows="10"
                    name="content"
                    value={content}
                    placeholder='이쁘게 쓰시오...'
                    onChange={onChangeInput}
                ></textarea>
            </label>
            <button onClick={addUserList}>등록</button>

            <label className="delSerialNum">
                삭제 등록번호
                <input
                    type="text"
                    name="delSerialNum"
                    value={delSerialNum}
                    placeholder='삭제할 등록번호 입력해봐라...'
                    onChange={onChangeInput}
                />
            </label>
            <button onClick={removeUserList}>삭제</button>
        </div>
    );
}
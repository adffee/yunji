//app.js
import { useState } from "react";
import Board from "./board";
import Delete from "./delete";
import Form from "./form";
import './index.css';

function App() {
    const [articles, setArticles] = useState([
        { id: 2, title: '졸리다', auther: '김태현' },
        { id: 1, title: '집에 가고 싶다', auther: '김태현' },
    ]);

    return (
        <>
            <div className="board-app">
                <Board articles={articles} />
                <Form articles={articles} setArticles={setArticles} />
                <Delete articles={articles} setArticles={setArticles} />
            </div>
        </>
    );
};

export default App;

///form.js
import { useRef, useState } from "react";

function Form({ articles, setArticles }) {
    const [values, setValues] = useState({
        auther: '',
        title: '',
        content: '',
    });
    const idRef = useRef(3);

    const { auther, title, content } = values;

    function onChangeInput(e) {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    function addArticle(e) {
        e.preventDefault();

        if (auther && title && content) {
            const newArticle = {
                id: idRef.current++,
                auther,
                title,
            };

            setArticles([
                newArticle,
                ...articles,
            ]);

            setValues({
                ...values,
                auther: '',
                title: '',
                content: '',
            });
        }
    }

    return (
        <>
            <form className="add-form">
                <div>
                    <label>사용자
                        <input
                            type="text" name='auther' value={auther}
                            onChange={onChangeInput}
                            placeholder='한글로만 입력하라'
                        />
                    </label>
                </div>
                <div>
                    <label>제목
                        <input
                            type="text" name='title' value={title}
                            onChange={onChangeInput}
                            placeholder='제목은 파격적으로'
                        />
                    </label>
                </div>
                <div>
                    <p>글쓰기</p>
                    <textarea
                        name="content"
                        value={content}
                        onChange={onChangeInput}
                        placeholder='이쁘게 쓰시오...'
                    ></textarea>
                </div>
                <button onClick={addArticle}>등록</button>
            </form>
        </>
    );
}

export default Form;
//delete.js

import { useState } from "react";

function Delete({ articles, setArticles }) {
    const [idValue, setIdValue] = useState('');

    function onChangeValue(e) {
        setIdValue(e.target.value);
    }

    function DeleteArticle(e) {
        e.preventDefault();

        const filteredArray = articles.filter((item) => item.id !== +idValue);
        setArticles(filteredArray);
        setIdValue('');
    }

    return (
        <>
            <form>
                <p>삭제 등록번호</p>
                <input type="text" value={idValue} onChange={onChangeValue} />
                <button onClick={DeleteArticle}>삭제</button>
            </form>
        </>
    );
}

export default Delete;

///board.js

function Board({ articles }) {
    return (
        <>
            <h1>게시판</h1>
            {articles.map((item) => (
                <div>
                    <div>{item.id}</div>
                    <div>{item.title}</div>
                    <div>{item.auther}</div>
                </div>
            ))}
        </>
    );
}

export default Board;

//index.css

/* ==================== 초기화 ==================== */
* {
    margin: 0;
    padding: 0;
}

/* ==================== 게시판 ==================== */
div.board - app {
    display: flex;
    flex - direction: column;
    justify - content: center;
    width: 500px;
    margin: 30px auto 0;
}

div.board - list {
    margin - bottom: 30px;
}

div.board - item {
    display: flex;
    border - bottom: 1px solid #333333;
    line - height: 50px;
}

div.board - item div {
    flex: 1;
}

/* ==================== 입력창 ==================== */
textarea {
    width: 100 %;
    height: 200px;
}

form.add - form {
    margin - bottom: 20px;
}
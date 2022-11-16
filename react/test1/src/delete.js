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
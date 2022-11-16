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
                            placeholder='한글로'
                        />
                    </label>
                </div>
                <div>
                    <label>제목
                        <input
                            type="text" name='title' value={title}
                            onChange={onChangeInput}
                            placeholder='제목'
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
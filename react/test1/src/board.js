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
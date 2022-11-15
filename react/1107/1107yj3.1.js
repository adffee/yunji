function NationContainer({ number, setNumber }) {
    const numbers = [1, 2, 3, 4, 5];

    function onClickButton(e) {
        e.preventDefault();

        setNumber(parseInt(e.target.textContent - 1));
    }

    return (
        <div className="nation_container">
        {numbers.map((item, index) => (
            <a
            key={item + index}
            href="/"
            className={`nationBox nation${item}`}
            onClick={onClickButton}
            style={{opacity: (parseInt(number) === index) ? '1' : '.5'}}
            >
            {item}
            </a>
        ))}
        </div>
    );
}

export default NationContainer;

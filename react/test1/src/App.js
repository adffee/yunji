import { useState } from "react";
import NationContainer from "./NationContainer";

function App() {
    const [number, setNumber] = useState('1');

    return (
        <>
            <div id="main_container">
                <img src={`./images/img${number}.jpg`} alt={`img${number}`} />
                <NationContainer number={number} setNumber={setNumber} />
            </div>
        </>
    );
}

export default App;

import './App.css';
import { useState } from 'react';
import NationContainer from './NationContainer/NationContainer';

function App() {
    const imgList = [
        './images/bg1.jpg',
        './images/bg2.jpg',
        './images/bg3.jpg',
        './images/bg4.jpg',
        './images/bg5.jpg',
    ],
        [selectedIdx, setSelectedIdx] = useState(0);

    function changeSelect(e) {
        e.preventDefault();
        setSelectedIdx(e.target.textContent - 1);
    }

    return (
        <div className='main_container'>
            <img src={imgList[selectedIdx]} alt="imgBox" />
            <NationContainer
                imgSize={imgList.length}
                selectedIdx={selectedIdx}
                changeSelect={changeSelect}
            />
        </div>
    );
}

export default App;


//태현

// import { useState } from "react";
// import NationContainer from "./components/NationContainer";

// function App() {
//     const [number, setNumber] = useState(0);
//     const images = [
//         './images/img1.jpg',
//         './images/img2.jpg',
//         './images/img3.jpg',
//         './images/img4.jpg',
//         './images/img5.jpg',
//     ];

//     return (
//         <>
//             <div id="main_container">
//                 <img src={images[number]} alt={`img${number + 1}`} />
//                 <NationContainer number={number} setNumber={setNumber} />
//             </div>
//         </>
//     );
// }

// export default App;


export default function NationContainer({ imgSize, selectedIdx, changeSelect }) {
    let nationBox = new Array(imgSize).fill(0);

    nationBox = nationBox.map((el, i, na) => {
        const opacity = selectedIdx === i ? '1' : '.5';

        return <a
            href="/"
            key={`nation${i}`}
            className={`nationBox nation${i + 1}`}
            style={{ opacity }}
            onClick={changeSelect}
        >
            {i + 1}
        </a>;
    })

    return (
        <div className="nation_container">
            {nationBox}
        </div>
    );
}

// 태현
// function NationContainer({ number, setNumber }) {
//     const numbers = [1, 2, 3, 4, 5];

//     function onClickButton(e) {
//         e.preventDefault();

//         setNumber(parseInt(e.target.textContent - 1));
//     }

//     return (
//         <div className="nation_container">
//             {numbers.map((item, index) => (
//                 <a
//                     key={item + index}
//                     href="/"
//                     className={`nationBox nation${item}`}
//                     onClick={onClickButton}
//                     style={{ opacity: (parseInt(number) === index) ? '1' : '.5' }}
//                 >
//                     {item}
//                 </a>
//             ))}
//         </div>
//     );
// }

// export default NationContainer;
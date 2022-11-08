// export default function NationBox({ number }) {
//     return (
//         <a href="#" className={`nationBox nation${number}`}>{number}</a>
//         );
// }

///선생님 코드 

export default function NationBox({nationNum}) {
    return <a href="." className={`nationBox nation${nationNum}`}>{nationNum}</a>
;
}
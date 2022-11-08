// import NationBox from "./NationBox";
// import NationContainer from './NationContainer';

// export default function NationContainer() {
//     return (
//         <div className="nation_container">
//             <NationBox number='1'/>
//             <NationBox number='2'/>
//             <NationBox number='3'/>
//             <NationBox number='4'/>
//             <NationBox number='5'/>
//         </div>
//         );
// }

////선생님 코드 
import NationBox from "./NationBox"

export default function NationContainer() {
    return(
        <div className="nation_container">
            <NationBox nationNum='1'/>
            <NationBox nationNum='2'/>
            <NationBox nationNum='3'/>
            <NationBox nationNum='4'/>
            <NationBox nationNum='5'/>
        </div>
    )
}
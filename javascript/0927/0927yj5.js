'use strict'

// let num1, num2, num3;

// num1 = +prompt('밀수 : ');
// num2 = +prompt('지수 : ');

// if (num1 ,num2 >0) {
    //     alert(`${num1}의 ${num2}승은 ${num3}입니다.`);
    
    // } else {
        //     alert('음순디요');
        // }
        
        

// let num1, num2, num3;        
// num3 = 1; 

// do{
//     num1 = +prompt('밀수 : ');
//     if(num1>=0){
//         num2 = +prompt('지수 : ');  
//         if(num2>=0){
//             break;
//         }
//     }
    
//     alert('음순디요');
// } while(1);

// for( let i = 0; i<num2; i++){
//     num3 = num3 * num1;
// }
// alert(`${num1}의 ${num2}승은 ${num3}입니다.`);


let un, up;
let p = 1;
for(; ;){
    un =  +prompt('밀수 : ');
    if(un >= 0) {
        up =  +prompt('지수 : ');
        for (let i = 0; i < up; i++){
        p *= un;
        }
        break;
    }
    alert(`음수가 입력되었습니다. 재입력 바랍니다.`);
}
alert(`${un}의 ${up}승은 ${p}입니다.`);
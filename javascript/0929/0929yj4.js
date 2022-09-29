'use strict';

// const a = [90,80,70,60,50];
// let min = a[0], max = a[0], t=0; 

// for(let i = 0; i<a.length; i++){

//     if(a[i]>max) {max = a[i];}
//     if(a[i]<min) {min = a[i];}
//     t += a[i];

//     if(i>3){
//         document.write(`배열의 ${i+1}번째 : ${a[i]} `);

//     } else{
//     document.write(`배열의 ${i+1}번째 : ${a[i]}, `);
//     }
// }


// document.write(`<br/>입력한 정수 중 최댓값 : ${max}`);
// document.write(`<br/>입력한 정수 중 최솟값 : ${min}`);
// document.write(`<br/>입력한 정수 총합 : ${t}`);


// const a = new Array(5);

// let min = 100 , max = 0, t=0; 

// for(let i =0,sc; i<a.length; i++){
//     sc = +prompt(`배열의 ${i+1}번째 요소 입력 :`)
//     a[i] = sc;
//     if(a[i]>max) {max = a[i];}
//     if(a[i]<min) {min = a[i];}
//     t += a[i];

//     if(i>3){
//         document.write(`배열의 ${i+1}번째 : ${a[i]} `);

//     }else{
//     document.write(`배열의 ${i+1}번째 : ${a[i]}, `);
//     }
// }



// document.write(`<br/>입력한 정수 중 최댓값 : ${max}`);
// document.write(`<br/>입력한 정수 중 최솟값 : ${min}`);
// document.write(`<br/>입력한 정수 총합 : ${t}`);


const a = new Array(5);

let min = 100 , max = 0, t=0; 

for(let i =0,sc; i<a.length; i++){
    sc = +prompt(`배열의 ${i+1}번째 요소 입력 :`)
    a[i] = sc;

}

for(let i =0; i<a.length; i++){
    if(a[i]>max) {max = a[i];}
    if(a[i]<min) {min = a[i];}
    t += a[i];

    if(i>=a.length-1){
        document.write(`배열의 ${i+1}번째 : ${a[i]} `);

    }else{
    document.write(`배열의 ${i+1}번째 : ${a[i]}, `);
    }
}



document.write(`<br/>입력한 정수 중 최댓값 : ${max}`);
document.write(`<br/>입력한 정수 중 최솟값 : ${min}`);
document.write(`<br/>입력한 정수 총합 : ${t}`);




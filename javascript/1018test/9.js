'use strict';

const array1 = [20, 10, 5, 52, 64, 34, 75, 16, 85, 50];
const array2 = [34, 65, 84, 46, 69, 97, 20, 42, 67, 30];
const result = [];

// 두개의 배열이 있다. 두 배열이 가진 요소를 이용해서 요소의 합을 담은 배열을 만드는 프로그램을 구현하라.
// ex) 인덱스 0끼리 더한 값 20 + 34 + 54
// [54, ...]


for (let i = 0; i < array1.length; i++){
    result[i] = array1[i] + array2[i];
}
console.log(`${result}`)


//도진이거

// const array3 = [20, 10, 5, 52, 64, 34, 75, 16, 85, 50];
// const array4 = [34, 65, 84, 46, 69, 97, 20, 42, 67, 30];
// const result = [];

// // 두개의 배열이 있다. 두 배열이 가진 요소를 이용해서 요소의 합을 담은 배열을 만드는 프로그램을 구현하라.
// // ex) 인덱스 0끼리 더한 값 20 + 34 + 54
// // [54, ...]

// for (let i = 0; i < array3.length; i++) {
//     result[i] = array3[i] + array4[i];
// }
// console.log(result);

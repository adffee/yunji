
'use strict';

// let a1 = [1, 2, 3], a2 = [11, 12, 13], a3 = [21, 22, 23];
// let resultAr;

// function joinAr(...arrays) {
//     resultAr = arrays;
// }

// joinAr(a1, a2, a3);

// for (let i = 0; i < resultAr.length; i++) {
//     console.log(resultAr[i]);
// }



// let a1 = [1, 2, 3],
//     a2 = [11, 12, 13],
//     a3 = [21, 22, 23];

// let resultAr;

// function joinAr(...arrays) {

//     resultAr = arrays;
// }

// joinAr(a1, a2, a3);

// for (let i = 0; i < resultAr.length; i++) {
//         console.log(resultAr[i]);
// }



'use strict';

let a1 = [1, 2, 3], a2 = [11, 12, 13], a3 = [21, 22, 23];


function joinAr(...arrays) { // 2차원 배열 생성
    return arrays;
}


function print(array) { // 2차원 출력
    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
}

print(joinAr(a1, a2, a3));





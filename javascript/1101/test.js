// export default function print() {
//     console.log('이 바보 똥깨들아!! ');
// }

function test() {
    let n = 5;

    return function(){
        return n++;
    }
}

const output = test();

console.log(output());

const output2 = test();

console.log(output2());
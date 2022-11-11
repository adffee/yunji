const obj = {
    a: 1,
    b: 2,
    c: 3,
};

let { a, b, c } = obj;
console.log(`a=${a}, b=${b},c=${c}`);

let { a: cpA, b: cpB, c: cpC } = obj;
console.log(`cpA=${cpA},cpB=${cpB},cpC=${cpC}`);

let cpObj1 = {
    ...obj,
};
console.log(cpObj1);

let cpObj2 = {
    ...obj,
    d: 4,
};
console.log(cpObj2);

let cpObj3 = {
    ...obj,
    a: 15,
};
console.log(cpObj3);
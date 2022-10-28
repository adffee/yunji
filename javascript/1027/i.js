

const string = `M$geqi2$M$we{2$M$gsruyivih2`;
let code = '';

console.log(string);

for (let i in string) {
    console.log(String.fromCodePoint(string[i].codePointAt() - 4));
    code += String.fromCodePoint(string[i].codePointAt() - 4);
}
console.log(code);
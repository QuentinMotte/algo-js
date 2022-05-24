const readlineSync = require("readline-sync");
let array = [];
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(rand10(1, 11));
rand10();

function multiRand(n) {
    let question = readlineSync.question(
        "Can u give me a number for the array ?"
    );
    n = question;
    for (let i = 0; i < n; i++) {
        array.push(rand10(1, 11));
    }
    console.log(array);
}
multiRand();

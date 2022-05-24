const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question(
    "Can you give a number with two decimal part ?"
);
let secondNumber = readlineSync.question(
    "Can you give a second number with also two decimal part ? I will multiply them for u !"
);
console.log(Math.round(firstNumber) * secondNumber);

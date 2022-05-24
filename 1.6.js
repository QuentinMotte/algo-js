const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Can u give me one integer number ?");
let secondNumber = readlineSync.question(
    "Can u give me a second integer number ? "
);
let restOfTheDivision = firstNumber / secondNumber;
console.log(restOfTheDivision);

let array = ["hello", "world", "this", "is", "great"];

const sumOfWords = array.reduce(
    (previousValue, currentValue) => `${previousValue} ${currentValue}`
);
let final = `"${sumOfWords}"`;
console.log(final);

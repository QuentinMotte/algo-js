const readlineSync = require("readline-sync");
let firstArray = [1, 2, 3, 4, 5];
let sum = 0;
let array = [];
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function average(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (average = sum / arr.length);
}
// console.log(average(firstArray));

function min(arr) {
    return Math.min(...arr);
}
// console.log(min(firstArray));

function max(arr) {
    return Math.max(...arr);
}
// console.log(max(firstArray));

function multiRand(n) {
    let question = readlineSync.question(
        "Can u give me a number for the array ?"
    );
    n = question;
    for (let i = 0; i < n; i++) {
        array.push(rand10(1, 11));
    }
    console.log(array);
    console.log(average(array));
    console.log(min(array));
    console.log(max(array));
}

multiRand();

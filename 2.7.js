const readlineSync = require("readline-sync");
const numberOfNumberAsked = readlineSync.question(
    "Can you enter a number to tell me how many numbers you will enter later ? "
);
let array = []; // -> pour stocker les valeurs
let sum = 0;
//
//stocker les valeurs dans un array
for (let i = 0; i < numberOfNumberAsked; i++) {
    const newNumber = readlineSync.question("Enter a new number please ");
    // console.log(newNumber);
    array.push(newNumber);
    // console.log(array);
}
//
//convertir l'array en nombre
let newArray = array.map(Number);
// console.log(newArray);
//
//additionner le nouvel array
for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
}
console.log(`The sum of your numbers is ${sum}`);

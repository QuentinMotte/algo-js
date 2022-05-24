const readlineSync = require("readline-sync");

let userName = readlineSync.question("What's your name ?");
let userFirstName = readlineSync.question("What's your first name ?");
let userCity = readlineSync.question("where do you live ?");
console.log(`Hello ${userName} ${userFirstName} who lives in ${userCity}`);

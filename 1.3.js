const readlineSync = require("readline-sync");
let userName = readlineSync.question("What's your first name ?");
console.log("Hello " + userName);

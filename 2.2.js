const readlineSync = require("readline-sync");

function ageFunction() {
    let minAge = readlineSync.question("Can u give me a minimum age ?");
    let maxAge = readlineSync.question("Can u give me a maximum age ?");
    if (minAge > maxAge) {
        console.log("You don't understand anything !");
        return true;
    } else if (currentAge < maxAge && currentAge > minAge) {
        let currentAge = readlineSync.question("Can u give me a current age ?");
        console.log(currentAge);
    }
}
ageFunction();

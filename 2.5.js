const readlineSync = require("readline-sync");
let userFavoriteNumber = 42;
let secondChance;
let firstNumberOfTheUser = readlineSync.question("Can you give me a number ?");
function guesseNumber() {
    do {
        let numberOfTheUser = readlineSync.question("Are you sur ?");
        let secondChance = numberOfTheUser;
        if (secondChance != 42) {
            numberOfTheUser;
            // console.log(numberOfTheUser);
        } else if ((secondChance = numberOfTheUser)) {
            return console.log("yeah that's right");
        }
    } while ((secondChance = userFavoriteNumber));
}
guesseNumber();

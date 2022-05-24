const readlineSync = require("readline-sync");

function calcSurface() {
    let length = readlineSync.question(
        "Can you dive me the length of the rectangle ?"
    );
    let width = readlineSync.question(
        "Can you dive me the width of the rectangle ?"
    );
    let surface = length * width;
    console.log(`The surface of the rectangle is ${surface}`);
}
calcSurface();

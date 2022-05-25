const readlineSync = require("readline-sync");
let anotherCastMembers = "";
let cast = [];
function askTvSerie() {
    let nameTvSerie = readlineSync.question(
        "can you give the name of your favorite TV serie ?"
    );
    let productionTvSerie = readlineSync.question(
        "can you give me the production year of this serie ?"
    );

    do {
        let castMembers = readlineSync.question(
            "can you give the name of the cast members of this serie ?"
        );
        cast.push(castMembers);
        anotherCastMembers = readlineSync.question(
            "Do you want to add another actor ? y / n"
        );
    } while (anotherCastMembers !== "n");

    return {
        "Name of the serie": nameTvSerie,
        "Production year": productionTvSerie,
        "cast members": cast,
    };
}
// askTvSerie();

console.log(JSON.stringify(askTvSerie()));

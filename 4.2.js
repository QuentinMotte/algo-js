function rand10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(rand10(1, 11));
rand10();

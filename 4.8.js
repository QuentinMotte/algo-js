let queueTime = (array, n) => {
    if (n === 1) {
        return console.log(array.reduce((a, b) => a + b, 0));
    } else {
        if (Math.max(...array) > array[array.length - 1]) {
            return console.log(Math.max(...array));
        } else {
            return console.log(Math.max(...array) + Math.min(...array));
        }
    }
};

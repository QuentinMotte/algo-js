let array = [1, -4, 7, 12];
let sum = 0;
array = array.filter(function (x) {
    return x > -1;
});
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [100, 101, 102];
let sumFirstArray = 0;
let sumSecondArray = 0;

for (let i = 0; i < firstArray.length; i++) {
    sumFirstArray += firstArray[i];
}
for (let i = 0; i < secondArray.length; i++) {
    sumSecondArray += secondArray[i];
}
console.log(
    `somme du premier array = ${sumFirstArray} et somme du second array = ${sumSecondArray}`
);

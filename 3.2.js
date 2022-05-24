let firstArray = [1, 2, 3, 4, 5];
let secondArray = [100, 101, 102];

let sumFirstArray = 0;
let sumSecondArray = 0;

//Somme des tableaux
for (let i = 0; i < firstArray.length; i++) {
    sumFirstArray += firstArray[i];
}
for (let i = 0; i < secondArray.length; i++) {
    sumSecondArray += secondArray[i];
}

//moyenne des tableaux

let averageFirstArray = sumFirstArray / firstArray.length;
let averageSecondArray = sumSecondArray / secondArray.length;
console.log(
    `moyenne du premier array = ${averageFirstArray} et moyenne du second array = ${averageSecondArray}`
);

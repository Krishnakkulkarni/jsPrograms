
let readline = require('readline-sync');

let number = readline.questionInt(`enter the number to be searched : `);
let array = [1, 3, 2, 5, 4, 6, 8, 9, 7];

function binary(array, number) {
    try {
        let start = 0;
        let end = array.length - 1;
        let middle = Math.floor((start + end) / 2);
        while (array[middle] !== number && start <= end) {
            if (array[middle] < number) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
            middle = Math.floor((start + end) / 2);
        }
        return middle;
    }
    catch (error) {
        console.log(error.message);
    }
}

let result = binary(array, number);

if (result < 0) {
    console.log("not found");
    return
}
console.log("found at index:" + result);

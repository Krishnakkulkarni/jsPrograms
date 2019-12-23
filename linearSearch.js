
let readline = require('readline-sync');

let number = readline.questionInt(`enter the number to be searched : `);
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(array, number) {
    try {
        for (let index = 0; index < array.length; index++) {
            if (array[index] === number) {
                return index;
            }
        }
        return -1;
    } catch (error) {
        console.log(error.message);
    }
}
let result = linearSearch(array, number);
console.log(result);

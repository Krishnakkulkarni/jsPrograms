// Coupon Numbers
// a. Desc -> Given N distinct Coupon Numbers, how many random numbers do you
// need to generate distinct coupon number? This program simulates this random
// process.
// b. I/P -> N Distinct Coupon Number
// c. Logic -> repeatedly choose a random number and check whether it's a new one.
// d. O/P -> total random number needed to have all distinct numbers.
// e. Functions => Write Class Static Functions to generate random number and to
// process distinct coupons.

let readline = require(`readline-sync`);
let number = readline.questionInt(`Enter the number: `);
let array = [];
function coupon(number) {
    try {
        if (number !== undefined && number !== null) {
            for (let index = 0; index < number; index++) {
                array[index] = Math.floor(Math.random() * number);
                for (let j = 0; j < index; j++) {
                    if (array[index] == array[j]) {
                        index--;
                    }
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
coupon(number);
console.log(`Coupon numbers are : ${array}`);

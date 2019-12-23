// Harmonic Number
// a. Desc -> Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
// (http://users.encs.concordia.ca/~chvatal/notes/harmonic.html).
// b. I/P -> The Harmonic Value N. Ensure N != 0
// c. Logic -> compute 1/1 + 1/2 + 1/3 + ... + 1/N
// d. O/P -> Print the Nth Harmonic Value.

let readline = require(`readline-sync`);

let number = readline.questionInt("Enter the Nth harmonic number : ");
let sum = 0;
function harmonic(number) {
  try {
    if (number > 0) {
      for (let index = 1; index <= number; index++) {
        sum += 1 / index;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
harmonic(number);
console.log(`The nth harmonic number = ${sum}`);

var read = require('readline-sync')

/* function onSuccess() {
    console.log('success!');
}

function onError() {
    console.log('error');
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(), 9000
     });
});
promise.then(onSuccess);
promise.catch(onError);

let arr = array.map((value)=>
{
    return value;
})
console.log(arr); */

/* console.log("for loop");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
} 

console.log("for each");
array.forEach(element => {
    console.log(element);
});

console.log("for of");
for (const iterator of array) {
    console.log(iterator);
} */

/* let object = { 'a':'1', 'b':'2', 'c':'3'}

console.log("for in");
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        console.log(element);
    }
} */

// async function fun() {
//     try {
//         let rank = await getRank();
//         return rank;
//     } catch (error) {
//         return "error" + error
//     }
// }

// async function getRank() {
//     return await Promise.resolve(1)
// }
// console.log(fun());

// let hello = async function () { return "Hello" };
// hello().then((value) => console.log(value))
// console.log(hello())

/* program to accept number or string.
if it is a number do check number is even or odd
if it is a string do check the length of the string */
/* let input = read.question('enter the number to check odd or even OR\nenter the string to check its length: ');
function oddAndEven(input) {
    try {
        if (isNaN(input) == true) {
            console.log(`length of the string is ${input.length}`);
        }
        else {
            if (input % 2 == 0) {
                console.log(`${input} is even`);
            } else {
                console.log(`${input} is odd`);
            }
        }
    }
    catch (error) {
        return 'error' + error;
    }
}
oddAndEven(input);*/

function name(a, b = 1) {
    return a + b; 
}
console.log(name(2));
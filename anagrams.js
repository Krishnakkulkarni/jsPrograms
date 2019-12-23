// An Anagram Detection Example
// a. Desc -> One string is an anagram of another if the second is simply a
// rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
// b. I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
// c. O/P -> The Two Strings are Anagram or not....

let readline = require(`readline-sync`);
let notFound = 0;
let found = 0;
let s1 = [];
let s2 = [];
s1 = readline.question(`Enter first string: `);
s2 = readline.question(`Enter second string: `);
function anagram(s1, s2) {
    try {
        if (s1.length === s2.length) {
            let sl = s1.length;
            for (let i = 0; i < sl; i++) {
                for (let j = 0; j < sl; j++) {
                    if (s1[i] === s2[j]) {
                        found = 1;
                        break;
                    }
                }
                if (found == 0) {
                    notFound = 1;
                    break;
                }
            }
            if (notFound == 1) {
                console.log(`Strings are not anagrams`);
            }
            else {
                console.log(`Strings are anagrams`);
            }
        }
        else {
            console.log(`Strings length should be same`);
        }
    } catch (error) {
        console.log(error.message);
    }
}
anagram(s1, s2);

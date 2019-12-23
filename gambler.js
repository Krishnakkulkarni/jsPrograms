// Gambler
// a. Desc -> Simulates a gambler who start with $stake and place fair $1 bets until
// he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number
// of times he/she wins and the number of bets he/she makes. Run the experiment
// N times, averages the results, and prints them out.
// b. I/P -> $Stake, $Goal and Number of times
// c. Logic -> Play till the gambler is broke or has won
// d. O/P -> Print Number of Wins and Percentage of Win and Loss.

let readline = require(`readline-sync`);

let stack = readline.questionInt(`enter stack: `);
let goal = readline.questionInt(`enter goal: `);
let numberOfTimes = readline.questionInt(`enter number of times: `);
function gambler(stack, goal, numberOfTimes) {
    try {
        let bets = 0, wins = 0;
        for (let index = 0; index < numberOfTimes; index++) {
            let cash = stack;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() > 0.5) {
                    cash++;
                } else {
                    cash--;
                }
            }
            if (cash == goal) {
                wins++;
            }
        }
        let winPercentage = wins * 100 / numberOfTimes;
        let lossPercentage = 100 - winPercentage;
        console.log(wins + ' wins from ' + numberOfTimes);
        console.log(bets + ' times beaten');
        console.log('wining percentage is ' + winPercentage + '%');
        console.log('lossing percentage is ' + lossPercentage + '%');
    }
    catch (error) {
        console.log(error.message);
    }
}
gambler(stack, goal, numberOfTimes);
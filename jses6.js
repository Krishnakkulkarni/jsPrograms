// var message = `hello world`
// console.log(message);
// array = [5, 54, 4, 6, 0, 3]
// var name = function () {
//     array.forEach(element => {
//         console.log(`${element}`);
//     });
// }
// name();

// let number = 0;
// let wt = number > 0 ? true : false
// console.log(wt);
var msg = (msg) => {
    var m = (m) => {
        var s = (s) => {
            var g = (g) => {
                console.log(`function invoked g${g > 1 ? true : false}`)
            }
            g(1)
            console.log(`function invoked s${s > 1 ? true : false}`)
        }
        s(2)
        console.log(`function invoked m${m > 1 ? true : false}`)
    }
    m(3)
    console.log(`function invoked msg${msg > 1 ? true : false}`)
}
msg(4) 

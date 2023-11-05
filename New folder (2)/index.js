// (function abc() {
//     console.log("hello");
// })()
// function bac(){
//     console.log("heoo");
// }
// abc()

// function abc(timeout, count) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(count);
//             res()
//         }, timeout);
//     })
// }
// abc(1000, 1).then(() => {
//     abc(2000, 2)
// })

let word = "i am dinesh kumar"
let arr = arr.splict(" ")
let w = [];
for (let i = 0; i < arr.length; i++) {
    if (w.length < arr.length) {
        w = arr[i]
    }
}
console.log(w);
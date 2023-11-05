console.log("Welcome");
let String1 = "hello I am Dinesh from Prepbytes"
let arr = String1.split(" ");
let longest = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
console.log(longest);
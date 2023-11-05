// function hello() {
//     let work = true;
//     let promise = new Promise((done, err) => {
//       if (work) {
//         done(
//           setTimeout(() => {
//             console.log("1");
//             setTimeout(() => {
//               console.log("2");
//               setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                   console.log("4");
//                   setTimeout(() => {
//                     console.log("5");
//                     setTimeout(() => {
//                       console.log("6");
//                       setTimeout(() => {
//                         console.log("7");
//                       }, 7000);
//                     }, 6000);
//                   }, 5000);
//                 }, 4000);
//               }, 3000);
//             }, 2000);
//           }, 1000)
//         );
//       }
//     });
//     promise.then((data) => console.log(data));
//   }
//   hello();

// let pro1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("1");
//   }, 1000);
// });
// let pro2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("2");
//   }, 2000);
// });
// let pro3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("3");
//   }, 3000);
// });
// let pro4 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("4");
//   }, 4000);
// });
// let pro5 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("5");
//   }, 5000);
// });

// Promise.all([pro1, pro2, pro3, pro4, pro5]).then((b) => {
//   console.log(b);
// });

// function Person(name, age, course) {
//   this.Name = name;
//   this.Age = age;
//   this.Course = course;
// }
// // Person.prototype.Location = "Patna";

// let Person1 = new Person("EA23", 23, "MERN");
// let Person2 = new Person("EA24", 23, "MERN");
// Person2.add = "Delhi";
// console.log(Person1);
// console.log(Person2);

// filet  map

// let arr = [2, 5, 7, 8, 9];

// arr.map((ele) => {
//   if (ele % 2 == 0) {
//     console.log(`number is even ${ele}`);
//   } else {
//     console.log(`number is odd ${ele}`);
//   }
// });
// let c = arr.filter((ele) => {
//   if (ele > 5) {
//     return ele;
//   }
// });
// console.log(c);

// async/await

// async function dinesh() {
//   let api = await fetch(`https://api.github.com/users`);
//   console.log(api);
// }
// dinesh();

// .Give an example of inheritance using function constructor

// function dinesh(name, ghar, roll) {
//   (this.name = name), (this.ghar = ghar), (this.roll = roll);
// }
// dinesh.room = "123";
// let dinesh2 = new dinesh("rk", "ismailpur", 23);
// console.log(dinesh2);

// . Please explain Self Invoking Function and its code ?

// (function (a, b) {
//   console.log(a + b);
// })(2, 5);

// DOM

// 1.Create a button , on click of which it adds a new Heading
// tag h1 with text as "MERN stack".
// let button = document.createElement("button");
// button.innerHTML = "Button";
// let body = document.getElementsByTagName("body");
// body[0].appendChild(button);
// button.setAttribute("style", "backgroung-color:red");
// button.setAttribute("style", "color:white");
// button.addEventListener(`click`, () => {
//   let Head1 = document.createElement("h1");
//   Head1.innerHTML = "MERN stack";
//   body[0].appendChild(Head1);
// });

// 2.Write code to get 1st H1 element from a webpage using DOM
// let h1 = document.querySelector("h1");
// let h2 = document.getElementsByTagName("h1")[0];
// let h3 = document.querySelectorAll("h1")[0];
// console.log(h2);
// console.log(h1);
// console.log(h3);
// document.write(h1);
// document.write(h2);
// document.write(h3);

// 3.Write code to implement timer clock using JS --
//  display HH:MM:SS -- the time should
// keep updating every second

// let tiembox = document.querySelector("h1");

// function getTime1() {
//   let time = new Date().toLocaleTimeString();
//   let time2 = new Date().toLocaleDateString();
//   let time3 = new Date().toLocaleString();
//   tiembox.innerHTML = `${time} `;
//   setInterval(() => {
//     getTime1();
//   }, 1000);
// }
// getTime1();

// 4.Create an HTML page having content as
// Hello world and a button named Replace
// Text. When user will click on this button
//  page content should be changed to "Welcome to
// Elevation academy"

// let body = document.querySelector("body");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello Dinesh";

// let button = document.createElement("button");
// button.innerText = "Replace Text";
// let count = 0;
// body.appendChild(h1);
// body.appendChild(button);
// button.addEventListener(`click`, () => {
//   if (count % 2 == 0) {
//     h1.innerHTML = "Welcome to Elevation academy";
//     count++;
//   } else {
//     h1.innerHTML = "Hello Dinesh";
//     count--;
//   }
// });

// 5. Create an HTML page having content as Hello world
//  and a button named "Hide
// Text." When user will click on this button hide the
// "Hello World" text

// let body = document.querySelector("body");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello Dinesh";

// let button = document.createElement("button");
// button.innerText = "Hide Text";
// let count = 0;
// body.appendChild(h1);
// body.appendChild(button);
// button.addEventListener(`click`, () => {
//   if (count % 2 == 0) {
//     h1.setAttribute("style", "display:none");
//     count++;
//   } else {
//     h1.setAttribute("style", "display:block");
//     count--;
//   }
// });

// 1. Given an array of 0's and 1's find out number of 0's

// let zerosArray = [];
// let OnesArray = [];

// function dinesh(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zerosArray.push(arr[i]);
//     } else if (arr[i] === 1) {
//       OnesArray.push(arr[i]);
//     }
//   }
//   console.log(`no of zeros is :- ${zerosArray.length}`);
//   console.log(`no of ones is :- ${OnesArray.length}`);
// }
// dinesh([5, 6, 1, 1, 1, 0, 0, 2, 0, 3, 1]);

// 2. Given an array find out total no. of odd and even nos.

// let odd = [];
// let even = [];

// function dinesh(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
//   console.log(`no of even is :- ${even.length}`);
//   console.log(`no of odd is :- ${odd.length}`);
// }
// dinesh([5, 6, 1, 1, 1, 0, 0, 2, 0, 3, 1]);

// . Given a string find out number of vowels

// let count = 0;
// let str = "dinesh";
// str.split("").map((x) => {
//   if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
//     count++;
//   }
// });
// console.log(count);

// js  Start

// q1. Difference between “ == “ and “ === “ operators.
// ans:-
// dauble equalto compare value only not data type and triple
// equelto compare both value and data type

// let a = 10;
// let b = "10";

// if (a == b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (a === b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// q2. What is a spread operator?
// ans:- in javaScript spread operator allow you to copy
// the all Element of an exiting  oject and array
// to another object or array

// The JavaScript spread operator (...) allows us to destructure the non-primitive data types like
// arrays and objects to access the elements individually

// let a = [4, 5, 8, 9];
// // let b = { name: "Dinesh", roll: 215 };
// let ak = [8, 9, 7, 6];
// let c = [...a, ...ak];
// console.log(c);

// q3. What are the differences between var, let and const?
// ans:-
// var =:- if we are declareing the variable using var
// keyword then its have reclerastion reinitialsation
// var a;
// var a;
// var a = 10;
// var a = 20;
// console.log(a);
// let :- if we are declareing the variable using let
// keyword then its have  reinitialsation not reclerastion
// let a;

// a = 10;
// a = 20;
// console.log(a);
// const:-  if we are declareing the variable using const
// keyword then its dont  have  reinitialsation and reclerastion
// const c = 20;

// console.log(c);

// 4. What is execution context?

// ans:- when javaScript scan the script file
// then its create a envoirment to excute the js file
// this envoirment is colled excution context

// there are two type of execution context in js
// 1. Global execution context
// i. creating phase
// ii. execution phase
// 2. function execution context

// q5. What is meant by first class functions

// ans:- a function assign to a variable is colled
// first class function

// let c = function () {
//   console.log("First class function");
// };
// c();

// 5.What are closures?
// in js closure is a mechnism its allow you to innner function is
// abale to acces the outer function variable

// function outer() {
//   var out = 10;
//   function inner() {
//     console.log(out);
//   }
//   inner();
// }
// outer();
// output();

// 6.Explain call(), apply() and, bind() methods
// call :- in call all necesary to pass first parameter is object and
// outer pass indivisualy
// apply :- in apply necesary to pass first parameter is object and rest
// of the form of an array Elements
// bind:- bind parameter is simmmilar to call but its return a
// new function

// const person = {
//   name: "ea23",
//   roll: 25,
//   add: "gaya",
// };
// function display(greet, greet1) {
//   console.log(
//     `${this.name} : ${this.roll} : ${this.add} :- ${greet}:_ ${greet1}`
//   );
// }
// display.call(person, "hello ", "Dinesh");
// display.apply(person, ["apply", "ganesh"]);
// let result = display.bind(person, "hii", "pal");
// result();
// 7. Explain prototypes
// ans:- prototypes is an objects that are assosiated with every objects
// ist use for add something using object,prototypes
// function ObjProto(brand, cast, id) {
//   (this.brand = brand), (this.cast = cast), (this.id = cast);
// }
// const obj1 = new ObjProto();
// const obj2 = new ObjProto();

// ObjProto.prototype.gen = "male";
// console.log(obj1.gen);
// 8.What are promises and why do we need them?
// ans:- Promise is use to handle the acyns operation in js
// it is also use to handle the error

// let newPromise = new Promise((resolve, reject) => {
//   let c = "prep";
//   let d = "preqp";
//   if (c == d) {
//     resolve(c);
//   } else {
//     reject("rej");
//   }
//   console.log("resolved");
// });
// newPromise
//   .then((x) => {
//     console.log(x);
//     console.log("finished");
//   })
//   .catch((x) => {
//     console.log("error");
//     console.log(x);
//   });

// 9.What is the purpose of async/await keywords?

// ans:- await keywords is use to pause the async function
// until unless Promise give the result resolve and rejected

// async function func() {
//   return new Promise(async (resolve, rej) => {
//     let api = await fetch("https://api.github.com/users");
//     console.log(api);
//   });
// }
// func();
// l1();
// 10.What are constructor functions in JS?
// constructor functions is a way to declearing a object using function

// 11.What is hoisting?
// ans:- declearing the constructure using function is called
// function constructor

// console.log(b);
// var b;

// Start from end

// let str = "dineshpal";
// let ct = str.split("");
// let c = 0;
// for (let i = 0; i < ct.length; i++) {
//   if (
//     ct[i] === "a" ||
//     ct[i] === "e" ||
//     ct[i] === "i" ||
//     ct[i] === "o" ||
//     ct[i] === "u"
//   ) {
//     c++;
//   }
// }
// console.log(` vowel count is : ` + c);

// 2. Given an array find out total no. of odd and even nos

// let num = [5, 4, 7, 8, 5, 65, 6, 5];
// let odd = 0;
// let even = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 === 0) {
//     even++;
//   } else if (num[i] % 2 === 1) {
//     odd++;
//   }
// }
// console.log(`odds number is ${odd} and even number is ${even}`);

// 1. Given an array of 0's and 1's find out number of 0's

// let arr = [0, 5, 8, 2, 0, 0, 5];
// let c = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     c++;
//   }
// }
// console.log(`0's count is: ${c}`);

// let btn = document.createElement("button");
// btn.innerText = "add Text";

// let body = document.querySelector("body");
// body.appendChild(btn);
// btn.addEventListener("click", () => {
//   let head = document.createElement("h1");
//   head.innerText = "MERN Stack";
//   body.appendChild(head);
// });
// .Create a button , on click of which it adds a new Heading tag h1
//  with text as "MERN
// stack".

// let firsth1 = document.querySelector("h1");
// console.log(firsth1.innerHTML);

// .Write code to implement timer clock using JS -- display
// HH:MM:SS -- the time should
// keep updating every second

// let firsth1 = document.querySelector("h1");
// setInterval(() => {
//   let time = new Date();
//   let rt = time.toLocaleTimeString();
//   firsth1.innerHTML = `${rt}`;
// }, 1000);

// 4.Create an HTML page having content as Hello world
//  and a button named Replace
// Text. When user will click on this button page content
//  should be changed to "Welcome to
// Elevation academy"

// let body = document.querySelector("body");
// let creath1 = document.createElement("h1");
// let rpButton = document.createElement("button");
// rpButton.innerText = "Replace Text";
// creath1.innerText = "Hello world";
// body.appendChild(creath1);
// body.appendChild(rpButton);
// let c = 0;
// rpButton.addEventListener(`click`, () => {
//   if (c === 0) {
//     creath1.innerText = "Welcome to  Elevation academy";
//     c++;
//   } else {
//     creath1.innerText = "Hello world";
//     c--;
//   }
// });

// 1.Give an example of closure

// function outer() {
//   let ourtervar = 20;
//   function innerFun() {
//     console.log(ourtervar);
//   }
//   innerFun();
// }
// outer();
// Give an example of call(), apply(), bind()

// person = {
//   name: "dinesh",
//   title: "kumar",
//   roll: 25,
// };

// function display(id) {
//   console.log(`${this.name}: ${this.title} : ${this.roll} :_ ${id}`);
// }
// let ans1 = display.call(person, 1);
// let ans23 = display.apply(person, [29]);

// let bindR = display.bind(person, 5);
// bindR();

// . Write code to explain map and filter in arrays
//
// let arr = [2, 5, 8, 6, 8];

// arr.map((x) => {
//   console.log(x);
// });
// arr.filter((x) => {
//   if (x > 5) {
//     console.log(x + `  is greater than 5 `);
//   }
// });
// 4. Give an example of async/await

// async function data() {
//   return new Promise(async (res, rej) => {
//     let api = await fetch(`https://api.github.com/users`);
//     console.log(api);
//   });
// }
// data();
// 5.Give an example of inheritance using function constructor

// function cons(name, title, roll) {
//   (this.name = name), (this.title = title), (this.roll = roll);
// }
// function dev2(name, title, roll, id) {
//   cons.call(this.name, title, roll);
//   this.id = id;
// }
// let cons1 = new cons("ram", "pal", 20);
// let cons12 = new dev2(`ganesh`, `god`, 1, " everything");

// console.log(cons1);
// console.log(cons12);
// 6. Please explain Self Invoking Function and its code ?
// (function hello() {
//   console.log("babu lal");
// })();
// 26.What are callbacks?

// let name = "";
// function outer(callback) {
//   name = "dinesh";
//   callback(name);
// }
// function inner(name21) {
//   console.log(`my name is :${name21}`);
// }
// outer(inner);

// 25.What are objects in javascript?

// obj1 = {
//   name: "dinesh",
//   id: 2,
// };
// console.log(obj1);

// arrow function
// (() => {
//   console.log("hello dinesh");
// })();

// 23.What is the for-in loop in JavaScript? Give its syntax

// for(variable in object ){

// }

// 22.What is a Temporal Dead Zone?
// console.log(x);
// let x = 2;

// 26.What are callbacks hell?

// function f1() {
//   function f2() {
//     function f3() {
//       // code to be executed
//     }
//   }
// }
// .What is promise chaining

// new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   }, 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 4;
// console.log(result);
//   });

// 7. What is prototype chain

// var parent = {
//   name: "Dinesh",
//   sayHello: function () {
//     console.log(`hello, my name is ${this.name}`);
//   },
// };
// var child = Object.create(parent);
// child.name = `Ganesh`;
// child.sayHello();

// 15.What are pure functions?

// function calculateGST(productPrice) {
//   return productPrice * 0.05;
// }
// var gst = calculateGST(255);
// console.log(gst);

// 10.What are constructor functions in JS?

// function con1(name, rooll) {
//   (this.name = name), (this.roll = rooll);
// }
// let log1 = new con1("Dinesh", 525);
// let log2 = new con1("ganesh", 1);
// console.log(log2, log1);
// What are promises and why do we need them?

// new Promise((res, rej) => {
//   let name = "Dinesh";
//   let name2 = "Dinesh";
//   if (name == name2) {
//     res();
//   } else {
//     rej();
//   }
// })
//   .then((x) => {

//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("error");
//   });

// Explain prototypes

// function proto(name, title, id) {
//   (this.name = name), (this.title = title), (this.id = id);
// }

// proto.prototype.address = "gaya";

// let log1 = new proto("dinesh", "pal", 25);
// console.log(log1);
// console.log(log1.address);

// let fun1 = function para() {
//   console.log(25 * 2);
// };
// fun1();
// let a = 10;
// (function hello() {
//   let x = 5;
//   console.log(a + x);
// })();
// console.log(a + x);

// function outer() {
//   var a = 10;
//   return function hii() {
//     console.log(a);
//   };
// }

// let hii1 = outer();
// hii1();

// let a = 10;
// let b = 20;

// b = a;
// console.log(b);
// console.log(a);

// let d = 10;
// let e = 20;

// b = a;
// console.log(b);
// console.log(a);


// // Generate Function generates three
// // different numbers in three calls
// function* fun() {
// 	yield 10;
// 	yield 20;
// 	yield 30;
// }

// // Calling the Generate Function
// let gen = fun();
// console.log(gen.next().value);
// // console.log(gen.next().value);
// console.log(gen.next().value);

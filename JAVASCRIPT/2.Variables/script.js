// ES5

// var keyword [global scope variable]

// var x = 20;

// {
//   console.log(x);
//   console.log(x + y);
//   console.log(y);
//   console.log(20+undefined);

//   var x = 50;
// }

// {
//   var y = 50;
// }

// console.log(x);
// console.log(x + y);

// ES6

/*

var   : [global scope variable] reassigned , redeclaired
let   : [block scope variable] reassigned , not redeclaired
const : [block scope variable]  not reassigned , not redeclaired

*/

// let

// let x = 20
// x = 50

// console.log(x);

// let x = 50

// {
//     let x = 100
//     console.log(x);
// }

// console.log(x);

// const

// const name = "java"
// console.log(name);

// const boolean = "ReactJS"
// console.log(boolean);

// {
//     const profile = "john"

//     profile = "john"

//     console.log(profile);
// }

// console.log(profile);

// Javascript Hoisting

// {
//   var x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// {
//   let x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// {
//   const x, y, z;

//   x = 10;
//   y = 20;
//   z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
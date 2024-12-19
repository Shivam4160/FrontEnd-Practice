// console.log('Hello Javascript!!');
// document.getElementById('demo').innerHTML = "Hello Java!!!!!!"



// ES5 
// Var variables keyword

// var box = 'SkillQode'

// console.log(box);


/* data Types In JS */

/* Primitive Datatypes */ /* Immutable */
/*

String[string]
Number[numbber]
BigInt[biogint]
Undefined[undefined]
Null[object]
Boolean[boolean]
Symbol[symbol]

*/


/* Non-Primitive Datatypes / mutable */

/*

Array [object]
Object [object]

*/

/*

In JavaScript, mutability and immutability refer to whether a data type can be changed after it's created. Here's a breakdown: 
Immutable Data Types:
Primitive values: Strings, numbers, booleans, null, undefined, and symbols are all immutable. This means that once you create a primitive value, you cannot change its content directly.
Example:
JavaScript

let name = "Alice";
name += " Bob"; // This creates a new string "Alice Bob" and assigns it to name.
Mutable Data Types:
Objects and Arrays: Objects and arrays are mutable, which means you can modify their properties or elements.
Example:
JavaScript

let person = { name: "Alice" };
person.name = "Bob"; // This modifies the original object.

Key Differences:
Modifying Immutable Values: To "modify" an immutable value, you need to create a new value based on the original.
Modifying Mutable Values: You can directly change the content of mutable values.

Why Immutability Matters:
Predictability: Immutability makes code easier to reason about because you don't have to worry about values changing unexpectedly.
Concurrency: Immutability can simplify concurrent programming by preventing data races.
Performance: In some cases, immutability can enable performance optimizations.
Creating Immutable Objects:
Object.freeze(): Freezes an object, preventing any modifications to its properties.
Spread Operator: Creates a shallow copy of an object or array, allowing you to modify the copy without affecting the original.
Libraries: Libraries like Immutable.js provide data structures that are specifically designed to be immutable.

*/

// console.log(typeof 'sdnsdnfsdn');
// console.log(typeof 56565);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof Symbol());
// console.log(typeof 1n);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});

/* Javascript Case Sensitive Language */

// var box = 50
// var Box = 100

// console.log(box);
// console.log(Box);

/* camelCase */

// var profileName = "reactJS"
// var ProfileName = "reactJS"
// var Profile_Name = "reactJS"
// var ProfileNameData = "reactJS"
// var Profile_NameDa_ta = "reactJS"


// console.log(Profile_NameDa_ta);
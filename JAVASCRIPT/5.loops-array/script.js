/* Javascript Loops */

/*

Loops are used to execute the same block of code again and again, as long as a certain condition is true.

In JavaScript we have the following types of loops:

1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop

*/

// 1. for loop

// Syntax:

// for(initilization; condition; afterthougth){
//     // code block to be executed
// }

// {
//     let i = 1

//     for(i ; i <= 10 ; i++){
//         console.log(`For loop ${i}`);
//     }
// }

// {
//     for(let i = 10; i > 0; i--){
//         console.log(`For Loop ${i}`);
//     }
// }

// {
//     for(let i = 0; i < 20; i++){
//         console.log(`For Loop ${i}`);
//         i+=1;
//     }
// }

// {
//     let array = ['🍌' , '🍓' , '🥑' , '🥕' , '🍐' , '🍎' , '🍆' , '🍅']

//     var i = 2

//     for(var i; i<array.length; i++){
//         console.log(`${array[i]}`);
//     }
// }

// While Loop...............

// Syntax :

// while(condition){
//     // code to be executed 
// afterthought
// }

// {
//     let i = 0

//     while (i <= 10) {
//         console.log(`While Loop ${i}`);
//         i++;
//     }
// }

// do..while Loop.........


// syntax 
// do {
//     // code to be executed 
//     // afterthought
// } while (condition)

// {
//     let i = 0
//     do{
//         console.log(`do while Loop ${i}`);
//         i++;
//     }while(i > 10)
// }

/* Array and Object */

// Array

{
    // let array = ['🍌', '🍓', '🥑', '🥕', '🍐', '🍎', '🍆', '🍅']

    // console.log(array);
    // console.log(array.length);
    // console.log(array[7]);
    // console.log(array[8]);
    // array[7] = "🍟"
    // console.log(array);
    // console.log(array[0] = "");
    // console.log(array);
    // array.pop()
    // array.pop()
    // array.pop()
    // console.log(array);
    // array.shift()
    // array.shift()
    // array.shift()
    // console.log(array);
    // array.unshift('add')
    // console.log(array);
    // array.push('add')
    // console.log(array);
}

// Object

{
    // let Profile = {
    //     name: 'Rakesh',
    //     age: 45,
    //     email: `Rakesh@gmail.com`,
    //     occupation: 'farmer'
    // }

    // console.log(Profile);

    // console.log(Profile.name);
    // console.log(Profile.age);
    // console.log(Profile["email"]);
    // Profile.name = "Paresh"

    // console.log(Profile);
}

// For.......in Loop 

// for (key in object) {
//     // code block to be executed
//   }

{
    // let Profile = {
    //     name: 'Rakesh',
    //     age: 45,
    //     email: `Rakesh@gmail.com`,
    //     occupation: 'farmer'
    // }

    // for (let key in Profile) {
    //     console.log(`For in ${key}`);
    // }

    // for (let key in Profile) {
    //     console.log(`For in ${Profile.key}`);
    // }

    // Task:-   for(let key in Profile){
    //     console.log(`For in ${Profile.key}`); 
    // }

    // ans:- for(let key in Profile){
    //     console.log(`For in ${Profile[key]}`);
    // }
}

// For............of Loop

{
    // let i = "This is for of loop"
    // let i = [ 1, 2 , 3 , 4 , 5 , 6]
            //  0123456789012345678
            //  1234567890123456789

    // console.log(i.length);
    // for(let value of i){
    //     console.log(value);
    // }
}
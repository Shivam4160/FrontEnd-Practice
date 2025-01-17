// function in javascript


function sum(a , b , c , d) {
    return a * b * c + d 
}

let arr = [4 , 32]
let arr2 = [ 15 , 9]

console.log(sum(...arr, ...arr2));

// JavaScript Arrow Function 

let sum2 = (a , b , c , d) =>{
    return a / b * c + d 
}

console.log(sum2(...arr, ...arr2));
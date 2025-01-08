/* Javascript Loops */

/*

Loops are used to execute the same block of code again and again, as long as a certain condition is true.

In JavaScript we have the following types of loops:

1. for...in loop
2. for...of loop

*/

// {
//     let object = {
//         item:"Laptop",
//         color:'black',
//         price:50000,
//         brand:'ASUS'
//     }

//     // console.log(object.item);
//     // console.log(object.brand);


//     for(key in object){
//         console.log(`${key} = ${object[key]}`);
//     }

//     object.price = 55000

// }

// {
//     let array = [1 , 2 , 3 , 4 , 5 , 6]

//     for(value of array){
//         console.log(`${value * 2}`);
//     }
// }

// Javascript String Method 

// String.prototype.at()

// at(index)

// {
//     let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//     123456789012345678901234567890123

//     // console.log(str.at(12));
//     // console.log(str.at(12));

// }

// String.prototype.CharAt()

// charAt(index)


// {
//     let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

//         console.log(str.charAt(-1));
// }

// String.prototype.charCodeAt()

// charCodeAt(index)

// https://www.toptal.com/designers/htmlarrows/letters/


// {
//     let str = "This is Javascript String Method!"
//                012345678901234567890123456789012
//                123456789012345678901234567890123

//         console.log(str.charCodeAt(10));
// }


// String.prototype.concat()

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
//     let x = "Hello"
//     let y = "Javascript"

//     console.log(y.concat("\n"+x));

// }

// String.prototype.includes()

// includes(searchString)
// includes(searchString, position)

// {
//     let str = "Dog is very cute and cat is lovable"

//     // console.log(str.includes('cute'));
//     // console.log(str.includes('cute' , 0));

// }


// String.prototype.indexOf()

// indexOf(searchString)
// indexOf(searchString, position)

// {
//     let str = "Dog is very cute and cat is lovable"

//     console.log(str.indexOf("y" , 12));

// }

// String.prototype.lastIndexOf()

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)


// {
//     let str = "Dog is very cute and cat is lovable"

//     console.log(str.lastIndexOf("v" , 20)); 
// }

// String.prototype.padStart() /  padEnd() 

// padStart(targetLength)
// padStart(targetLength, padString)
// padEnd(targetLength)
// padEnd(targetLength, padString)

// {
//     let x = 'hello'

//     // console.log(x.padStart(15 , 'h'));
//     // console.log(x.padEnd(15 , 'h'));

//     // 03:12

//     // console.log(parseInt(x.padStart(2 , '0')));

//     console.log(x.repeat(10));
// }


// Slice and Substring

// {
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                01234567890123456789012345
//                12345678901234567890123456

//     // slice(indexStart)
//     // slice(indexStart, indexEnd)


//     console.log(str.slice(0));
//     console.log(str.substring(0));
//     console.log(str.slice(10));
//     console.log(str.substring(10));
//     console.log(str.slice(-10));
//     console.log(str.substring(-10));
//     console.log(str.slice(10 , 15));
//     console.log(str.substring(10 , 15));
//     console.log(str.slice(-10 , 10));
//     console.log(str.substring(-10 , 15));
//     console.log(str.slice(-10 , -8));
//     console.log(str.substring(-10 , -1));
//     console.log(str.slice(0 , 0));
//     console.log(str.substring(0 , 0));
    

// }

// Self Learning

// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()

/* javascript string match and matchAll Method */

// console.log(/[0-9]/);



// match(regexp)

// {
//      let str = "Dog is very cute and cat is lovable but dog is danger and Cat is wound"

//      let regex = /[A-Z]/g

//      let demo = str.match(regex)

//      console.log(demo);
// }

//matchAll(regex)

// {
//      let str = "Dog is very cute and cat is lovable but dog is danger and Cat is wound"

//       let regex = /[Dog]/gi

//       let demo = [...str.matchAll(regex)]

//       console.log(demo);
// }


// replace(pattern, replacement)


{
    // let str = "Dog is very cute and cat is lovable but dog is danger and Cat is wound"

    //  let regex = /cat/gi

    // // let demo = str.replace(regex , 'Fox')
    // let demo1 = str.replace(regex , 'Fox')
    // let demo2 = str.replaceAll(regex , 'Fox')

    //  console.log(demo1);
    //  console.log(demo2);
}










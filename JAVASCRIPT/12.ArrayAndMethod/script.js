/* Javascript Array */

{
    // let array = [undefined]
    // array.push('Item-1')
    // array.push('Item-2')
    // console.log(array);
    // console.log(array.length);
    // console.log(typeof array);
    // array.length = 10
    // array.push('Item3')
    // array[5] = "Item5"
    // array.length = 2
    // console.log(array);
}
{
    // let array1 = []

    // console.log(array1);

    // let array2 = new Array(10 , 20)

    // array2.push(10)

    // console.log(array2);
   
}

// Array.from()

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// {
//     let array = [1 , 2 , 3 , 4, 5]

//     let demo = Array.from(array , (item) => item * item )

//     console.log(demo);

//     console.log(array);

//     let copyArray = [...array , 6]

//     copyArray.push(7)

//     console.log(copyArray);

//     console.log(array);

//     let demos = {}

//     console.log(Array.isArray(demos));  

// }

// Array.of()

// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)


{
    // let array = Array.of(1 , 2 , 3 , 4 , 5 , 6)

    // console.log(array);
}

// Array.prototype.at()

// at(index)

{
    // let array = ['🌺','🌻','🌼','🌷','🥀','☘','🌴','🌹','💐','🌸']
    //           //   0     1    2    3     4    5    6    7    8     9

    // console.log(array);

    // console.log(array.at(5));
}

// Array.prototype.concat()

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

{
    // let array = [1 , 2 , 3]
    // let array1 = [4 , 5 , 6]
    // let array2 = [7 , 8 , 9]

    // console.log(array.concat(array2 , array1));
}

// Array.prototype.copyWithin()

// copyWithin(target, start)
// copyWithin(target, start, end)


{
    // let array = [1 , 2 , 3 , 4 , 5 , 6 , 7  , 8  , 9 , 10]

    // console.log(array);
    
    // console.log(array.copyWithin(3));

    // console.log(array.copyWithin(2 , 4));

    // console.log(array.copyWithin(4 , 3 , 7));
}


// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()
// Array.prototype.join()
// Array.prototype.lastIndexOf()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.values()
/* Array.CopyWithin() Method */

// array.copyWithin(target)
// array.copyWithin(target , startIndex)
// array.copyWithin(target , startIndex , endIndex)

{
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // 0123457789

    // let copy_within = array.copyWithin(3)
    // let copy_within1 = array.copyWithin(3 , 5)
    // let copy_within1 = array.copyWithin(2 , 6)
    // let copy_within1 = array.copyWithin(6 , 7)
    // let copy_within1 = array.copyWithin(4 , 8)
    // let copy_within1 = array.copyWithin(3 , 6)
    // let copy_within1 = array.copyWithin(0 , 5)
    // let copy_within1 = array.copyWithin(2 , 4 , 8)
    // let copy_within1 = array.copyWithin(3 , 5 , 5)
    // let copy_within1 = array.copyWithin(3 , 5 , 6)
    // let copy_within1 = array.copyWithin(3 , 5 , 8)
    // let copy_within1 = array.copyWithin(4 , 6 , 7)
    // let copy_within1 = array.copyWithin(2 , 5 , 8)
    // let copy_within1 = array.copyWithin(6 , 8 , 9)
    // let copy_within1 = array.copyWithin(6 , 7 , 8)

    // console.log(copy_within);
    // console.log(copy_within1);

    // Array.from(arrayLike)
    // Array.from(arrayLike, mapFn)
    // Array.from(arrayLike, mapFn, thisArg)


    // let from = Array.from(array , (item) => console.log(`from:${item}`))
    // let map = array.map((item) => console.log(`map:${item*2}`))



}


{
    // let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // let entries = array.entries()

    // console.log(entries.next().value);
    // console.log(entries.next().value);
    // console.log(entries.next().value);
    
}

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


{
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let splice = array.splice(4 , 1 , 10)

    console.log(splice);

    console.log(array);
}

{
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arrays = [
        {
            name:'option-1',
            age:10
        },
        {
            name:'option-2',
            age:20
        },
        {
            name:'option-3',
            age:30
        },
        {
            name:'option-4',
            age:40
        },
        {
            name:'option-5',
            age:50
        },
        {
            name:'option-6',
            age:60
        },
        {
            name:'option-7',
            age:70
        },
        {
            name:'option-8',
            age:80
        }

    ]

    // let slice = array.slice(1 , 5)
    // let slice1 = array.slice(0 , 5)

    // console.log(slice);
    // console.log(slice1);

    const pageperitem = 4

    let lastindex = pageperitem * 2

    let firstindex = lastindex * 2 - pageperitem
    
    
    console.log(`firstindex:${firstindex}`);
    console.log(`lastindex:${lastindex}`);
    

    console.log(arrays.slice(0 , 4)); 
    console.log(arrays.slice(4 , 8)); 
    console.log(arrays.slice(8 , 12));
    console.log(arrays.slice(12 , 16));
    

    arrays.map((item) => console.log(item.age))
    
    
    
}
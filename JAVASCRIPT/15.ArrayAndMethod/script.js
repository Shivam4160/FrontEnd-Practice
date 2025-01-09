/* 

array.every
array.some
array.fill
array.flat()
array.flatmap()
array.reduce
array.reduceRight
array.sort()
array.with

*/

/* Array.every */

// every(callbackFn)
// every(callbackFn, thisArg)

{
    // let num = [100 , 455 , 89 , 105 , 76 , 98 , 225]
  
    // let every = num.every((num) => num > 50)
  
    // console.log(every);
  
  }
  
  // some(callbackFn)
  // some(callbackFn, thisArg)
  
  
  {
    // let num = [10 , 455 , 89 , 105 , 76 , 98 , 225]
  
    // let some = num.some((num) => num < 50)
  
    // console.log(some);
  }
  
  // Array.fill
  
  // fill(value)
  // fill(value, start)
  // fill(value, start, end)
  
  {
  
    // let num = [10 , 455 , 89 , 105 , 76 , 98 , 225]
  
    // let fill = num.fill(10 , 0 , 5)
  
    // console.log(fill);
  
    // console.log(num);
  
  }
  
  // Array.flat()
  
  // flat()
  // flat(depth)
  
  
  {
    // let array = [10, 20, 30, [40, 50, 60, [70, 80, 90]]]
  
    // console.log(array);
  
    // let flat = array.flat(2)
  
    // console.log(flat);
  
    // flat.map((item) => console.log(item))
  
    // console.log(array);
  }
  
  // flatMap(callbackFn)
  // flatMap(callbackFn, thisArg)
  
  {
    // let array = [1 , 2 , 3 , 4 , 5]
  
    // let flatmap = array.flatMap((item) => item 
    // >= 2 ? [1 , 1] : item)
  
    // console.log(flatmap);
  
    // array.map((item) => console.log([[item , item * 2]])
    // )
  
    // console.log(array);
    
  }
  
  // Array.reduce()
  
  // reduce(callbackFn)
  // reduce(callbackFn, initialValue)
  
  
  {
  
      // let num = [10 , 20 , 30 , 40 , 50]
  
  
      // let reduce = num.reduce((prev , next) => prev + next)
  
      // let reduce = num.reduceRight((prev , next) => prev + next)
  
      // 10 + 10 = 20
      // 20 + 20 = 40
      // 40 + 30 = 70
      // 70 + 40 = 110
      // 110 + 50 = 160
  
      // console.log(reduce);
      
      // let sum = 0;
  
      // for(let i=0; i < num.length; i++){
      //   sum += num[i]
      // }
  
      // console.log(sum);
  
  }
  
  
  // Array.sort()
  
  {
    // let language = ['Html' , 'Css' , 'Sass' , 'Bootstrap' , 'TailwindCss' , 'Jvascript' , 'ReactJS' , 'JQuery' , 'AngularJs']
  
    let language = [10 , 29 , 338 , 40 , 50 , 264 , 70 , 84 , 190]
  
  
    let sort = language.sort((a , b) => console.log(a - b))
  
  
    console.log(sort);
    
  }
  
  // Array.With()
  
  // arrayInstance.with(index, value)
  
  {
    // const arrayLike = {
    //   length: 3,
    //   unrelated: "foo",
    //   0: 5,
    //   2: 4,
    //   3: 3,
    // };
  
    // console.log(arrayLike);
  
    // console.log(Array.prototype.with.call(arrayLike , 2 , 4));
  }
  
  
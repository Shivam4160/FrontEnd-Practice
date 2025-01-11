/* Javascript Object Method */

// arrayInstance.with(index, value)

{
  // let array = [1 , 2 , 3 , 4 , 5]

  // array[3] = "box"

  // console.log(array.with(-2, 'box'));
  
  // console.log(array);
}

{
  // let Object1 = {}

  // console.log(Object1);

  // let ObjectNew =  Object({'key1':'javascript'})

  // console.log(ObjectNew.key1); 
  // console.log(ObjectNew['key1']); 

  // let object = {
  //   key1 : [
  //     'value1',
  //     {
  //       key2:[
  //         'value2',
  //         'value3'
  //       ]
  //     }
  //   ]
  // }

  // console.log(object.key1[1]);

  // console.log(object.key1[1].key2[1]);
}


/* Javascript Object Prototypes */

// Javascript Object.assign()

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)


{
  let obj1 = {key1:'apple' , key2:'kiwi'}
  let obj2 = {key3:'orange' , key4:'banana'}

  let newobject = Object.assign(obj2 , obj1)

  console.log(newobject);

  console.log(obj2);

  console.log(obj1);
}

// Object.create()

// Object.create(proto)
// Object.create(proto, propertiesObject)

// {
//   let obj1 = {key1:'apple' , key2:'kiwi'}
//   let obj2 = {key3:'orange' , key4:'banana'}

//   let newcreate = Object.create(obj2)

//   let newobject1 = Object.create(obj1)

//   newobject1.key1 = 'Toys'

//   console.log(newcreate.key4);
//   console.log(newobject1.key1);
// }


// self learning method
// Object.freeze() / Object.isFrozen()
// Object.values()
// Object.seal()
// Object.isFrozen()
// Object.isSealed()
// Object.keys()
// Object.freeze()


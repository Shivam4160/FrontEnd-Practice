// Javascript Promises and Promise Chaining

{
  new Promise(function (resolve, reject) {});
}

{
  let promise = new Promise(function (resolve, reject) {});
}

{
  // let value = true
  // let DataModule = new Promise(function(resolve , reject){
  //     if(value){
  //         resolve('DataModule is complete successfully!!')
  //     }else{
  //         reject('DataModule is not complete!!!!')
  //     }
  // })
  // DataModule.then((result) => {
  //     console.log(result);
  // })
  // .then(() => {
  //     console.log('Programe is complete!!!!');
  // })
  // .then(() => {
  //     console.log('Hi Javascript!!!!')
  // })
  // .catch((error) => {
  //     console.log(error);
  // })
}

{
  // let value = true
  // let DataModule = new Promise(function(resolve , reject){
  //     reject('skjdfhsdjfdsd')
  //     resolve('skdbnjsdfbNBSd')
  // })
  // DataModule.then((result) => {
  //     console.log(result);
  // })
  // .then(() => {
  //     console.log('Programe is complete!!!!');
  // })
  // .then(() => {
  //     console.log('Hi Javascript!!!!')
  // })
  // .catch((error) => {
  //     console.log(error);
  // })
}

{
  // let kayo = 'sick'
  // let KayoPromise = new Promise((resolve , reject) => {
  //     if(kayo === 'healthy'){
  //         resolve('Kayo is healthy')
  //     }else{
  //         reject('Kayo is Sick')
  //     }
  // })
  // KayoPromise.then((result) => {
  //     console.log(result);
  // })
  // .then(() => {
  //     console.log('I have a Cake And I am Happy!!');
  // })
  // .catch((error) => {
  //     console.log(error);
  // })
  // .finally(() => {
  //     console.log('I Still Have a Party!!');
  // })
}
let kayo = "sick";

async function KayoPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (kayo === "healthy") {
        resolve("Kayo is healthy");
      } else {
        reject("Kayo is Sick");
      }
    }, 5000);
  }).then((result) => {
      console.log(result);
    })
    .then(() => {
      console.log("I have a Cake And I am Happy!!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      
    });
}

async function SchoolAttendence() {
  return new Promise((resolve, reject) => {
    if (kayo === "healthy") {
      resolve("Go to School!!!");
    } else {
      reject("Go to Hospital!!");
    }
  }).then((result) => {
      console.log(result);
    })
    .then(() => {
      console.log("I am Present");
    })
    .catch((error) => {
      console.log(error);
    })
}

async function finallyText(){
    console.log('I Still Have a Party!!');
}

/* Async And Await */

async function KayoLife() {
  let promise1 = await KayoPromise();
  let promise2 = await SchoolAttendence();
  let promise3 = await finallyText();
}

KayoLife();

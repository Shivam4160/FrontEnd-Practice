// function call , apply and bind method

// call method

// {
//     function sum(a , b){
//         return a + b
//     }

//     let result = sum(5 , 10)

//     console.log(result);
// }

// with call method

// {
//     function sum(a , b){
//         return a + b
//     }

//     let result = sum.call(this , 10 , 10)

//     let result2 = sum.apply(this , [10 , 10])

//     console.log(result);

//     console.log(result2);

// }
// {
//     let profile = {
//         firstname:'Jack',
//         lastname:'Martin',
//         discription(age , email){
//             console.log(`my name is ${this.firstname} ${this.lastname} and my age is ${age} and email is ${email}`);
//         }
//     }

//     // profile.discription(45 , 'exmaple@gmail.com')

//     profile.discription.call(profile , 45 , 'example@gmail.com')
//     profile.discription.apply(profile , [45 , 'example@gmail.com'])
// }

{
//   let profile = {
//     firstname: "Jack",
//     lastname: "Martin",
//     introduction:function details(){
//         console.log(`my name is ${this.firstname} ${this.lastname}`);
//     }
//   };

//   let profile2 = {
//     firstname:'Peter',
//     lastname:'Parker'
//   }

//   let result =  profile.introduction.bind(profile2)

//   result()

}

{
    // let num1 = [1 , 2 , 3 , 4]
    // let num2 = [5 , 6 , 7 , 8 , 9]

    // let demo = num1.join('/')

    // let concat = num1.concat(num2)

    // console.log(demo);

    // console.log(concat);

    // let applyDemo = num1.push.apply(num2)

    // console.log(applyDemo);


    // let max = Math.max.apply(this , num1)

    // console.log(max);
}

// Asynchronous Javascript 

// callback hell 

{
    let farm = "open"

    if(farm === 'open'){
        setTimeout(() => {
            console.log('Farm is Open!!!!');
            setTimeout(() => {
                console.log('coffee Bean growth!!'); 
                setTimeout(() => {
                    console.log('coffee Harvesting!!!');
                    setTimeout(() => {
                        console.log('coffee bean Separation!!!');
                        setTimeout(() => {
                            console.log('coffee beans Processing and drying!!');
                            setTimeout(() => {
                                console.log('coffee Cleaning, sorting, and grading!!');
                                setTimeout(() => {
                                    console.log('Roasting coffee beans');
                                    setTimeout(() => {
                                        console.log('Now Coffee beans ready for brewing!!!');
                                    } , 8000)
                                } , 7000)
                            } , 6000)
                        } , 5000)
                    } , 4000)
                } , 3000)
            } , 2000)
        } , 1000)
    }
}

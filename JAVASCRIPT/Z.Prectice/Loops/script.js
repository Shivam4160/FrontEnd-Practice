// Write a program that calculates the sum of all numbers from 1 to 100
{
        let sum=0;

    for (let i = 0; i <= 100; i++) {
        sum+=i;
    }

    console.log(sum);

}


//  Write a program that prints the multiplication table of a given number (for example, 5


{
    let table=2;
    console.log("table of ",table,":\n\n");
    
    for (let i = 1; i <= 10; i++) {
        
        console.log(table + " X "+ i + " = " + table*i);
        
    }
}

// Write a program that calculates the factorial of a given number (for example, 5!)

{
    let fect=5;
    let fectorial=1;

    for (let i = fect; i >= 1; i--) {
        fectorial *=i;
    }

    console.log(fectorial);

}

// Write a program that prints the first 10 numbers in the Fibonacci sequence.


{
    let fibo=10
    let fibbonaci=0;
    let num1=0 , num2=1

    for (let i = 1; i <=fibo; i++) {
        fibbonaci=num1;
        num1= num2;
        num2= num1 + fibbonaci;
        console.log(fibbonaci+",");
    }


}



// new (custom console)


// {

//     var customConsole = {
//         // Store a reference to your backing value
//         tempValue: '',
//         // Always write out the most recent value
//         log: function(msg) {
//           this.tempValue += msg;
//           console.clear();
//           console.log(this.tempValue);
//         },
//         // A clear method to clear the backing console
//         clear: function() {
//           this.tempValue = '';
//           console.clear();
//         }
//       }


//     let fibo=10
//     let fibbonaci=0;
//     let num1=0 , num2=1

//     for (let i = 1; i <=fibo; i++) {
//         fibbonaci=num1;
//         num1= num2;
//         num2= num1 + fibbonaci;
//         customConsole.log(fibbonaci+",");
//     }
    
   

// }




// Write a program that reverses a given string.




{

    const string = "Hello, world!";
    let reversedStr = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    
    console.log(reversedStr);
}
 



// Write a program that calculates the sum of all elements in an array


{

    const numbers = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9];
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
      

}





// Write a program that finds the largest number in an array.


{
    
    
    const numbers = [3, 5, 7, 2, 8, 16 , 12];
    let largest =numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    
    console.log(largest); 
      
}
// // 1) JavaScript Program To Print Hello World

// {
//     document.write("Hello world!!")
// }






// // 2) JavaScript Program to Add Two Numbers


// {

//     let number1 = 5;
//     let number2 = 7;

//     let sum = number1 + number2;

//     console.log("JavaScript Program to Add Two Numbers\n\n");
//     console.log(sum);


// }






// // 3) JavaScript Program to Find the Square Root

// {

//     let number = 16;
//     let squareRoot = Math.sqrt(number);

//     console.log("JavaScript Program to Find the Square Root\n\n");
//     console.log(squareRoot);
// }






// // 4) JavaScript Program to Calculate the Area of a Triangle

// {
//     let base = 5;
//     let height = 10;

//     let area = (base * height) / 2;

//     console.log("JavaScript Program to Calculate the Area of a Triangle\n\n");
//     console.log(area);

// }






// // 5) JavaScript Program to Swap Two Variables

// {
//     let a = 5;
//     let b = 10;

//     console.log("JavaScript Program to Swap Two Variables\n\n");
//     console.log("Before swap");

//     console.log("a:", a);
//     console.log("b:", b);


//     a = a + b
//     b = a - b
//     a = a - b

//     console.log("after swap");
//     console.log("a:", a);
//     console.log("b:", b);

// }






// // 6) JavaScript Program to Solve Quadratic Equation
// // x = (-b ± √(b^2 - 4ac)) / 2a

// {
//     console.log("JavaScript Program to Solve Quadratic Equation\n\n");
//     // EQ = X^2 -3X + 2
//     let a = 1;
//     let b = -3;
//     let c = 2;

//     let discriminant = b * b - 4 * a * c;

//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log("Roots are real and different.");
//         console.log("Root 1:", root1);
//         console.log("Root 2:", root2);
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         console.log("Roots are real and the same.");
//         console.log("Root:", root);
//     } else {
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         console.log("Roots are complex and different.");
//         console.log("Root 1:", realPart, "+", imaginaryPart, "*", "i");
//         console.log("Root 2:", realPart, "-", imaginaryPart, "*", "i");
//     }


// }






// // 7) JavaScript Program to Convert Kilometres to Miles

// {
//     let KM = 5;

//     let miles = (KM * 0.621371);

//     console.log("JavaScript Program to Convert Kilometres to Miles\n\n");
//     console.log(miles);
// }






// // 8) Javascript Program to Convert Celsius to Fahrenheit

// {

//     let celsius = 25;
//     let fahrenheit = (celsius * 9 / 5) + 32;

//     console.log("Javascript Program to Convert Celsius to Fahrenheit\n\n");
//     console.log(celsius + "°C is equal to " + fahrenheit + "°F");

// }






// // 9) Javascript Program to Generate a Random Number

// {
//     let digits = parseInt(prompt("How many digits do you want?:(Random number)"));
//     let randomNumber = Math.random();
//     console.log("Javascript Program to Generate a Random Number\n\n");
//     console.log(randomNumber * Math.pow(10, digits));

// }







// // 10)Javascript Program to Check if a number is Positive, Negative, or Zero

// {
//     console.log("Javascript Program to Check if a number is Positive, Negative, or Zero\n\n");

//     let num = 1;
//     if (num > 0) {
//         console.log("Number is positive");
//     }
//     else if (num < 0) {
//         console.log("Number is negative");

//     }
//     else {
//         console.log("Number is Zero");
//     }
// }






// // 11)Javascript Program to Check if a Number is Odd or Even

// {
//     console.log("Javascript Program to Check if a Number is Odd or Even\n\n");

//     let num = 1;
//     if (num % 2 == 0) {
//         console.log("Number is even");
//     }
//     else {
//         console.log("Number is odd");
//     }
// }






// // 12)JavaScript Program to Find the Largest Among Three Numbers

// {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log("JavaScript Program to Find the Largest Among Three Numbers\n\n");

//     if (a > b && a > c) {
//         console.log("A is larger than B & C");
//     }
//     else if (b > a && b > c) {
//         console.log("B is larger than A & C");
//     }
//     else {
//         console.log("C is larger than B & A");
//     }
// }






// // 13)JavaScript Program to Check Prime Number

// {
//     console.log("JavaScript Program to Check Prime Number\n\n");
//     let number = 6545
//     let isPrime = true
//     if (number === 1) {
//         console.log("1 is neither prime nor divisible number.");
//     }
//     else if (number > 1) {
//         for (let i = 2; i <= number / 2; i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(`${number} is a prime number`);
//         } else {
//             console.log(`${number} is not a prime number`);
//         }
//     }
//     else {
//         console.log(`${number} is not a prime number.`);
//     }
// }






// // 14)JavaScript Program to Print All Prime Numbers in an Interval

// {
//     console.log("JavaScript Program to Print All Prime Numbers in an Interval\n\n");

//     let startInterval = parseInt(prompt("Enter starting range:(Prime number)"));
//     let endInterval = parseInt(prompt("Enter ending range:(Prime number)"));

//     for (let i = startInterval; i <= endInterval; i++) {
//         let isPrime = true;
//         if (i <= 1) {
//             isPrime = false;
//         }
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(i);
//     }
// }






// // 15)JavaScript Program to Find the Factorial of a Number

// {
//     console.log("JavaScript Program to Find the Factorial of a Number\n\n");

//     let fect = parseInt(prompt("Enter a number for factorial"));
//     let fectorial = 1;

//     for (let i = fect; i >= 1; i--) {
//         fectorial *= i;
//     }

//     console.log(fectorial);

// }






// // 16)JavaScript Program to Display the Multiplication Table

// {
//     console.log("JavaScript Program to Display the Multiplication Table\n\n");

//     let table = 2;
//     console.log("table of ", table, ":\n\n");

//     for (let i = 1; i <= 10; i++) {

//         console.log(table + " X " + i + " = " + table * i);

//     }
// }






// // 17)JavaScript Program to Print the Fibonacci Sequence

// {
//     console.log("JavaScript Program to Print the Fibonacci Sequence\n\n");


//     let fibo = parseInt(prompt("Enter a total number to display fibonacci series:"));
//     let fibbonaci = 0;
//     let num1 = 0, num2 = 1;

//     for (let i = 1; i <= fibo; i++) {
//         fibbonaci = num1;
//         num1 = num2;
//         num2 = num1 + fibbonaci;
//         console.log(fibbonaci + ",");
//     }

// }






// // 18)JavaScript Program to Check Armstrong Number
// {
//     console.log("JavaScript Program to Check Armstrong Number\n\n");

//     let num = 371;
//     let originalNum = num;
//     let n = 0, result = 0;

//     while (originalNum != 0) {
//         originalNum = Math.floor(originalNum / 10);
//         n++;
//     }

//     originalNum = num;

//     while (originalNum != 0) {
//         let remainder = originalNum % 10;
//         let power = Math.pow(remainder, n);
//         result = result + power;
//         originalNum = Math.floor(originalNum / 10);
//     }

//     if (result == num)
//         console.log(num + " is an Armstrong number");
//     else
//         console.log(num + " is not an Armstrong number");
// }






// // 19)JavaScript Program to Find Armstrong Number in an Interval

// {
//     console.log("JavaScript Program to Find Armstrong Number in an Interval\n\n");

//     let start = 1;
//     let end = 1000;

//     for (let i = start; i <= end; i++) {
//         let originalNum = i;
//         let n = 0, result = 0;

//         while (originalNum != 0) {
//             originalNum = Math.floor(originalNum / 10);
//             n++;
//         }

//         originalNum = i;

//         while (originalNum != 0) {
//             let remainder = originalNum % 10;
//             let power = Math.pow(remainder, n);
//             result = result + power;
//             originalNum = Math.floor(originalNum / 10);
//         }

//         if (result == i)
//             console.log(i + " is an Armstrong number");
//     }

// }






// // 20)JavaScript Program to Make a Simple Calculator
// {
//     console.log("JavaScript Program to Make a Simple Calculator\n\n");

//     let num1 = prompt("Enter the first number:(calculator)");
//     let operator = prompt("Enter the operator (+, -, *, /):");
//     let num2 = prompt("Enter the second number:(calculator)");

//     let result;

//     switch (operator) {
//         case "+":
//             result = parseFloat(num1) + parseFloat(num2);
//             break;
//         case "-":
//             result = parseFloat(num1) - parseFloat(num2);
//             break;
//         case "*":
//             result = parseFloat(num1) * parseFloat(num2);
//             break;
//         case "/":
//             if (num2 !== "0") {
//                 result = parseFloat(num1) / parseFloat(num2);
//             } else {
//                 result = "Error: Division by zero is not allowed.";
//             }
//             break;
//         default:
//             result = "Error: Invalid operator.";
//     }

//     console.log(`${num1} ${operator} ${num2} = ${result}`);
// }






// // 21)JavaScript Program to Find the Sum of Natural Numbers

// {
//     console.log("JavaScript Program to Find the Sum of Natural Numbers\n\n");

//     let n = 100;
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     console.log("Sum of first " + n + " natural numbers is: " + sum);

// }






// // 22)JavaScript Program to Check if the Numbers Have Same Last Digit

// {
//     console.log("JavaScript Program to Check if the Numbers Have Same Last Digit\n\n");

//     let num1 = 123;
//     let num2 = 223;

//     if (num1 % 10 === num2 % 10) {
//         console.log("Both numbers have the same last digit.");
//     } else {
//         console.log("Both numbers do not have the same last digit.");
//     }

// }






// // 23)JavaScript Program to Find HCF or GCD

// {
//     console.log("JavaScript Program to Find HCF or GCD\n\n");

//     let num1 = 48;
//     let num2 = 18;
//     let hcf = 0;

//     for (let i = 1; i <= num1 && i <= num2; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             hcf = i;
//         }
//     }

//     console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf);

// }








// // 24)JavaScript Program to Find LCM
// {
//     console.log("JavaScript Program to Find LCM\n\n");

//     let num1 = 12;
//     let num2 = 15;

//     let max = Math.max(num1, num2);
//     while (true) {
//         if (max % num1 === 0 && max % num2 === 0) {
//             console.log(`The LCM of ${num1} and ${num2} is ${max}.`);
//             break;
//         }
//         max++;
//     }

// }







// // 25)JavaScript Program to Find the Factors of a Number

// {
//     console.log("JavaScript Program to Find the Factors of a Number\n\n");

//     let num = prompt("Enter a number(to fiend factor):");
//     let factors = [];

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }

//     console.log(`The factors of ${num} are: ${factors.join(", ")}`);

// }







// // 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion

// {
//     console.log("JavaScript Program to Find Sum of Natural Numbers Using Recursion\n\n");

//     function sum(n) {
//         if (n === 1) {
//             return 1;
//         } else {
//             return n + sum(n - 1);
//         }
//     }

//     let n = 10;
//     console.log("Sum of natural numbers up to", n, "is:", sum(n));

// }







// // 27)JavaScript Program to Guess a Random Number

// {
//     console.log("JavaScript Program to Guess a Random Number\n\n");

//     let randomNumber = Math.floor(Math.random() * 100);
//     let guess;
//     let attempts = 0;

//     while (true) {
//         guess = prompt("Guess a number between 1 and 100:");
//         attempts++;

//         if (guess == randomNumber) {
//             alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
//             break;
//         } else if (guess < randomNumber) {
//             alert("Too low! Try again.");
//         } else {
//             alert("Too high! Try again.");
//         }
//     }

// }







// // 28)JavaScript Program to Shuffle Deck of Cards
// // 29)JavaScript Program to Display Fibonacci Sequence Using Recursion

// {
//     console.log("JavaScript Program to Display Fibonacci Sequence Using Recursion\n\n");

//     function fibbonacci(fibo) {

//         if (fibo==1)
//         {
//             return 0;
//         }
//         else if(fibo==2)
//         {
//             return 1;
//         }
//         else
//         {
//             return fibbonacci(fibo-1)+fibbonacci(fibo-2);
//         }

//     }

//     let fibo = parseInt(prompt("Enter a total number to display fibonacci series:"));
//     for (let i = 1; i < fibo; i++) {

//         console.log(fibbonacci(i));

//     }


// }







// // 30)JavaScript Program to Find Factorial of Number Using Recursion

// {

//     console.log("JavaScript Program to Find Factorial of Number Using Recursion\n\n");
//     function fectorial(fect) {
//         if (fect===0 || fect===1) {
//             return 1
//         }else {
//             return fect * fectorial(fect-1)
//         }
//     }
//         let fect = parseInt(prompt("Enter a number for factorial"));

//         console.log(`fectorial of ${fect} is`,fectorial(fect));

// }






// // 31)JavaScript Program to Convert Decimal to Binary

// {

//     console.log("JavaScript Program to Convert Decimal to Binary\n\n");

//     let Decimal = 8;
//     let arr = [];
//     let temp= Decimal;
//     for (let i = 0; i <= Decimal; i++) {
//         if (temp==1 || Decimal==1) {
//             arr[i]=1;
//             break;
//         }
//         arr[i] = temp % 2;
//         temp= Math.floor(temp/2);
        
//     }
//     arr.reverse();
//     console.log(arr);   

// }











// // 32)JavaScript Program to Find ASCII Value of Character

// {

//     let char = prompt("Enter one character(only first char will be valied)");

//     console.log(char.charCodeAt(0));
// }













// // 33)JavaScript Program to Check Whether a String is Palindrome or Not

// {

//     let string = "level";
//     let palindrome = true;

//     for (char in string){
//         if (string[char]!=string[string.length - 1 - char]){
//             palindrome=false
//         }
//     }
//     console.log(palindrome);
// }













// // 34)JavaScript Program to Sort Words in Alphabetical Order

// {

//     let arr = ["rahul" , "aman" , "munna" , "dony" , "Nitesh" , "Abhishek"]
//     arr.sort();
//     console.log(arr);
    
// }







    

// // 35)JavaScript Program to Replace Characters of a String

{

    

}

// // 36)JavaScript Program to Reverse a String
// // 37)JavaScript Program to Create Objects in Different Ways
// // 38)JavaScript Program to Check the Number of Occurrences of a Character in
// // the String
// // 39)JavaScript Program to Convert the First Letter of a String into UpperCase
// // 40)JavaScript Program to Count the Number of Vowels in a String
// // 41)JavaScript Program to Remove a Property from an Object
// // 42)JavaScript Program to Check Whether a String Starts and Ends With Certain
// // Characters
// // 43)JavaScript Program to Check if a Key Exists in an Object
// // 44)JavaScript Program to Clone a JS Object
// // 45)JavaScript Program to Loop Through an Object
// // 46)JavaScript Program to Merge Property of Two Objects
// // 47)JavaScript Program to Count the Number of Keys/Properties in an Object
// // 48)JavaScript Program to Add Key/Value Pair to an Object
// // 49)JavaScript Program to Replace All Occurrences of a String
// // 50)JavaScript Program to Create Multiline Strings
// // 51)JavaScript Program to Format Numbers as Currency Strings
// // 52)JavaScript Program to Generate Random String
// // 53)JavaScript Program to Check if a String Starts With Another String
// // 54)JavaScript Program to Trim a String
// // 55)JavaScript Program to Convert Objects to Strings
// // 56)JavaScript Program to Check Whether a String Contains a Substring
// // 57)JavaScript Program to Compare Two Strings
// // 58)JavaScript Program to Encode a String to Base64
// // 59)JavaScript Program to Replace all Instances of a Character in a String
// // 60)JavaScript Program to Replace All Line Breaks with
// // 61)JavaScript Program to Display Date and Time
// // 62)JavaScript Program to Check Leap Year
// // 63)JavaScript Program to Format the Date
// // 64)Javascript Program to Display Current Date
// // 65)JavaScript Program to Compare The Value of Two Dates
// // 66)JavaScript Program to Create Countdown Timer
// // 67)JavaScript Program to Remove Specific Item From an Array
// // 68)JavaScript Program to Check if An Array Contains a Specified Value
// // 69)JavaScript Program to Insert Item in an Array
// // 70)JavaScript Program to Append an Object to an Array
// // 71)JavaScript Program to Check if An Object is An Array
// // 72)JavaScript Program to Empty an Array
// // 73)JavaScript Program to Add Element to Start of an Array
// // 74)JavaScript Program to Remove Duplicates From Array
// // 75)JavaScript Program to Merge Two Arrays and Remove Duplicate Items
// // 76)JavaScript Program to Sort Array of Objects by Property Values
// // 77)JavaScript Program to Create Two Dimensional Array
// // 78)JavaScript Program to Extract Given Property Values from Objects as Array
// // 79)JavaScript Program to Compare Elements of Two Arrays
// // 80)JavaScript Program to Get Random Item From an Array
// // 81)JavaScript Program To Perform Intersection Between Two Arrays
// // 82)JavaScript Program to Split Array into Smaller Chunks
// // 83)JavaScript Program to Include a JS file in Another JS file
// // 84)JavaScript Program to Get File Extension
// // 85)JavaScript Program To Check If A Variable Is undefined or null
// // 86)JavaScript Program to Set a Default Parameter Value For a Function
// // 87)JavaScript Program to Illustrate Different Set Operations
// // 88)Javascript Program to Generate a Random Number Between Two Numbers
// // 89)JavaScript Program To Get The Current URL
// // 90)JavaScript Program to Validate An Email Address
// // 91)JavaScript Program to Check If a Variable is of Function Type
// // 92)JavaScript Program To Work With Constants
// // 93)JavaScript Program to Pass Parameter to a setTimeout() Function
// // 94)JavaScript Program to Generate a Range of Numbers and Characters
// // 95)JavaScript Program to Perform Function Overloading
// // 96)JavaScript Program to Implement a Stack
// // 97)JavaScript Program to Implement a Queue
// // 98)JavaScript Program to Check if a Number is Float or Integer
// // 99)JavaScript Program to Pass a Function as Parameter
// // 100) JavaScript Program to Get the Dimensions of an Image
// // 101) JavaScript Program to Remove All Whitespaces From a Text
// // 102) JavaScript Program to Write to Console
// // 103) JavaScript Program to Convert Date to Number
// 1) JavaScript Program To Print Hello World

{
    document.write("Hello world!!")
}

// 2) JavaScript Program to Add Two Numbers


{

    let number1 = 5;
    let number2 = 7;

    let sum = number1 + number2;

    console.log(sum);


}

// 3) JavaScript Program to Find the Square Root

{

    let number = 16;
    let squareRoot = Math.sqrt(number);

    console.log(squareRoot);
}

// 4) JavaScript Program to Calculate the Area of a Triangle

{
    let base = 5;
    let height = 10;

    let area = (base * height) / 2;

    console.log(area);

}

// 5) JavaScript Program to Swap Two Variables

{
    let a = 5;
    let b = 10;

    console.log("Before swap");

    console.log("a:", a);
    console.log("b:", b);


    a = a + b
    b = a - b
    a = a - b

    console.log("after swap");
    console.log("a:", a);
    console.log("b:", b);

}

// 6) JavaScript Program to Solve Quadratic Equation
// x = (-b ± √(b^2 - 4ac)) / 2a

{
    // EQ = X^2 -3X + 2
    let a = 1;
    let b = -3;
    let c = 2;

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("Roots are real and different.");
        console.log("Root 1:", root1);
        console.log("Root 2:", root2);
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        console.log("Roots are real and the same.");
        console.log("Root:", root);
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log("Roots are complex and different.");
        console.log("Root 1:", realPart, "+", imaginaryPart, "*", "i");
        console.log("Root 2:", realPart, "-", imaginaryPart, "*", "i");
    }


}

// 7) JavaScript Program to Convert Kilometres to Miles

{
    let KM = 5;

    let miles = (KM * 0.621371);

    console.log(miles);
}

// 8) Javascript Program to Convert Celsius to Fahrenheit

{

    let celsius = 25;
    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log(celsius + "°C is equal to " + fahrenheit + "°F");

}

// 9) Javascript Program to Generate a Random Number

{
    let digits = parseInt(prompt("How many digits do you want?:"));
    let randomNumber = Math.random();
    console.log(randomNumber * Math.pow(10, digits));

}


// 10)Javascript Program to Check if a number is Positive, Negative, or Zero

{
    let num = 1;
    if (num > 0) {
        console.log("Number is positive");
    }
    else if (num < 0) {
        console.log("Number is negative");

    }
    else {
        console.log("Number is Zero");
    }
}

// 11)Javascript Program to Check if a Number is Odd or Even

{
    let num = 1;
    if (num % 2 == 0) {
        console.log("Number is even");
    }
    else {
        console.log("Number is odd");
    }
}

// 12)JavaScript Program to Find the Largest Among Three Numbers

{
    let a = 10;
    let b = 20;
    let c = 30;

    if (a > b && a > c) {
        console.log("A is larger than B & C");
    }
    else if (b > a && b > c) {
        console.log("B is larger than A & C");
    }
    else {
        console.log("C is larger than B & A");
    }
}

// 13)JavaScript Program to Check Prime Number

{
    let number = 6545
    let isPrime = true
    if (number === 1) {
        console.log("1 is neither prime nor divisible number.");
    }
    else if (number > 1) {
        for (let i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is not a prime number`);
        }
    }
    else {
        console.log(`${number} is not a prime number.`);
    }
}

// 14)JavaScript Program to Print All Prime Numbers in an Interval

{
    let startInterval = parseInt(prompt("Enter starting range:"));
    let endInterval = parseInt(prompt("Enter ending range:"));

    for (let i = startInterval; i <= endInterval; i++) {
        let isPrime = true;
        if (i <= 1) {
            isPrime = false;
        }
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
}

// 15)JavaScript Program to Find the Factorial of a Number

{
    let fect = parseInt(prompt("Enter a number for factorial"));
    let fectorial = 1;

    for (let i = fect; i >= 1; i--) {
        fectorial *= i;
    }

    console.log(fectorial);

}

// 16)JavaScript Program to Display the Multiplication Table

{
    let table = 2;
    console.log("table of ", table, ":\n\n");

    for (let i = 1; i <= 10; i++) {

        console.log(table + " X " + i + " = " + table * i);

    }
}

// 17)JavaScript Program to Print the Fibonacci Sequence

{
    let fibo = parseInt(prompt("Enter a total number to display fibonacci series:"));
    let fibbonaci = 0;
    let num1 = 0, num2 = 1;

    for (let i = 1; i <= fibo; i++) {
        fibbonaci = num1;
        num1 = num2;
        num2 = num1 + fibbonaci;
        console.log(fibbonaci + ",");
    }

}

// 18)JavaScript Program to Check Armstrong Number
{
    let num = 371;
    let originalNum = num;
    let n = 0, result = 0;

    while (originalNum != 0) {
        originalNum = Math.floor(originalNum / 10);
        n++;
    }

    originalNum = num;

    while (originalNum != 0) {
        let remainder = originalNum % 10;
        let power = Math.pow(remainder, n);
        result = result + power;
        originalNum = Math.floor(originalNum / 10);
    }

    if (result == num)
        console.log(num + " is an Armstrong number");
    else
        console.log(num + " is not an Armstrong number");
}

// 19)JavaScript Program to Find Armstrong Number in an Interval

{

    let start = 1;
    let end = 1000;

    for (let i = start; i <= end; i++) {
        let originalNum = i;
        let n = 0, result = 0;

        while (originalNum != 0) {
            originalNum = Math.floor(originalNum / 10);
            n++;
        }

        originalNum = i;

        while (originalNum != 0) {
            let remainder = originalNum % 10;
            let power = Math.pow(remainder, n);
            result = result + power;
            originalNum = Math.floor(originalNum / 10);
        }

        if (result == i)
            console.log(i + " is an Armstrong number");
    }

}

// 20)JavaScript Program to Make a Simple Calculator
// 21)JavaScript Program to Find the Sum of Natural Numbers

{

    let n = 100;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log("Sum of first " + n + " natural numbers is: " + sum);

}

// 22)JavaScript Program to Check if the Numbers Have Same Last Digit

{

    let num1 = 123;
    let num2 = 223;

    if (num1 % 10 === num2 % 10) {
        console.log("Both numbers have the same last digit.");
    } else {
        console.log("Both numbers do not have the same last digit.");
    }

}

// 23)JavaScript Program to Find HCF or GCD

{

    let num1 = 48;
    let num2 = 18;
    let hcf = 0;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf);

}

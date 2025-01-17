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
        console.log("Root 1:", realPart, "+", imaginaryPart,"*", "i");
        console.log("Root 2:", realPart, "-", imaginaryPart,"*", "i");
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
    let digits = prompt("How many digits do you want?:");
    let randomNumber = Math.random();
    console.log(randomNumber*Math.pow(10, digits));

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
    if (num%2== 0) {
        console.log("Number is even");
    }
    else {
        console.log("Number is odd");
    }
}

// 12)JavaScript Program to Find the Largest Among Three Numbers
// 13)JavaScript Program to Check Prime Number
// 14)JavaScript Program to Print All Prime Numbers in an Interval
// 15)JavaScript Program to Find the Factorial of a Number
// 16)JavaScript Program to Display the Multiplication Table
// 17)JavaScript Program to Print the Fibonacci Sequence
// 18)JavaScript Program to Check Armstrong Number
// 19)JavaScript Program to Find Armstrong Number in an Interval
// 20)JavaScript Program to Make a Simple Calculator
// 21)JavaScript Program to Find the Sum of Natural Numbers
// 22)JavaScript Program to Check if the Numbers Have Same Last Digit
// 23)JavaScript Program to Find HCF or GCD
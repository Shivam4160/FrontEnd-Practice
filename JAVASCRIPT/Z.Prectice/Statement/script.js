// check number 

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


// vote
{
    let age = 18;
    if (age >= 18) {
        console.log("You are eligible for Vote");
    }
    else {
        console.log("You are not eligible for Vote");
    }
}


// larger
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


// Leap year
{
    let year = 1130;
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
        console.log("year is a leap year");

    } else {
        console.log("year is a not a leap year");
    }
}


// Grade
{
    let totalgrades=400;
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {

        Grade = "A"

    } else if (percentage <= 79 && percentage >= 60) {

        Grade = "B" 

    } else if (percentage <= 59 && percentage >= 40) {

        Grade = "C"

    } else {

        Grade = "D"

    }

    console.log("Your grade is",Grade,".");

}
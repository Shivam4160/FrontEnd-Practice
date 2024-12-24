/* Javascript Template Literals */

/* TypesOf Operator */

/*

1. Arithmetic
2. Assigement
3. Logical
4. Comparision
5. Ternary
6. typeOf
7. instanceOf
8. Bitwise 
9. ++ , -- [ unary Operator ]

*/

// Arithmetic Operator

{
    let x = 10
    let y = 6

    console.log(x + y);

    console.log(x - y);

    console.log(x * y);

    console.log(x / y);

    console.log(x % y);

    console.log(x ** y); // 10*10*10*10*10*10

}

// Assignement Operator 

{
    let x = 5
    let y = 3

    // console.log(x = y);
    
    console.log(x+=y); // x = x + y

    console.log(x-=y); // x = x - y

    console.log(x*=y); // x = x * y

    console.log(x/=y); // x = x / y

    console.log(x**=y); // x = x ** y

    console.log(x%=y); // x = x % y

}

// comparision operator

{
    let x = 1000
    let y = 1000

    console.log(x == y);

    console.log(x != y);

    console.log(x === y);

    console.log(x !== y);

    console.log(x < y);

    console.log( x > y);

    console.log(x <= y);

    console.log(x >= y);

}

// Logical Operator

{
    let x = true
    let y = false
    let z = true

    console.log(x && y);
    console.log(x && y && z);
    console.log(x || y || z);
    console.log(!(x && y) && !(z || x) || !(x || z));

}

// Ternary Operator

// statement ? code 1 : code 2

{let age = 18

age >= 18 ? console.log('You Are Eligible') : console.log('You Are Not Eligible');}

// typeOf Operator 

console.log(typeof 12);

// Bitwise Operator

{
    let x = 1
    let y = 0

    console.log(x & y);
    console.log(x & x);
    console.log(y & y);

    console.log(x | y);
    console.log(x | x);
    console.log(y | y);

    console.log(x ^ y);
    console.log(x ^ x);
    console.log(y ^ y);

    console.log(!(x ^ y));
    console.log(!(x ^ x));
    console.log(!(y ^ y));

    console.log(!x);
    console.log(!y);

}

// unary operator

{
    let x = 12
    let y = 24

    // console.log(++12);

    console.log(++x);
    console.log(x++);
    console.log(--y);
    console.log(y--);
    console.log(-x);
    console.log(+y);
}



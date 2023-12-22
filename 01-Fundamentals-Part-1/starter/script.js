
// Values and Variables:
/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

// Javascript uses Camel-Case
let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/



// Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hello");

javascriptIsFun = "YES";

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// undefined data type
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
*/


/*
// let, const and var

// variables declared with let can always be changed
let age = 30;
age = 31;

// values in a const-variable cannot be changed. Trying to do so will throw an error
const birthYear = 1991;
// birthYear = 1990;
// cost-variables also HAVE to be initialized. They can't be empty
// const job;

// var is the old way do declare variables. Should not be used anymore
var job = "programmer";
job = "teacher";

// we actually don't have to declare variables with these words at all. We can just write the following
lastName = "Schmitt";
console.log(lastName);
//BUT this doesn't create the variables in the current scope but on the global scope
 */

/*
// Basic Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// We can log multiple values at once
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// We can use + to concatenate strings
const firstName = "Benedikt";
const lastName = "Schmitt";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; //100

// Comparison operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); //true

const isFullAge = ageSarah >= 18;
 */

/*
//Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// Assignment is done right-to-left
let x, y; //here we can declare two separate variables at once

x = y = 25 - 10 - 5;
console.log(x, y);

//Parentheses has the highest precedence
const averageAgeIncorrect = ageJonas + ageSarah / 2;
const averageAgeCorrect = (ageJonas + ageSarah) / 2;
console.log(averageAgeIncorrect);
console.log(averageAgeCorrect);
 */

/*
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2023;

const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(jonas);

// Easier way of doing it with TemplateLiteral
// We use backticks ``
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.groupCollapsed(jonasNew);
// Since you can use backticks for every kind of string, you should just use it every time. It's good practice

// another good use of backticks is writing multi-line string
 */

/*
// Taking decisions: if / else statements
const age = 15;

if ((age >= 18) === true) {
    console.log(`Sarah can start driving license 🚗`)
} else {
    console.log(`Sarah is ${18 - age} years too young.`)
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
 */

/*
// Type conversion and coercion

// Conversion is when we manually convert from one type to another
// Coercion is when JavaScript automatically changes data types

// type conversion
const inputYear = `1991`;
console.log(Number(inputYear));

console.log(typeof (inputYear));
console.log(typeof (Number(inputYear)));

// Trying to convert a non-Number into a number will result in NaN (Not a Number)
console.log(Number(`Jonas`));

// Obviously we can also convert something to String
console.log(String(23));

// We can also convert to boolean but this will be covered in a later lecture (Truthy and Falsy Values)

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
// - * / trigger conversion to Number, + triggers conversion to String

// Course-Creator says that type-coercion is not very popular but it is really good when you understand it
// The reason why it isn't very popular is because it decreases the readability of your code. So just use conversion

 */

/*
// Truthy and Falsy Values

// There are only five falsy values:

//    0
//    ``
//    undefined
//    null
//    NaN


console.log(Boolean(0));
console.log(Boolean(``));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(` `));

// Use-Case
const money = 0;
if (money) {
    console.log(`Treat yourself!`);
} else {
    console.log(`You should save some money.`)
}

// You can also check whether a variable is defined or not
let height;
if (height) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is undefined.`);
}
 */

/*
// Equality Operators: == and ===
const age = 18;

// === is the STRICT equality operator
// It does not perform type coercion
if (age === 18) {
    console.log(`You're an adult, Harry!`);
}

// == is the LOOSE equality operator
// It DOES perform type coercion
if (age == `18`) {
    console.log(`You're an adult, Harry!`);
}

// It is usually better to use the strict version

// We can give an input-prompt on our website and save the input

const favourite = Number(prompt(`What's your favourite number?`));

console.log(favourite);

if (favourite === 3) {
    console.log(`Cool! 3 is an amazing number!`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number.`);
} else {
    console.log(`Your number sucks!`)
}

// There is also an operator for not equal obviously
// !== is the STRICT version
// != is the LOOSE version
if (favourite !== 3) {
    console.log(`Why not 3?`);
}
 */


// Boolean Logic
// The basic AND, OR, NOT shenanigans

/*
// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

// For whatever ungodly reason, AND is written as &&
console.log(hasDriversLicense && hasGoodVision);

// OR is ||
console.log(hasDriversLicense || hasGoodVision);

// NOT is !
console.log(!hasDriversLicense);

// Combining everything to determine whether or not someone should be able to drive
if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive.`);
} else {
    console.log(`Someone else should drive.`);
}

const isTired = true

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
} else {
    console.log(`Someone else should drive.`);
}
 */

/*
// The switch statement
const day = `tuesday`;

switch (day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break
    case `friday`:
        console.log(`Record videos`);
        break
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break
    default:
        console.log(`Not a valid day`);
}
 */

/*
// Statements and expressions

// Expression is a piece of code that produces a value
3 + 4;
1991; // even a single number produces a value
true && false && !false;


// Statements is a bigger piece of code which does not produce a value by itself
if (23 > 10) {
    const str = `23 is bigger`;
}
 */

/* 
// The conditional (Ternary) Operator
// Another conditional apart from if-else and switch-case

const age = 23;
age >= 18 ? console.log(`I like to drink wine.`) : console.log(`I like to drink water`);

// Here, age >= 18 is the value in the parentheses of if
// the first log-command is executed if the expression is true
// the : is our else
// There is no else if
// Best used for small things
// Keep readability in mind when using it

// Often used to conditionally declare variables
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);
// Also let's you declare a variable outside if-else blocks, so it's available everywhere

// You can ALSO use the ternary operator inside string literals which you can't do with if-else
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
 */
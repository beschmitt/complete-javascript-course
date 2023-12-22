`use strict`;
/*
// Strict Mode makes it easier to write secure code

// To initialize it, you write the following at the beginning of your code
'use strict';

// Again, it is important, that this is the beginning of your code

// Strict mode forbids certain things and gives us visible errors in the developer console

let hasDriversLicense = false;
const passTest = true;


//if (passTest === true) {
//    hasDriverLicense = true; // With strict mode we get and error that this variable doesn't exist
//}


if (hasDriversLicense === true) {
    console.log(`I can drive`);
}

// Strict mode also shows a list of variables that are reserved for later features

// const interface = `Audio`; // This will throw the error `Unexpected strict mode reserved word
 */

/*
// Functions
function logger() {
    console.log(`My name is Jonas`);
}

logger();
logger();

// Functions with arguments
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

/*
// Function Declarations vs. Expressions
// There are different ways to declare functions and they work differently

// function DECLARATION
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// Function declarations can be called before they are defined in the code
// Can't do that with function expressions
 */

/*
// Arrow functions

// Another type of function expression that is shorter and faster to write
// Regular function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function

// Very good for simple functions
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1991));

// If the function is longer we still need {} and return
// So I don't really know what these functions would be used for. They seem kinda pointless. Which is bad for an Arrow.
const yearsUntilRetirement1 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement1(1991));

// We can also give several arguments to an Arrow function
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} still has ${retirement} years until retirement.`
}

console.groupCollapsed(yearsUntilRetirement2(1991, `Scott`));
 */

/*
// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitProcessor(2, 3));
 */

/*
// Introduction to Arrays

//You can create and call them just like in Python
const friends = [`Michael`, `Steven`, `Peter`];

console.log(friends);
console.log(friends[0]);

// Different way of creating an array
const years = new Array(1991, 1984, 2008, 2020);

// Get number of elements in array
console.log(friends.length);

// Get last element of array
console.log(friends[friends.length - 1]);

// Changing a specific value
friends[2] = `Jay`;
console.log(friends);

// Arrays can hold different types of data
const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `tacher`, friends];
console.log(jonas);


// Exercise
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

// We can make a new array based on the function-calls
const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
 */

/*
// Basic Array Operations

const friends = [`Michael`, `Steven`, `Peter`];

// .push() adds elements to the end of an array
let newLength = friends.push(`Jay`);
console.log(friends);
//.push() simultaneously returns the length of the new array
console.log(newLength);

// .unshift() adds elements to the beginning of the array
newLength = friends.unshift(`John`);
console.log(friends);
console.log(newLength);

// .pop() removes the element at the end of the array
newLength = friends.pop() // no argument needed, since it's always the last element
console.log(friends);
console.log(newLength); // This returns `Jay`. So .pop() returns the element, that was removed and NOT the new length

// .shift() removes the first element of the array
newLength = friends.shift();
console.log(friends);
console.log(newLength);

// .indexOf() returns the array-index of the given value
console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`)); // This returns -1, since Bob isn't in the array

// .includes() returns true if the element is in the array and false if not
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bon`));
// we can combine this with conditionals
if (friends.includes(`Peter`) === true) {
    console.log(`You have a friend called Peter.`);
} else {
    console.log(`Peter is not your friend.`);
}
 */

/*
// Introduction to Objects
// In objects we define key:value-pairs
// Kinda like dictionaries in python
// There are several ways of creating objects, but the easiest is using {}

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991, //This will get calculated
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}

// Every key is called a property
// So the object "Jonas" has 5 properties
console.log(jonas[`firstName`])
 */

/*
// Dot vs. Bracket notation

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991, //This will get calculated
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}

console.log(jonas[`firstName`]);
console.log(jonas.firstName);

// Dot-notation gives you recommendations for which values are in the object
// With Bracket-notation you can use operations

const nameKey = `Name`;

console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);
// This is a very basic example but it can be very powerful when used correctly

// Bracket-Notation is also useful when we don't know which properties an object has
const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.`);
console.log(jonas[interestedIn]);

// When trying to access a property that does not exist, it will return undefined
// To combat this, we can do the following

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Please enter a valid property.`);
}

// How to add new properties to an object
jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtmann`;
console.log(jonas);

// Challenge
// `Jonas has 3 friends and his best friend is called Michael`

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
 */

/*
// Object methods
// We can add functions to objects

let jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
}

console.log(jonas.calcAge(1991));
console.log(jonas[`calcAge`](1991));

// We already have the birthYear as part of the object
// So we can also calculate the age like this
console.log(jonas.calcAge(jonas.birthYear));

// But even better is, not passing an argument to the function at all and instead using the this-variable
// The this-keyword is equal to the object on which the method is called ( so here this = jonas)

jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    calcAge: function () {
        return 2037 - this.birthYear;
    }
}

console.log(jonas.calcAge());

// As a final thing: we can have methods that need to be called multiple times
console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());

// In this case the .calcAge() method gets called three times and also gets calculated three times
// In this example it's no big deal. But what if we have methods with very high computational load?
// To combat this, we can just calculate the Age once and then store it for future calls

jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
}

// Now we have the age calculated and can just call it after using the method once
console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    summary: function () {
        this.summary = `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
        return this.summary;
    }
}

console.log(jonas.summary());
 */

/*
// Iteration: The for Loop

// for loop has three parts
// first is the initial value of a counter
// second is a logical condition, which is evaluated every time before the next iteration starts
// third is how to update the counter after each iteration
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
 */

/*
// Looping Arrays, Breaking and Continuing
const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

for (let element = 0; element < jonas.length; element++) {
    console.log(jonas[element], typeof jonas[element]);
}

const jonasType = [];
for (let element = 0; element < jonas.length; element++) {
    jonasType.push(typeof jonas[element]);
    // jonasType[element] = typeof jonas[element];
}

console.log(jonasType);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (age = 0; age < years.length; age++) {
    ages.push(2037 - years[age]);
}
console.log(ages);

// Continue and break
// Continue exits the current iteration of the loop and goes to the next one
console.log(`--- ONLY STRING ---`);
for (let element = 0; element < jonas.length; element++) {
    if (typeof jonas[element] !== `string`) {
        continue;
    }
    console.log(jonas[element], typeof jonas[element]);
}

// Break completely exits the loop
console.log(`--- LOG NO ELEMENTS AFTER A NUMBER ---`);
for (let element = 0; element < jonas.length; element++) {
    console.log(jonas[element], typeof jonas[element]);
    if (typeof jonas[element] === `number`) {
        break;
    }
}
 */

/*
// Looping backwards and loops in loops
const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

for (let element = jonas.length - 1; element >= 0; element--) {
    console.log(element, jonas[element]);
}


// Nested for-loop

// Basic example
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    }
}

// Advanced example
for (let element = 0; element < jonas.length; element++) {
    if (typeof jonas[element] === 'object') {
        for (let friend = 0; friend < jonas[element].length; friend++) {
            console.log(jonas[element][friend]);
        }
        continue
    }
    console.log(jonas[element]);
}
 */

/* 
// The while loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
// While loops are very useful when you need to repeat something that isn't based on a numeric counter
// e.g. a boolean or a random number

// Create a rounded number between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;

// Math.random creates a number between 0 and 1
// Math.trunc gets rid of decimals

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop will end.`);
}
 */
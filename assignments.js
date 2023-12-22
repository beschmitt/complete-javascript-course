`use strict`;
/*
//Values and Variables

const country = "Germany";

const continent = "Europe";

let population = 83200000;

console.log(continent);
console.log(country);
console.log(population);


//Data Types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const, var

language = "german";

// country = "Iceland";
// This will throw an error since we can't change a const


// Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation + 1);
console.log(population > 6000000);
console.log(population > 33000000);
let description = "Germany is in Europe and its 83.2 million people speak german";

// String and Template Literals
let descriptionBetter = `${country} is in ${continent} and its ${population} people speak ${language}.`;
console.log(descriptionBetter);

// Taking decisions: if/else statements
if (population >= 33000000) {
    console.log(`Germany's population is above average.`);
} else {
    console.log(`Germany's population is ${33000000 - population} below average.`);
}

// Type conversion and coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 623
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Equality operators: == and ===
numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border.`);
} else {
    console.log(`No borders.`);
}


//Logical Operators
if (language === `english` && population < 50000000 && !isIsland) {
    console.log(`You should live in Germany.`);
} else {
    console.log(`Germany does not meet your criteria.`)
}


// The switch statement
switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`Most number of native speakers`);
        break
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break
    case `english`:
        console.log(`3rd place`);
        break
    case `hindi`:
        console.log(`4th place`);
        break
    case `arabic`:
        console.log(`5th most spoken language`);
        break
    default:
        console.log(`Also a language that people speak`);
        break
}


// The ternary operator
population >= 33000000 ? console.log(`Germany's population is above average`) : console.log(`Germany's population is below average`);
 */

/*
// Functions
function describeCountry(country, population, capitalCity) {
    answer = `${country} has ${population} people and its capital city is ${capitalCity}.`
    return answer;
}

infoGermany = describeCountry(`Germany`, 83200000, `Berlin`);
infoSpain = describeCountry(`Spain`, 48000000, `Madrid`);
infoIceland = describeCountry(`Iceland`, 370000, `Reykjavík`);
console.log(infoGermany);
console.log(infoSpain);
console.log(infoIceland);
 */

/*
// Function declarations vs. expressions
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

const percentageGermany1 = percentageOfWorld1(83000000);
const percentageSpain1 = percentageOfWorld1(48000000);
const percentageIceland1 = percentageOfWorld1(370000);
console.log(percentageGermany1);
console.log(percentageSpain1);
console.log(percentageIceland1);

const percentageOfWorld2 = function (population) {
    return (population / 7900000000) * 100;
}

const percentageGermany2 = percentageOfWorld2(83000000);
const percentageSpain2 = percentageOfWorld2(48000000);
const percentageIceland2 = percentageOfWorld2(370000);
console.log(percentageGermany2);
console.log(percentageSpain2);
console.log(percentageIceland2);
 */

/*
// Arrow Functions
const percentageOfWorld3 = population => (population / 7900000000) * 100;

console.log(percentageOfWorld3(83000000));
 */

/*
// Functions calling other functions

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation(`germany`, 83000000));
console.log(describePopulation(`spain`, 48000000));
console.log(describePopulation(`iceland`, 370000));
 */

/*
// Introduction to Arrays
const populationValues = [83000000, 48000000, 370000, 67750000];

populationValues.length === 4 ? console.log(`true`) : console.log(`false`);

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

const percentages = [percentageOfWorld1(populationValues[0]), percentageOfWorld1(populationValues[1]), percentageOfWorld1(populationValues[2]), percentageOfWorld1(populationValues[3])];
console.log(percentages);
 */

/*
// Basic array operations
const neighbours = [`Dänemark`, `Polen`, `Tschechien`, `Österreich`, `Schweiz`, `Frankreich`, `Luxemburg`, `Belgien`, `Niederlande`];

neighbours.push(`Utopia`);
neighbours.pop();

// This kinda doesn't work, since I live in germany
neighbours.includes(`Germany`) ? NaN : console.log(`Probably not a central European country`);

neighbours[neighbours.indexOf(`Dänemark`)] = `Kingdom of Dänemark`;
console.log(neighbours);
 */

/*
// Introduction to Objects
const myCountry = {
    country: `Germany`,
    capital: `Berlin`,
    language: `German`,
    population: 83200000,
    neighbours: [`Dänemark`, `Polen`, `Tschechien`, `Österreich`, `Schweiz`, `Frankreich`, `Luxemburg`, `Belgien`, `Niederlande`]
};
console.log(myCountry);
 */

/*
// Dot vs. Bracket notation
const myCountry = {
    country: `Germany`,
    capital: `Berlin`,
    language: `German`,
    population: 83200000,
    neighbours: [`Dänemark`, `Polen`, `Tschechien`, `Österreich`, `Schweiz`, `Frankreich`, `Luxemburg`, `Belgien`, `Niederlande`]
};
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2000000;
console.log(myCountry.population);
myCountry[`population`] = myCountry[`population`] - 2000000;
console.log(myCountry.population);
 */

/*
// Object Methods
const myCountry = {
    country: `Germany`,
    capital: `Berlin`,
    language: `German`,
    population: 83200000,
    neighbours: [`Dänemark`, `Polen`, `Tschechien`, `Österreich`, `Schweiz`, `Frankreich`, `Luxemburg`, `Belgien`, `Niederlande`],
    describe: function () {
        this.description = `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        return this.description
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.description);
console.log(myCountry.checkIsland())
console.log(myCountry.isIsland);
 */

/*
// Iteration: The for-loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}
 */

/*
// Looping Arrays, Breaking and Continuing

function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

const populations = [83000000, 48000000, 370000, 68000000];

percentages2 = [];
for (let population = 0; population < populations.length; population++) {
    percentages2.push(percentageOfWorld1(populations[population]));
}

console.log(percentages2);
 */

/* 
// Looping backwards and loops in loops
const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

for (pair = 0; pair < listOfNeighbours.length; pair++) {
    for (country = 0; country < listOfNeighbours[pair].length; country++) {
        console.log(listOfNeighbours[pair][country]);
    }
}
 */

/* 
// The while loop
function percentageOfWorld1(population) {
    return (population / 7900000000) * 100;
}

const populations = [83000000, 48000000, 370000, 68000000];

percentages2 = [];
for (let population = 0; population < populations.length; population++) {
    percentages2.push(percentageOfWorld1(populations[population]));
}

percentages3 = [];
let population = 0;
while (population < populations.length) {
    percentages3.push(percentageOfWorld1(populations[population]));
    population++;
}

console.log(percentages2);
console.log(percentages3);

// It works but a for loop is just way better suited for this, since we have a numeric counter and we actually know the length of the array
 */
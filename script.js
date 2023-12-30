//////////////////////////////
// I. Variables & Datatypes //
//////////////////////////////

// A. Q + A //

/*
1. How do we assign a value to a variable?
- Use "=" assignment operator.
2. How do we change the value of a variable?
- Reassign it using the assignment operator.
3. How do we assign an existing variable to a new variable?
- newVar = existingVar
4. Remind me, what are declare, assign, and define?
- Declare: The process of introducing a variable to the compiler or interpreter. It tells the compiler that the variable exists and specifies its data type but doesn't allocate memory or assign a value.
- Assign: The process of giving a value to a variable. It involves using the assignment operator to store a particular value in a variable.
- Define: the definition specifies the body for a function, associates an identifier with the function, and allocates storage for it.
5. What is pseudocoding and why should you do it?
- Pseudocoding is the process of planning a computer program by writing a high-level description of its logic, structure, and flow using natural language rather than a specific programming language syntax. It helps in organizing thoughts before actual coding begins and serves as a roadmap for implementation. 
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
-  A common guideline is to spend a significant amount of time upfront on problem-solving, design, and planning (possibly 50-80%), and the remaining time on actual implementation. 
 */

// B. Strings //

let firstVariable = "Hello World";
firstVariable = 12;
let secondVariable = firstVariable;
secondVariable = "A String";
console.log(`The value of firstVariable is ${firstVariable}.`);
let yourName = "YZ";
let intro = "Hello, my name is " + yourName;
console.log(intro);

// C. Booleans //

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a < a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm //

let animal = "cow";
console.log(animal === "cow" ? "mooooo" : "Hey! You are not a cow.");

// E. Driver's Ed //
let age = 60;
console.log(age >= 16 ? "Here are the keys!" : "Sorry, you're too young.");


///////////////
// II. Loops //
///////////////

// A The basics //

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
    console.log(i);
}
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
}

// B. Get even //

// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " is an even number");
    } else {
        console.log (i);
    }
}

// C. Give me Five //
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`I found a ${i}. High five! Three is a crowd`);
    } else if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }
}
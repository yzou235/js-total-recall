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


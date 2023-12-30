// III. Arrays & Control flow

// A. Talk about it //

/**
 * What are the things in an array called?
 * - elements or items
 * Do Arrays guarantee those things will be in order?
 * - Yes. We can access each element based on its position in the array (index).
 * What real-life thing could you model with an array?
 * - inventory list
 */


// B. Easy Does It //

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = [10, 24, 35];


// C. Accessing elements //

// Given the following array 
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
firstEl = randomThings[0]
console.log(firstEl);
// Change the value of "Hello" to "World"
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);


// D. Change values //

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
thirdEl = ourClass[2]
console.log(thirdEl);
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
// test
console.log(ourClass);


// E. Mix It Up //
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "yz");
console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
console.log(myArray);



// F. Biggie Smalls //

// Create a variable that contains an integer.
let int = 7;
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s  big number if the number is greater than or equal to 100.
if (int < 100) {
    console.log("little number");
} else {
    console.log("big number");
}


// G. Monkey in the Middle//

// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if (int < 5) {
    console.log("little number");
} else if (int > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}


// H. What's in Your Closet? //

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// 5. In the same way, access one item from Thom's pants array.
// 6. Access one item from Thom's accessories array.
const thomsOutfit = [
    thomsCloset[0][0], // Thom's shirt
    thomsCloset[1][1], // Thom's pants
    thomsCloset[2][2]  // Thom's accessories
];
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsOutfit.join(", ") + "!");
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
console.log("Thom is cozy in his " + thomsCloset[1][2] + " this winter!");
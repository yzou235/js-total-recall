// IV. Functions

// A. printGreeting //

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
function printGreeting(name) {
    return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));


// B. printCool //

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(argument) {
    console.log(`${argument} is cool`);
}
printCool("Captain Reynolds");


// C. calculateCube //

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num) {
    return Math.pow(num, 3);
}
console.log(calculateCube(5));


// D. isVowel //

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
}
console.log(isVowel("a"));
console.log(isVowel("E"));
console.log(isVowel("C"));
console.log(isVowel("Q"));
console.log(isVowel("u"));


// E. getTwoLengths //

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2) {
    return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]


// F. getMultipleLengths //

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(strings) {
    return strings.map(string => string.length);
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]


// G. maxOfThree //

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxOfThree(6, 9, 1));
// => 9


// H. printLongestWord //
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(strings) {
    let longest = "";
    for (let string of strings) {
        if (string.length > longest.length) {
            longest = string;
        }
    }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
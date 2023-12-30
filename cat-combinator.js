// Cat Combinator


// 1. Mama cat //

// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
const cat1 = {
    name: "Mary",
    breed: "Manx",
    age: "3"
}
// console.log the cat's age
console.log(cat1.age);
// console.log the cat's breed
console.log(cat1.breed);


// 2. Papa cat // 

// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
    name: "James",
    breed: "Siamese",
    age: "4"
}


// 3. Combine Cats! //

// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object. Pass cat1and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }

// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCats function by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
 
// Make it so the combineCats function will return a combination of the two incoming cats

// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

function combineCats(mama, papa) {
    return {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + "-" + papa.breed
    } 
}

console.log(combineCats(cat1, cat2));


// 4. Cat brain bender //

// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// catCombinator can use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
console.log(combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
))


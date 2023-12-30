// Objects

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A. Make a user object //

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

let user = {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    age: 32,
    purchased: []
}


// B. Update the user //

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "jane.doe@gmail.com";
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age ++;


// C. Adding keys and values //

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Atlanta";


// D. Shopaholic! //

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);


// E. Object-within-object //

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Chicago",
    purchased: []
}
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("The One Ring", "A latte");
// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);


// F. Loops //

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (item of user.purchased) {
    console.log (item);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (item of user.friend.purchased) {
    console.log (item);
}


// G. Functions can operate on objects //

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
function updateUser() {
    user.age ++;
    user.name = user.name.toUpperCase();
}
updateUser(user);
console.log(user);

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {
    person.age ++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user.friend);
console.log(user.friend);
// I paired [by myself, with:] on this challenge.




// Pseudocode
// secretNumber set to some value 
// set secretNumber to 7, overwrites above line 
// set password to 4
//set password to "just open the door", overwrites above line
//define a variable "allowedIn" set its value to true
//alter allowedIn value to false, overwrites above line
// Create an array members with 4 elements with John being the first
//and Mary being the second
// 
// 


// __________________________________________
// Write your code below.
var secretNumber=5;
secretNumber=7;

var password="4";
password="just open the door";

var allowedIn=true;
allowedIn=false;

var members=["John","P", "Q", "Mary"];






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//Dont think anything I wrote would have to be refactored




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Pretty straightforward introduction into creating variables
//and objects in JS, definitely a learning curve with my 0 background though.
// 
// 
// 
// 
// 


// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)


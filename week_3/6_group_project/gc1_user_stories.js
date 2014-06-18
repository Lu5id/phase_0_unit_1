Given two arrays with numbers in them, we want to create
a few functions that return the correct values adding 
the numbers together, evaluating the mean of the numbers,
as well as the median.

I'm not entirely sure what the initial code does:

	function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
})

If the user answers the questions incorrectly, It will
return an "ERROR" message.

Firstly, create a sum function, once created the console
will return a value of "1."

With the triple equal sign, the instructions are calling
for a boolean answer. If the value entered is anything
besides "27" (sum of the odd array) 
return a value of false, if not return "2."

Same as above, but the even array. If answered correctly
return a value of "3."

Create a function to evaluate the mean number of the arrays
If done right, return "4."

For the odd length array if the user enters any value 
besides 3.857142857142857, then return an error message.
(15 decimal place requirement in instructions?)
If answered correctly return "5."

Same as above, but for the number 5.375.
If answered correctly return "6."

Create a median function for the 2 arrays 
Return the value "7."

For the odd length array if the user enters any value
besides 4, then return an error message.
If answered correctly return "8."

For the even length array if the user enters any value 
besides 5.5 then return an error message.
If answered correctly return "9."
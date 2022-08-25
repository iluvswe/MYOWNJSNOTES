//---------------------MOST COMMON STRING METHODS----------------

var sentence ="John is walking home";
console.log(sentence.length); 
/* _.length is a property that exists in
string datatypes and gives the length of a string including spaces; 
output is 20 */

console.log(sentence.indexOf("i")); 
/* A method (remember that methods usually 
come with parentheses) gives the index location of the string element.
Output would be 5 for the letter "i" */
console.log(sentence.indexOf("walking")); //output is 8

console.log(sentence.replace("is", "was")) 
/*takes 2 inputs (first one is original string, second one is new string) 
and replaces a string or letter
from the original entire string with something new.  */
console.log(sentence.replace("walking", "running"));

console.log(sentence.toUpperCase()); 
/* doesn't take any inputs
but still needs parentheses bc it is a METHOD, not a property. */
var newSentence = "John is WALKING home";
console.log(newSentence.toLowerCase()); 
/* changes everything in the string to lowercase. */

console.log(sentence.slice(0,8)); 
/* takes two inputs or arguments (first input is starting position, second input is 
ending position) and will give the range of strings that includes 
the first index position and ends right before the last index position. 
Output is "John is" (starts at J which is index 0 and 
ends right before the space which is index 8) in the example */
console.log(sentence.slice(8, 18)); //output is "walking ho"
console.log(sentence.slice(8)); 
/* starts at index 8 and will give the rest of the string.
Output is "walking home" */
console.log(sentence.slice(5)); //output is "is walking home"

// -------------
console.log(sentence.split(" ")); 
/* a method that converts strings into an array.
What you pass in is what you want to split the string by, also know as the delimeter.
For example, passing in " " (space) will split it by spaces. 
Output is [ 'John', 'is', 'walking', 'home' ]  */
console.log(sentence.split("is")); 
/*delimeter or how it is split is before and
after the word "is"; so output is [ 'John ', ' walking home' ] */
console.log(sentence.split("walking")); /* Output is [ 'John is ', ' home' ] */

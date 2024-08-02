const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(3) + str.slice(0, 3)
 console.log(newString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`When using certain string methods like .slice() or .concat() you can turn ${str} to ${newString}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let question = input.question("How many letters will be located ");
console.log(question);
let numLetters = Number(input.question("How many letters will be located ?"));
console.log(numLetters);
 newString = str.slice(numLetters) + str.slice(0, numLetters);
console.log(newString);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(numLetters > str.length){
    console.log(" Input exceeds length of the word !");
 let defaultStr = str.slice(3) + str.slice(0, 3);
    console.log(`We turned ${str} into ${defaultStr} using string methods !`);
} else {
    console.log(`We turned ${str} into ${newString} using string methods !`);
}

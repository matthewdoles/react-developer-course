// traditional syntax 
// funciont myFnc() {
//
// }

// arrow function - no more issues with this keyword
// const myFnc = () => {
//
// }

function printMyName(name) {
    console.log(name);
}
printMyName('Matthew');
// 'Matthew'

// OR 

const printMyName = (name) => {
    console.log(name);
}
printMyName('Matthew');
// 'Matthew'

// Can emit parentheses with one argument
// If 0 or 2+ arguments, must have parentheses
const printMyName = name => {
    console.log(name);
}
printMyName('Matthew');
// 'Matthew'

// Short hand syntax for arrow functions
const multiply = (number) => number * 2;
console.log(multiply(2))
// 4
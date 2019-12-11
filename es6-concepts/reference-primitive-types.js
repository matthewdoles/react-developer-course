const number = 1; // primitive 
const num2 = number; // copies number into num2

const person = {
    name: 'Matthew'
};

const secondPerson = person
person.name = 'Max'

console.log(secondPerson)
// Output: 'Max'
// although the name was changed for person, 
// secondPerson will also change as it is a pointer,
// similar behavior expereinced for arrays

// to copy the object and not the pointer use ...
const secondPerson = {
     ...person
}
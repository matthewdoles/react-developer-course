// ...
// spread - used to split up array elements or object properties
// const newArray = [...oldArray, 1, 2]
// const newObject = {...oldObject, newProp: 5}

// rest - used to merge a list of function arguments into a array
// fucntion sortArgs(...args) {
//    return args.sort()
// }

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers)
// [1, 2, 3, 4, 5]

const person = {
    name: 'Matthew'
}
const newPerson = {
    ...person,
    age: 24
}
console.log(newPerson)
// [Object object] {
//     age: 24,
//     name: 'Matthew
// }

const filter = (...args) => {
    return args.filter( el => el === 1);
}
console.log(filter(1, 2,  3))
// [1]
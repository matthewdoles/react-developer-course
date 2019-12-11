// let -> variable values
// const -> constant values, never changes
// var -> outdated, seldomly used

var myName = 'Matthew'
console.log(myName)
myName = 'Max'
console.log(myName)
// Output:
// 'Matthew'
// 'Max'

const myName = 'Matthew'
console.log(myName)
myName = 'Max'
console.log(myName)
// Output:
// 'Matthew'
// TyeError: re-assigning constant variable
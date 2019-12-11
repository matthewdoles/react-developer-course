// easily extract array elements or object properties
// and store them in variables for arrays and objects

[a, b] = ['Hello', 'Max']
console.log(a) // 'Hello
console.log(b) // 'Max'

{ name } = { name: 'Matthew', age: 24 }
console.log(name) // 'Matthew'
console.log(age) // undefined

const number = [1, 2, 3]
[num1, num2] = numbers
console.log(num1, num2) 
// 1 & 2
[num1, ,num3] = numbers
console.log(num1, num3) 
// 1 & 3
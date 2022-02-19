//Booleans
let isMarried = false
let trueValue = 4 > 3 //true
let falseValue = 3 > 4 //false

//Undefined
let firstName
console.log(firstName) //undefined, because it is not assigned to a value yet

//Null
let empty = null
console.log(empty) //null, means no value

//Operators

// Assignment Operators
let number = 10

number += 1 //11
number -= 2 //9
number *= 4 //36
number /= 6 //6
number %= 4 //2
number **= 5 //32
console.log(number)
console.log("--------------------")

// Arithmetic Operators
let numberOne = 1
let numberTwo = 2

let sum = numberOne + numberTwo //addition
let diff = numberOne - numberTwo //subtraction
let mult = numberOne * numberTwo //multiplication
let div = numberOne / numberTwo //division
let reminder = numberOne % numberTwo //modulus
let powerOf = numberOne ** numberTwo //exponential
console.log(sum, diff, mult, div, reminder, powerOf)
console.log("--------------------")

// Comparison Operators
var result = numberOne > numberTwo //false
result = numberOne >= numberTwo //false
result = numberOne < numberTwo //true
result = numberOne == numberTwo //false
result = numberOne != numberTwo //true
result = numberOne == '1' //true
result = numberOne === '1' //false
result = 0 == false //true
result = 1 == true //true
result = 1 === true //false
result = 0 == '' //true ***
result = 0 == ' ' //true ***
result = 0 === '' //false
result = undefined == null //true ***
result = undefined === null //false
result = NaN == NaN //false ***
result = NaN === NaN //false
console.log(typeof NaN) //number
console.log(result)

// Logical Operators
let checkOr = 4 > 3 && 10 > 5 //true && true => true
check = 4 < 3 && 10 > 5 //false && true => true
check = 4 < 3 && 10 < 5 //false && false => false


let checkAnd = 4 > 3 || 10 > 5 //true || true => true
checkAnd = 4 < 3 || 10 > 5 //false || true => false
checkAnd = 4 < 3 || 10 < 5 //false || false => false
console.log(check)

// Increment and Decrement Operator
let count = 0
console.log(++count) //pre-increment  1
console.log(count++) //post-increment 1
console.log(count) //2

console.log(--count) //1
console.log(count--) //1
console.log(count)   //0

// Ternary Operators
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')


//Date Object
const now = new Date()
console.log(now) // 2022-02-19T15:41:43.343Z

//Getting year, month, date
console.log(now.getFullYear()) //2022
console.log(now.getMonth() + 1) //2 (0-11)
console.log(now.getDate()) //19

//Getting the weekday as a number (0-6) 
console.log(now.getDay()) // 6 Saturday

//Getting hours, minutes, seconds
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

//Getting time
console.log(now.getTime()) //1645285761099
console.log(Date.now()) //1645285761099

const year=now.getFullYear()
const month=now.getMonth()+1
const day=now.getDate()
const hours=now.getHours()
const minutes=now.getMinutes()

console.log(`${day}/${month}/${year} ${hours}:${minutes}`) //19/2/2022 18:53



//array

let numbersArr = [1, 2, 3]
numbersArr[0] = 10
console.log(numbersArr) // [10,2,3]

let numbersArr2 = [10, 2, 3]
console.log(numbersArr == numbersArr2) //false

numbersArr=numbersArr2
console.log(numbersArr==numbersArr2) //true

//object
let userOne = {
    name: 'Rıdvan',
    role: 'Student',
    country: 'Turkey'
}

let userTwo = {
    name: 'Rıdvan',
    role: 'Student',
    country: 'Turkey'
}
console.log(userOne == userTwo) //false

userOne=userTwo
console.log(userOne==userTwo) //true
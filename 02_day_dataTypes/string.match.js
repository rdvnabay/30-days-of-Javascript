let patternOne='/love/' 
let patternTwo=/love/gi // g-means to search in the whole text, i - case insensitive
let string='I love JavaScript. If you do not love Javascript what else can you love.'
console.log(string.match('love'))
/* 
[
  'love',
  index: 2,
  input: 'I love JavaScript. If you do not love Javascript what else can you love.',
  groups: undefined
]
*/

console.log(string.match(patternTwo)) // [ 'love', 'love', 'love' ]

let text='In 2022, I run 30 Days of JavaScript. Now, in 2022 I super exited to start this challenge'
let regEx=/\d/g //d with escape character means d not a normal d instead acts  a digit

console.log(text.match(regEx))
/*
[
  '2', '0', '2', '2',
  '3', '0', '2', '0',
  '2', '2'
]
*/

console.log(text.match(/\d+/g)) // [ '2022', '30', '2022' ]
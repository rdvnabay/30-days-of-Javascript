let country = 'Turk'
let header = '30 Days Of JavaScript'
let headerRetry = '30 Days Of JavaScript and I love JavaScript'

//length
country.length //4

//concat()
country.concat('ey') //Turkey

//charAt()
country.charAt(0)   //T
country.charAt(country.length - 1) //k

country.charCodeAt(0) //T ASCII number is 84

//endsWith()
country.endsWith('k') //true
country.endsWith('z') //false

//startsWith()
country.startsWith('k') //true
country.startsWith('z') //false

country.startsWith('T') //true
country.startsWith('t') //false


//includes
header.includes('Days') //true
header.includes('days') //false

//indexOf
header.indexOf('D') //3
header.indexOf('Days') //3
header.indexOf('days') //-1
header.indexOf('z') //-1

//lastIndexOf
headerRetry.lastIndexOf('JavaScript') //33

//repeat
country.repeat(5) //TurkTurkTurkTurkTurk

//replace
country.replace('Turk', 'Turkey') //Turkey

//search
headerRetry.search('JavaScript') //11

//split
header.split() // [ '30 Days Of JavaScript' ]
header.split(' ') // [ '30', 'Days', 'Of', 'JavaScript' ]
country.split() // [ 'Turk' ]
country.split('') //[ 'T', 'u', 'r', 'k' ]

//substr
header.substr(11,10) //JavaScript

//substring
country.substring(0,4) //Turk
country.substring(1) //urk

//toLowerCase
country.toLocaleLowerCase() //turk
country.toUpperCase() //TURK

//trim
country="  Turkey  "
country.trim() //Turkey



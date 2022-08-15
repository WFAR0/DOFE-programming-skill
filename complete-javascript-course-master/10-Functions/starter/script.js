'use strict';
/*
// HIGHER ORDER FUNCTIONS IN PRACTICE 
const oneWord = function(str) {
return str.replace(/ /g, '').toLowerCase()    
}

const upperFirstWord = function(str) {
const [first, ...others] = str.split(' ')
return [first.toUpperCase(), ...others].join(' ')
}

// HIGHER ORDER FUNCTION
const tranformer = function(str, fn) {
console.log(`origional string: ${str}`)
console.log(`transformed! ${fn(str)}`)

console.log(`tranformed by: ${fn.name}`)
}
// DO NOT CALL FUNCTION IN HO FUNCTION, TRANFORMER WILL CALL
tranformer('js is cool', upperFirstWord)
tranformer('js is cool', oneWord)

const high5 = function() {
    console.log("👏")
}

// addEventListener ITSELF IS A HO FUNCTION, high5 IS THE CALL BACK FUNCTION (CB FUNCTION)
document.body.addEventListener('click', high5)

// ANOTHER CB FUNCTION 
['troy', 'travis', 'james'].forEach(high5)

/////////////////////////////////////////////////////////////

// NORMAL FUNCTION 

// const greet = function (greeting) {
// return function(name) {
//     console.log(`${greeting} ${name}`)
//     }
// }


// greeterHey IS THE SAME AS THE RETURN FUNCTION
// const greeterHey = greet("hey")
// greeterHey("slime")
// greeterHey("slimer")

// ARROW FUNCTION
 const greet = greeting => name => console.log(`${greeting} ${name}`) 


greet('hello')('big slime')

/////////////////////////////////////////////////////////////

*/
const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {} THE FUNCTION BELOW IS CALLED AN ENHACNED OBJECT LITREAL AND IS THE BETTER VERSION OF THIS LINE
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name })
    }
    
}

lufthansa.book(239, 'big slime')
lufthansa.book(636, 'smith john')
console.log(lufthansa)

const euroWings = {
    airline: 'euroWings',
    iataCode: 'EW',
    bookings: []
    
}

const book = lufthansa.book

// THIS DOES NOT WORK BECAUSE this PONITS TO UNDEFINED (IN STRICT MODE)
// book(23, 'william sarahs')

// FUNCTIONS ARE OBJECTS AND OBJECTS CAN HAVE METHODS 
// CALL FUNCTION SETS FIRST ARGUMENT TO THE this KEYWORD IN BOOK FUNCTION
book.call(euroWings, 23, 'wiliam sarahs')
console.log(euroWings)

book.call(lufthansa, 239, 'cooper mary')
console.log(lufthansa)

// APPLY IS THE SAME AS CALL EXCEPT IS USES AN ARRAY RATHER THAN ARGUMENTS, MAKING THE CODE SMALLER
const flightData = [583, 'cooper george ']
book.apply(euroWings, flightData)

// THIS MAKES APPLY BASICALLY USELESS
book.call(euroWings, ...flightData)


/////////////////////////////////////////////////////////////

// BIND METHOD

// INSTEAD OF IMMEDIATLY CALLING A FUNCTION, BIND WILL REPLACE this WITH THE FIRST ARGUMENT, THEN SET A NEW FUNCTION TO BE CALLED AT ANY POINT
// book.call(euroWings, 23, 'wiliam sarahs')

const bookEW = book.bind(euroWings)
const bookLH = book.bind(lufthansa)
bookEW(234, 'william stevens')
// bookLH(254, 'william williams')

// BINDING HALF OF THE METHOD IS CALLED PARTIAL APLICATION
const bookEW23 = book.bind(euroWings, 23)
bookEW23('steven stevens')

// WITH EVENT LISTENERS
lufthansa.planes = 300
lufthansa.buyPlane = function(){
    console.log(this) 
    
    this.planes++
    console.log(this.planes)
}
// THIS CHANGES this TO BE LUFTHANSA BECAUSE THE BUTTON IS THE this AT THE MOMENT
// lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))
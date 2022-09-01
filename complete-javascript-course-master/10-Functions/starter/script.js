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

// PARTIAL APPLICATION
// const addTax = (rate, value) => value + value * rate 
// console.log(addTax(0.1, 200))

// const addVAT = addTax.bind(null, 0.23)

// console.log(addVAT(100))

const addTax =  function(rate) {
return function (value) {
    console.log(value + value * rate )
    }
}

const addVAT = addTax(0.23)
addVAT(100)
*/
/////////////////////////////////////////////////////////////

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 
object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check 
  if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll
 results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    arr: [0, 1, 2, 3],
    registerNewAnswer: function() {
       const answer = prompt('What is your favourite programming language \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (write option number here)')
       
       console.log(this.arr[answer])

    }
}
poll.registerNewAnswer()

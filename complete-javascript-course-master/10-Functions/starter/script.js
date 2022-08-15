'use strict';
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


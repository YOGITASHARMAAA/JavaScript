let score = "33abc"

console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => easily got coverted in number - 33
// "33abc" => NaN, but its typeof is number only.
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Yogita" => true


let someNumber = 34

let valueInString = String(someNumber)
console.log(typeof valueInString)
console.log(valueInString)

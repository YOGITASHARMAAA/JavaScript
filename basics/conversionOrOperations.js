let score = "33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => easily got coverted in number - 33
// "33abc" => NaN, but its typeof is number only.
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Yogita" => true


let someNumber = 34

let valueInString = String(someNumber)
// console.log(typeof valueInString)
// console.log(valueInString)


// Why string to number conversion is confusing!!
//*************operations********* 

let value = 3
let negValue = -value
console.log(negValue);   // -3

// basics operations----
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = " Yogita"

let str3 = str1 + str2
console.log(str3);


// if string first then every other after that treated as a string only and if the string is in last then first the number get add and then string get attached to it.  


// console.log("1" + 2);   //12
// console.log(1 + "2");   //12  
// console.log(1 + "2" + 1);   //121
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2"); //32


// console.log(3 + 4 * 5 % 3); not right way to write the code



// special type of conversion--


// console.log(+true);  should not do this 
// console.log(+"");


// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2  should not do this 


// prefix and postfix

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
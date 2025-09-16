const accountId = 144553
let accountEmail = "yogitasharma@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //possible in js that we can recerve variable memory without storing it in any variable
let accountState;

//accountId = 2  // not allowed
//console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope.
*/

accountEmail = "yogsh@gmail.com"
accountPassword = "6789"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


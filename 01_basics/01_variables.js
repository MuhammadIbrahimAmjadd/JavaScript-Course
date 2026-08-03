const accountId = 123456
let accountEmail = "ibrahim@gmail.com"
var accountPassword = "0987"
accountCity = "Lahore"


// accountId = "55"


accountEmail = "ibrahim.amjad@gmail.com"
accountPassword = "6543"
accountCity = "Karachi"


console.log(accountId);
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])
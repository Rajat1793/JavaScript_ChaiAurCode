const accountId = 123
let accountEmail = "ab@c.com"
var accountPassword = "abcd12"
accountCity = "bangalore"
let accountState

accountEmail = "qwa@g.com"
accountPassword = "qw12"
accountCity = "Dubai"

// accountId = 56 cannot be modified
console.log(accountId);
/* Prefer not to use var because of the issue in block scope and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

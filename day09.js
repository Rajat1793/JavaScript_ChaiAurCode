// Stack (primitive)-> copy of data
//  Heap (non primitive) -> reference of data

let myName = "rajat"
let anotherName = myName

anotherName = 'jaiswal'
console.log(myName);
console.log(anotherName);

let user ={
    email:"user@qw.com",
    upi: "sadw@ybl"
}

let user2 = user

user2.email = "sdf@hs"

console.log(user.email);
console.log(user2.email);


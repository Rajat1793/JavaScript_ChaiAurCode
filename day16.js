// const tinderUser = new Object() //singleton object

const tinderUser ={} //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "raja"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "raja@gmail.com",
    fullname: { //nested object
        userfullname: {
            firstname: "rajat",
            lastname: "jaiswal"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //merge all object in one. Syntax: assign (target, source)

const obj3 = {...obj1, ...obj2} //spread operator
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log((tinderUser.hasOwnProperty("isLoggedIn"))); // to check if it has certain key, values before procedding

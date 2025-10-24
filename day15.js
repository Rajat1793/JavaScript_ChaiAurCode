// Two way to construct an object.
    // -> Singleton ( using the constructor)
    // -> literals 

// Singleton 
// Object.create()

// Symbol
const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "rajat",
    age: 18,
    location: "bangalore",
    email: "rajat.google.com",
    lastLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
    // mySym: "mykey1" //wrong way
    [mySym]: "mykey1"
}

// console.log(JsUser.email); //not a right way to read the data from object
// console.log(JsUser["email"]);
// console.log(JsUser.mySym); //not a right way to define a symbol as it will converted to string
// console.log(typeof JsUser.mySym); //symbol converted to string

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "rjai@gmail"
// Object.freeze(JsUser) //freeze the object which cannot be changed
JsUser.email = "rj@gmail"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello from greeting");
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function() {
    console.log(`hello from ${this.name}`);
}
console.log(JsUser.greetingtwo());
JsUser.greetingtwo()

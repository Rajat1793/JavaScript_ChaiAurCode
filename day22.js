// this object

const user = {
    username: "rajat",
    price: 100,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this); //current values 
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// console.log(this);

// this behaves differently in node and in browser. 
//  we get empty object but in browser it give all object available in browser

// function one(){
//     let username = "rajat"
//     console.log(this);
//     console.log(this.username);    // we cannot access the deatils via this inside a function}
// }
// one()

// const one = function(){
//     let username = "rajat"
//     console.log(this);
//     console.log(this.username);    // we cannot access the deatils via this inside a expression}
// }
// one()

// const one = () =>{
//     let username = "rajat"
//     console.log(this);
//     console.log(this.username);    // we cannot access the deatils via this inside a function}
// }
// one()

// Arrow Fucntion

// Explicit return  
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(2, 3));

// Implicit return 
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2, 3));

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2, 3));

const name = (uname) => ({username: uname}) // to return the object we have to specify in ()
console.log(name('rajat'));

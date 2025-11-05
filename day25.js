// if

const isUser = true
const temp = 40

// if (2 !== "2"){
//     console.log("executed");
// }else{
//     console.log("not executed");
// }
// > < <= >= == != ===(strict type check) !==

// if (temp >50){
//     console.log("greater than 50");
// }else{
//     console.log("Less than 50");  
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000
// // if (balance >500) console.log("more")

// if(balance < 500){
//     console.log("lesser");
// }else if(balance < 750){
//     console.log("less");
// }else{
//     console.log("more"); 
// }

// const userlogged = true
// const debitcard = true
// const loggedGoogle =false
// const loggedEmail = true

// if (userlogged && debitcard){
//     console.log("Buy");
// }
// if (loggedEmail || loggedGoogle){
//     console.log("logged");
    
// }

// Switch
// const month = 3
// switch (month) {
//     case 1:
//         console.log("January");    
//         break;
//     case 2: 
//         console.log("February");    
//         break;
//     case 3: 
//         console.log("March");    
//         break;
//     default:
//         break;
// }

// Truthy value
// "0" 'false'  " " [] {} function(){}

// Falsy value
// false 0 -0 BigInt 0n "" null undefined NaN


//object check
// const emotyObj = {}
// if (Object.keys(emotyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined. (this is new operator which check null and undefined values and assigns it accordingly)
let val
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 100

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary operator
// condition ? true :false
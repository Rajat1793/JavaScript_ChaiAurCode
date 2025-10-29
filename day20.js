//  Global scope
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

var c = 100
let a = 100
// Block Scope or local scope
if (true){
    let a = 10
    const b = 20
    //  c = 30
     console.log("inner: ",a);
     
}
console.log(a); 
// console.log(b);
// console.log(c);

// scope in browser and node both are different
// Arrays
// Arrays in Js are resizeable and can contain mix of different datatypes
const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["ram", "lakshman"]
const myArray1 = new Array(1, 2, 3, 4)

// console.log(myArray[1]);
// console.log(myHeros[1]);
// console.log(myArray1[3]);

// Array Methods
// myArray.push(55)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);
// console.log(myArray.includes(9));

// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray);

// slice, splice
console.log("A ", myArray);

const newArray1 = myArray.slice(1, 3)
console.log(newArray1);
console.log("B ", myArray);

const newArray2 = myArray.splice(1, 3)
console.log(newArray2);
console.log("C ", myArray);

// slice dont change the original array after the operation
// splice changes the original array after the operation



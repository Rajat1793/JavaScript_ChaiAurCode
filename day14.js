// Array 2
const myArray = ["ram", "sita", "laksham"]
const myArray1 = ["ravan", "hiran", "shatru"]

// myArray.push(myArray1)

// console.log(myArray);
// console.log(myArray[3]);
// console.log(myArray[3][1]);

// newArray = myArray.concat(myArray1)
// console.log(newArray);

// Spread operator
const newArray1 = [...myArray, ...myArray1]
console.log(newArray1);

const newArray2 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const newArray3 = newArray2.flat(Infinity)
console.log(newArray3);

console.log(Array.isArray("Rajat"));
console.log(Array.from("Rajat"));
console.log(Array.from({name: "rajat"}));

let score1 = 200
let score2 = 100
let score3 = 300

console.log(Array.of(score1, score2, score3));

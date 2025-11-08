// const coding = ["js", "ruby", "java", "python", "cpp"] 

// For each wont return anything after the loop operation
// const value = coding.forEach((item) =>{
//     // console.log(item);
//     return item
// })
// console.log(value);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNums.filter((num) => num > 4)
// // console.log(newNum);

// const newnum = []
// myNums.forEach((nums) => {
//     if (nums > 4){
//         newNum.push(nums)
//     }
// })
// console.log(newNum);  

// map

// const newNum = myNums.map((num) => num * 10)
//                     .map((num) => num + 1)
//                     .filter((num)=> num >= 40)

// console.log(newNum);

// reduce
const myNum = [1,2,3,4]
// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currentval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shopping = [
    {
        itemName: 'JS course',
        price: 1299
    },
    {
        itemName: 'React course',
        price: 2299
    },
    {
        itemName: 'Ruby course',
        price: 5299
    },
    {
        itemName: 'Go course',
        price: 9299
    },
]

const price = shopping.reduce((acc, item) => acc + item.price,0)
console.log(price);

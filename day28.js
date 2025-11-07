// for of loop

// ["", "", ""]
// [{},{},{}]
// const arr = [1,2,3,4,5]
// for (const num of arr){
//     console.log(num);
// }

// const strs = "Hello World"
// for (const str of strs){
//     console.log(`Each character in string: ${str}`);
// }

// Maps
// const map = new Map()
// map.set('IN', "India")
// map.set('FR', "France")

// // console.log(map);
// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, ':', value);
// }

// for in loop
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);   
// }

// const program = ["js", "ruby", "cpp"]
// for (const key in program){
//     console.log(program[key]);
// }

// for each loop
const coding = ["js", "ruby", "java", "python"]
// coding.forEach( function (val) {
//     console.log(val);    
// });

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: 'python',
        langSym: 'py'
    },
    {
        langName: 'javascript',
        langSym: 'js'
    },
    {
        langName: 'ruby',
        langSym: 'rb'
    },
]
myCoding.forEach((item) =>{
    console.log(item.langName);
})
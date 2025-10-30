function one() {
    const username = "rajat"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "rajat"
    if (username === "rajat"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// function 
console.log(addone(5))
function addone(num) {
    return num + 1
}
// addone(5)
// expression

// Hoisting
console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2
}
// addtwo(5)

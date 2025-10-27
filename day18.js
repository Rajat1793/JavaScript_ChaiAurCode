// Function

function repeat() {
    console.log('R');
    console.log('A');
    console.log('J');
    console.log('A');
    console.log('T');
    console.log('!');
    console.log('!');    
}

// repeat()
function add(num1, num2){
    console.log(num1 + num2);
}
// add() //NaN as we didnt pass any arguments value
// add(3, 4)

function sub(num1, num2) {
    return (num1 -num2)
}
const result = sub(4, 5)
// console.log(result);

function loginUser(username = "sam"){
    if (!undefined){
        return
    }
    return `${username} just logged in.`
}
console.log(loginUser("rajat"))
console.log(loginUser())
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
// console.log(loginUser("rajat"))
// console.log(loginUser())

function calculateCartPrice(...num){  //... is called rest operator it will convert parameters into array values
    return num
}

// console.log(calculateCartPrice(100, 200, 300, 400)); //[ 100, 200, 300, 400 ]

function calculateCartPrice(val1, val2, ...num){  //... is called rest operator it will convert parameters into array values
    return num
}

console.log(calculateCartPrice(100, 200, 300, 400)); //[ 300, 400 ] // 100 and 200 is not in output as those values were taken by val1 and val2

const user = {
    username: "rajat",
    price: 122
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({username: "ram", price: 12})

const newArray = [100, 200, 300, 400]

function retrunSecondValue(getArray) {
    return getArray[2]
}
// console.log(retrunSecondValue(newArray));
console.log(retrunSecondValue([100, 200, 300, 400]));


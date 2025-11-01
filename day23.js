// immediately invoked function expression (IIFE)
// syntax
// we use IIFE to remove the global variable pollution
// (function decleration)(function execution)

// named iife
(function name(){
    console.log('DB connected');
})();
// always we need to put ; at the end of IIFE as it created issue with function declared after that

//unnamed iife
( () => {
    console.log('DB2 connected');
}) ();

// parameter iife
( (name) => {
    console.log(`${name}`);
}) ('rajat')
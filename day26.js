// for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element == 5){
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop: \t${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner loop: ${j}`);
//     }   
// }

// break and continue
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i id: ${i}`);
    
}
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i id: ${i}`);
    
}
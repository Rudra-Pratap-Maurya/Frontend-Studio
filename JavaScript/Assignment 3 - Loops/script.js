// Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”



// let age = prompt("Enter your age : ");
// if (age >= 18) console.log("Eligible");
// else console.log("Not Eligible");

// 2. Table of 5
// for(let i = 1; i < 11; i++){
//     console.log(`5 X ${i} = ${5*i}`);
// }

// 3.Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally. 
// let count = 0;
// for(let i=1; i<16; i++) {
//     if (i > 8) count++;
// }
// console.log(count); // 7

//4. Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let correctPassword = "12345";

// let UserInput = prompt("Enter your password : ");
// if (UserInput === correctPassword ) console.log("Access Granted ! ");
// else console.log("Access Denied ☠️")

// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// let correctPassword = "12345";
// for(let i = 1; i<4; i++){
//     let pass = prompt("Enter password ")
//     if (pass === correctPassword) {
//         console.log("Access granted ")
//         break;
//     }
// }
// console.log("Account Locked");

// 2nd method
// Correct password jo already code me set hai (hardcoded)
// let correctPassword = "12345";

// // Ye variable check karega ki password kabhi sahi enter hua ya nahi
// let isCorrect = false;

// // Loop chalega 3 baar (3 attempts ke liye)
// for (let i = 1; i <= 3; i++) {

//     // User se password input le rahe hain
//     let pass = prompt("Enter password");

//     // Check kar rahe hain ki user ka input correct password ke equal hai ya nahi
//     if (pass === correctPassword) {
//         console.log("Access granted");  // Agar sahi hai to access de do
//         isCorrect = true;               // Flag true kar diya (matlab sahi mil gaya)
//         break;                          // Loop yahi stop ho jayega (aur attempts nahi maangega)
//     }
// }

// Loop ke baad check karte hain
// Agar 3 attempts me kabhi bhi sahi password nahi mila
// if (!isCorrect) {
//     console.log("Account Locked");
// }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
// let yes = 0;
// while (true) {
//     let word = prompt("Enter words");

//     if (word === null) break; // agar user cancel kare

//     word = word.toLowerCase(); // case insensitive banane ke liye

//     if (word === "yes") {
//         yes++;
//     }
//     else if (word === "stop") {
//         break;
//     }
// }
// console.log(yes);
// 13.  Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.
// for(let i = 1; i < 51; i++){
//     if (i%7 === 0 ){
//         console.log(i);
//     }
// }

// 14. 14. Sum of all odd numbers from 1 to 30. Add only odd numbers. Print final sum.
// let sum = 0;
// for(let i = 1; i < 31; i++){
//     if (i%2==1){
//         sum = sum + i
//     }
// }
// console.log(sum)

// 15. Keep asking number until user enters an even number Use while loop. Stop only if input is even.
// while (true){
//     let num = Number(prompt("Enter number : "))
//     if (num % 2 == 0) break;
// }
// 16. Print numbers between two user inputs Input start and end using prompt() → print all between.
// let start = Number(prompt("Enter start point "))
// let end = Number(prompt("Enter end point "))
// for (let i = start; i <= end; i++) {
//     console.log(i);
// }

// // 17. Print only first 3 odd numbers from 1 to 20. Use loop. Stop with break after 3 odd prints.
// let oddcount = 3;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         oddcount++;
//     }
// }
// 18. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct Else → print “Insufficient balance”
let balance = 1000;
let flag = false;
let withdraws = 0;
while (balance > 0 && withdraws !== 3) {
    let withdraw_amount = +prompt("Amount btao kitna paisa withdraw krna hai ? ")
    withdraws++;
    if (withdraw_amount <= balance) {
        console.log(`Money Remained  ${balance = balance-withdraw_amount}`)
    } else {
        flag = true;
        break;
    }
    if(flag === true){
        console.log("Insufficient Balance!")
    }
        
} 
console.log(`Balance : ${balance}`)
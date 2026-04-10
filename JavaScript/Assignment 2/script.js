let a = 10;
let b = 3;
console.log(a+b); // 10+3 = 13
console.log(a-b); // 10-3 = 7
console.log(a/b); // 10/3 = 3.33
console.log(a*b); // 10*3 = 30
console.log(a%b); // 10%3 = 1

// Q2
let x = 5; 
x += 3; // x = x + 3 = 5+3 = 8
console.log(x)
x -= 3; // x = x - 3 = 8-3 = 5
console.log(x)
x *= 3; // x = x * 3 = 5*3 = 15
console.log(x)
x /= 3; // x = x / 3 = 15/3 = 5
console.log(x)
x %= 3; // x = x % 3 = 5%3 = 2
console.log(x)

// Q3
let count = 5;
console.log(count) // 5
count++; // 5 + 1 = 6
console.log(count) // 6
// now count = 6
count--; // 6 - 1 = 5
console.log(count) // 5

// Q4
console.log(5 == '5') 
// here this expression is checking if 5 is equal to string(5) but == does not check the data type just check the value and return true for this expression which should not be true , so we use === for strict checking this checks If values & data types are same if yes then return true
console.log(5 === '5') // false

// Q5
console.log(10 > 5); // true
console.log(10 < 20); // true
console.log(10 === 10); // true

// Q6
console.log(true && false)
console.log(true || false)
console.log(!(true))

// Q7
console.log(5 > 3 && 10 > 8); // true
console.log(5 > 3 || 10 < 8); // true
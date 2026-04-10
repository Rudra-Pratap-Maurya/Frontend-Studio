// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayHello(){
    console.log("Hello Javascript")
}
// console.log(sayHello());
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.
function add(a, b){
    let sum = a+b
    console.log(sum);
}
add(10,20);

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.
function greet(name='Rupam'){
    console.log(`Hi ${name}`);
}
greet();
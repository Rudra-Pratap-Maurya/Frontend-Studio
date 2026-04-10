// Functions code ko reuse krne me help krta hai
// function apke code ko tb chalata hai jb aap chahte ho function call ki help se
// function abcd(age,name){
//             // parameters                       
// }
// abcd(12, "harsh")
//     // arguments

// rest parameters - bache huye elements array me daal do
// function num(a,b,...c){
//     console.log(a,b,c); // a=1, b=2 , c=[3,4,5,6,7]
// }
// num(1,2,3,4,5,6,7)
// hoisting - kisi cheez ke banne se phle uska use kr pana
// hoisting() // banne se phle bhi call kar skte hai
// function hoisting(){
//     console.log("hey")
// }
// agar hum is function ko varibable se bana de to function var me save hoga and var undefined hai but hum use to kr skte hia undefined ko call krne se error aayega
// variable hoising
// Function expression
// abcd(); // error abcd is not a function
// var abcd = function(){
//     console.log("hey");
// }
// parameters in javascript
// function abcd(a, b, c, d){
//     // required parameter - agar apne paramenter banaye and apne unme arguments nahi bheje to fir wo value parameter ki undefined ho jayegi 
// }

// arguments
// 1. positional - position wise values jayengi
// 2. default- default value set krni hogi - default value tb set hogi agar argument se koi value na mili ho to
// 3. spread - 
// function ar(a, b=3, c, d){
//     console.log(a, b, c, d)
// }
// let arr = [1, 2, 3, 4];
// ar(...arr);


// function kyu banaya jaat hai - ek hi code ko bar bar na likhna pade
// function addNum(num1, num2){ // num1 and num2 is parameter isme let var nahi lagana padta
//     const sum = num1 + num2;
//     console.log(sum);
// }
// addNum(2,5); // 2 and 5 is argument
// addNum(5,50044)
// // jitne paramters hai utne hi arguments do
// function addNum(num1, num2, num3 = 0, num4 = 0 ){ // num3 and num3 is parameter jisme humne default values 0 daal di mtlb jaise humne first call ki to usme 2 hi argument the to ye 1+20+0+0 aise calc hua hoga isse gaalat answer nahi aayega
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// // }
// addNum(1,20);
// addNum(1,20,50);
// addNum(1,20, 45,23);
// but agar argument aur badha du to mai bar bar paramteres thodi badhata rahunga to function ko flexible banane ke liye rest operator ka use krenge
// function addNum(...num){ // num3 and num3 is parameter jisme humne default values 0 daal di mtlb jaise humne first call ki to usme 2 hi argument the to ye 1+20+0+0 aise calc hua hoga isse gaalat answer nahi aayega
//     //const sum = num1 + num2 + num3 + num4;
//     let sum = 0
//     for (let n of num) { // for-of loop
//         sum += n
//     }
//     //console.log(num); // argument values ko array me convert kregi
//     console.log(sum)
// }
// addNum(1,20);
// addNum(1,20,50);
// addNum(1,20, 45,23);

// spread and rest me difference 
// spread - destructing krke array ya object ko khol deta hai
// rest - jb bahut sari values ko catch krna ho


// function : expression - variable ke andar function ko define krna
// const addnum = function(num1, num2){
//     return num1 + num2;
// }
// console.log(addnum(15,15)) // func declaration se phle use nahi ho skta

// arrow function - function keyword hi gayab kr dia
// const Namaste = () => {
//     console.log("Hello Ji");
// }
// Namaste();
// const addNumber = (num1, num2) => {
//     return num1 + num2;
// }
// // agar single value hi return karani ho to aise likh skte hia bina {} aur return keyword ke
// const addNumber2 = (num1, num2) => num1 + num2;

// console.log(addNumber(4, 5))

// //const squareNum = (num) => num*num;
// // magic : agar ek hi parameter hai to () ye lagane ki bhi jaruat nahi hai😂
// const squareNum = num => num*num;
// console.log(squareNum(6))

// // object
// const info = () => ({name:"Dora", age:20});
// console.log(info());
// // IIFE - code run krne hi call ho jaye (function definaition)(invoke) - private variable ko define krne ke liye use hota h
// (function greeting(){
//     console.log("Namaste")
// })(); 

// (()=>
// {
//     console.log("hi");
// })();

// HOF - ek aisa function jo ki return kr de ek or function ya phir wo function parameter me ek or function accept kre
// function abcd(){ // ye higher order function hai
//     return function(){

//     }
// }
// function abcd(a){

// }
// abcd(function(){}); // parameter me function acceptance

// callback - ek function hai jo parameter me function leta hai mtlb HOF hua ? hai but call back wahi function ko kehte hia jo parameter me bheja jata h jaise ye function(){} abcd() ke andar

// FCF - function us language me variable ki tarah use ho skte hai
let a = function(){
    
}; 

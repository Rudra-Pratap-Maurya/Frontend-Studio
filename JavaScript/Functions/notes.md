
Aaj ka topic:

# 📘 JavaScript Functions – Complete Intuition Notes

---

# 🧠 PART 1: Function Ki Need Kyu Padi?

Sabse pehle problem samjho.

Socho tum 3 jagah pe same kaam kar rahe ho:

```js
let a = 10;
let b = 20;
console.log(a + b);
```

Fir 50 lines baad phir wahi logic.

Ye kya problem create karta hai?

* Code repeat hota hai
* Hard to maintain
* Agar logic change karna ho toh har jagah change karna padega

Yaha se ek idea aata hai:

> “Kya main is logic ko ek box me daal sakta hoon jise jab chaho use kar sakun?”

🔥 Aur wahi box hai **Function**.

---

# 🧠 Simple Definition

> Function ek reusable block of code hai jo specific kaam karta hai.

---

# 🧠 PART 2: Function Ka Basic Structure

```js
function add(a, b) {
    return a + b;
}
```

Yaha:

* `add` → function name
* `a, b` → parameters
* `a + b` → logic
* `return` → output

---

# 🧠 Parameters vs Arguments (Core Intuition)

## Parameters

Function ke andar wale placeholders.

```js
function add(x, y)
```

x aur y = parameters

---

## Arguments

Function ko call karte waqt diye gaye actual values.

```js
add(10, 20)
```

10 aur 20 = arguments

---

# 🧠 Required Parameters

Agar tum parameter doge nahi:

```js
function greet(name) {
  console.log(name);
}

greet();
```

Output: undefined

JavaScript strict required enforce nahi karta.

---

# 🧠 Default Parameters

```js
function greet(name = "Guest") {
   console.log(name);
}
```

Agar argument nahi diya → default use hoga.

---

# 🧠 Rest Parameters

Kab use kare?

Jab number of arguments unknown ho.

```js
function sum(...numbers) {
   return numbers.reduce((a,b)=>a+b,0);
}
```

Rest parameter:
Sab arguments ko ek array me convert karta hai.

---

# 🧠 Destructured Parameters

Object ya array ko tod ke directly parameters me lo.

```js
function printUser({name, age}) {
   console.log(name, age);
}
```

Clean code.

---

# 🧠 Arguments Types

## Positional Arguments

Order matter karta hai.

```js
add(10,20)
```

---

## Spread in Arguments

```js
let arr = [10,20];
add(...arr);
```

Spread array ko tod deta hai.

---

# 🧠 Hoisting (Very Important Concept)

JavaScript code execute hone se pehle memory me variables aur functions ko scan karta hai.

---

## Variable Hoisting

```js
console.log(a);
var a = 10;
```

Output:
undefined

Why?

Engine internally karta hai:

```js
var a;
console.log(a);
a = 10;
```
---'

## Function Hoisting

Classic function fully hoist hota hai.

```js
sayHello();

function sayHello() {
   console.log("Hi");
}
```

Works.

But:

```js
sayHello();

let sayHello = function() {}
```

Error.

Kyuki function expression hoist nahi hota.

---

# 🧠 Classic Function

```js
function add(a,b) {
   return a+b;
}
```

Fully hoisted.

---

# 🧠 Anonymous Function

Function without name.

```js
let x = function() {};
```

---

# 🧠 Arrow Function (Fat Arrow)

```js
let add = (a,b) => a+b;
```

Short syntax.

Important difference:
Arrow function ka apna `this` nahi hota.

---

# 🧠 Nested Function

Function ke andar function.

```js
function outer() {
   function inner() {
       console.log("Hello");
   }
   inner();
}
```

---

# 🧠 Scope Chain

Engine variable ko kaise dhoondta hai?

Example:

```js
let x = 10;

function test() {
   console.log(x);
}
```

Engine search order:

1. Local scope
2. Parent scope
3. Global scope

Ye chain hi scope chain hai.

---

# 🧠 Global Scope

Outside function declared variables.

---

# 🧠 Function Scope

Function ke andar declared variables.

---

# 🧠 Closures (Very Powerful)

Definition:

> Jab ek inner function outer function ke variables ko yaad rakhta hai even after outer function execution.

Example:

```js
function outer() {
   let count = 0;

   return function() {
      count++;
      console.log(count);
   }
}

let counter = outer();
counter();
```

Outer function execute ho gaya.

But inner function still access kar raha hai count.

Ye possible hai kyuki JavaScript closure banata hai.

---

# 🧠 IIFE (Immediately Invoked Function Expression)

Function jo turant execute ho.

```js
(function(){
   console.log("Run");
})();
```

Use case:
Private scope banana.

---

# 🧠 Higher Order Function

Function jo:

* Kisi function ko parameter me leta hai
* Ya function return karta hai

Example:

```js
function greet(callback) {
   callback();
}
```

---

# 🧠 Callback Function

Function jo dusre function ko diya jata hai.

---

# 🧠 First Class Function

JavaScript me functions:

* Variable me store ho sakte hain
* Return ho sakte hain
* Parameter ban sakte hain

Isliye JS me functions first class citizens hain.

---

# 🧠 Pure vs Impure Function

## Pure Function

* Same input → same output
* Outside world affect nahi karta

```js
function add(a,b){
   return a+b;
}
```

---

## Impure Function

* External variable change karta hai

```js
let count = 0;
function inc(){
   count++;
}
```

---

# 🧠 Scoping Rule

JavaScript me lexical scoping hota hai.

Matlab:
Scope decide hota hai function kaha likha gaya hai, na ki kaha call hua hai.

---

# 🧠 Final Mental Model

Function = Logic Box 📦
Parameters = Placeholders
Arguments = Actual data
Scope = Visibility boundary
Closure = Memory of outer scope
Arrow = Short syntax + no own this
Hoisting = Pre-scan memory setup

---

Bhai agar tum ye genuinely samajh gaye…

Toh:

* Async JS easy ho jayega
* React easy ho jayega
* Backend JS easy ho jayega
* Interviews me shine karoge

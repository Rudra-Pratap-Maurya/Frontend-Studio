// let arr = [100, 20, "MS DHONI", true]
// console.log(arr[2]) // access using index
// kya array ke element ko change kr sakte hai ? mutable hote hai ? hai kar sakte hai
// non primitive data type ka type ek object hi hota hai
// arr[2] = 90;
//console.log(arr); // change ho gaya


// startin me add kr sakta hu, 
// arr.unshift(10);
// console.log(arr); 

// delete the element at first place
// arr.shift();
// console.log(arr);
// Note : shift and unshift ka use krna advisable nahi hota hai kyuki jaise jb hum shift krte hai to 1st position ka element delete hota hai and baki sare element apni position se left shift hote hai , aisa hi unshift me bhi hota hai usme right shift hote hai aur ye program performance hamper ho sakti hai time complexity O(n) se. jb hum push pop ka use krte hai to sirf end ka element delete hota hai  baki element pe koi farak nahi padta to time complexity O(1) hi hoti hai.

// iterating over array
// let score = [100, 50, 52, 85, 66, 44, 54]
// for(let i = 0; i<score.length; i++){
//     console. log(score[i]);
// }
// for-of loop - array ki value print karane se mtlb
// for (let num of score) {
//     console.log(num);
// }
// let score2 = score; // ab dono array me value change hogi kyuki array copy by reference hoti hai.
// score2.push(50);
// console.log(`score1 : ${score}`)
// console.log(`score2 : ${score2}`)


//const arr = [20, 45, 1, 5, 4, 45, 4, 4]
// console.log(arr.slice(2,4)); // new array return krta hai 2nd index se 4th tk but 4th excluded -> [1,5] return krega
// const arr2 = arr.slice(2,4);
// console.log(arr);
// console.log(arr2);

// agar original array se trim krna chaho to ? splice use krke
// console.log(arr.splice(1, 3)) // 1st index se 3 element trim krne h
// console.log(arr);
// console.log(arr.splice(1,3,"dora","rara"))
// console.log(arr); 

// spread operator,6,
// const arr = [10, 20, 3, 4, 50]
// const arr2 = ["Rohit", 11, true]
// const arr3 = ["dora", 20, 50]
// goal : dono array ko merge kr dena ? + se to nahi hoga
// arr.push(arr2)
// console.log(arr) // [ 10, 20, 3, 4, 50, [ 'Rohit', 11, true ] ] isme arr2 as an array paas hua hai but hame ye nahi chahiye indivdual value chahiye

// console.log(arr.concat(arr2, arr3)) // output : [ 10, 20, 3, 4, 50, 'Rohit', 11, true ] // concat ek new array return krega
// // isse aasan operation hota hai spread operator
// const arr4 = [...arr, ...arr2, ...arr3] // hr ek array ek elemets ko tod ke array se bahar nikalo aur arr4 wale array me spread kr do
// console.log(arr4);
const names = ['Alice', 'bob', 'rp', 'dora', 'charlie'];
names.sort();
console.log(names);

const num = [1001,50,60,545,45];
num.sort(); // sort function numbers ko bhi string ki form me treat krt a hai and ASCII tble ke hisab se compare krke sort krta hai tabhi iska output [ 1001, 45, 50, 545, 60 ] hai ,
// JS me number ke basis pe rul hi nahi banaye sort krne ke to yaha pe ye ['1001','50','60','545','45']; aise treat kr rha hai
// per ye rule banaya hi kyu gaya ? kyuki javascript pe Array distict data types ke bhi hote hai tbhi ek rule bana diya gya ki ASCII value ke basic pe sort krne ka
// Q "rhoit" ki ascii valeu kya hai
console.log(num);
// but how to sort numbers ? use sort arrow function
num.sort((a , b) => a-b)
console.log(num)
// a = 10 , b = 40
// 10-40 = -30 // neg hai mtlb 10 chot or 40 bada to 10 ko phle likho
// 31 - 40 = -9 // 31 likho
// 60 - 40 = + 40 likho
// -ve : pehle a aayega phir b
// +ve : pehele b aayega phir a
num.sort((a , b) => b-a) // decensing order
console.log(num)

// flatning the array

// why array is not an array in javascript

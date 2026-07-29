let score = "33"
let a ="33abc"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log( typeof valueInNumber)
let b = Number(a)
// console.log( typeof b) //ismain a ki value 33abc hai usko convert kiya hoga number main (lekin voh convert hua heen nhi voh - "NaN"(not a number) show karega )
// console.log(b); // agar a main NULL hota toh voh 0 show karta, agar a main undefined hota toh NaN show karta , agar True/Flase hota toh 1/0 hota 


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "aman" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

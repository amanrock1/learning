// ==========================================
// MEMORY ALLOCATION: STACK vs HEAP
// ==========================================

// 1. Primitive Types -> Stack Memory (Pass by Value)
// - Variable ki "Copy" milti hai. Original value change nahi hoti.
let myFName = "Aman";
let mySName = myFName; // Copy assigned
mySName = "kumar";     // Only mySName changes
console.log(myFName);  // "Aman"
console.log(mySName);  // "kumar"


// 2. Non-Primitive Types -> Heap Memory (Pass by Reference)
// - Variable ka "Reference/Address" milta hai. Ek jagah change karne se dono change hote hain.
let userOne = { email: "aman@gmail.com" };
let userTwo = userOne; // Same reference assigned
userTwo.email = "kumar@gmail.com";
console.log(userOne.email); // "kumar@gmail.com" (Original changed!)
console.log(userTwo.email); // "kumar@gmail.com"
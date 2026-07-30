const name = "aman"
const repoCount = 12

// console. log(name + repoCount + " Value");

// console. log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aman-new-stage-craft')

// console.log(gameName);
// console.log({ ...gameName });// to access all the strings 

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());//AMAN-NEW-STAGE-CRAFT
// console.log(gameName)//aman-new-stage-craft - orginial value change nhi hui kyu ki ye ek primitive data type hai aur usmian copy banti hai 

// console.log(gameName.charAt('n')); //a // ismain hamne koi number nhi dala tha to js  n->0 ne n ko 0 main convert kar diya aur 0th index pe 'a'tha voh return kar diya
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4)// nsuubstring main negative value nhi de skate voh 0 le leta hai 
console.log(newString);

const anotherString = gameName.slice(-8,18)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// faltu ke space hata deta hai 

const url = "https://amankumarprabhat%20vercel.app/"

console.log(url.replace('%20', '.'))

console.log(url.includes('pari'))

console.log(gameName.split('-'));
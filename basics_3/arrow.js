const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    //ismian jo "this" hai voh current context ko deta hai aur iss case main voh curly bracket ke andar hai 
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

/*ek aur confusion ho sakti hai hum username ko bahar kaise access kar rahe hai,
ye ek object hai na ki function to hum us object ki property acess kar sakte hai */

/* IMP Note - browser ke andar global object hai window object, 
agar hum upar ke teen message ko hata ke "console.log(this) kare to terminal main "{}"ye ayega lekin browser ke inspect main "windows"ayega 

`this` refers to the object that calls the function.
Example: user.sayHello() → this = user
*/


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// Immediately Invoked Function Expressions (IIFE)
// Global scope ka pollution na aaye  


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('aman')

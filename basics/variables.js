const accountId = 144553
//const- it keeps the value same doesnt change like in let we can later change the value 
let accountEmail = "amanprabhat448@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed same reason 
/* 
->prefer not to use var cause of issue in block and functional scope
->aur agar data type define nhi bhi kiya to chalega for eg accountCity main define nhi kiay toh bhi chalega 
-> agar js main variable define kar ke chod dete hai aur usmain value nhi dalte to voh 'undefined' dikhata hai 

*/
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity= "Delhi" 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



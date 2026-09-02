// Dates

let myDate = new Date()
// console.log(myDate);//2026-09-02T08:13:27.963Z
// console.log(myDate.toString());//Wed Sep 02 2026 08:13:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Wed Sep 02 2026
// console.log(myDate.toLocaleString());//9/2/2026, 8:13:27 AM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

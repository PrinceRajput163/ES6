// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 2000);
// })
// promiseOne.then(function(){
//     console.log("Promise Executed")
// })
//----2nd way
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 2000);
// }).then(function(){
//     console.log("Promise Executed")
// })
///------------------------
//  const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve({username:"Prince Rajput",id:163})
//     }, 2000);
// })
// const u2 = promiseOne.then(function(u1){
//     console.log(u1.username)
//     console.log(u1.id)
//     return u1
// })
// console.log(u2)

 const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Doing Asynchronous Tasks")
        resolve({username:"Prince Rajput",id:163})
    }, 2000);
})
const u2 = promiseOne.then(function(u1){
    console.log(u1.username)
    console.log(u1.id)
    return u1
}).then((username)=>{
console.log(username)
})



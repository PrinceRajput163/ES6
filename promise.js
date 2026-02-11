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

//  const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve({username:"Prince Rajput",id:163})
//     }, 2000);
// })
// promiseOne.then(function(u1){
//     console.log(u1.username)
//     console.log(u1.id)
//     return u1
// }).then((username)=>{
// console.log(username)
// })

//------------------
//  const promiseOne = new Promise(function(resolve, reject){
//     let error=true
//     if(!error){
//         resolve({username:"Prince",id:163})
//     } else{
//         reject("Something went wrong")
//     }
// })
// promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.username
// }).then((username)=>{
// console.log(username)
// }).catch(function(error){
//     console.log("Error")
// }).finally(()=>{
//     console.log("All operation executed")
// })




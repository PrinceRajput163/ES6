// function greet(name,callback1,callback2){
//     console.log("Hello",name)
//     // callback1()
//     // callback2()
// }
function greet(){
    console.log("Hello",name)
    
}
function sayBye(){
    console.log("Bye Bye")
}
function sayThanks(){
    console.log("Thanks")
}
greet("Shyam",sayThanks,sayBye)
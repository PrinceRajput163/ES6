//Prince Rajput
// 2400290120190
//CS4C
//Practical 2
function checkLogin(callback){
    setTimeout(()=>{
        console.log("User is logged in to the application")
        callback()
    },3000);
}
function verifyCart(callback){
    setTimeout(()=>{
        console.log("Verify User")
        callback()
    },3000);
}
function proceedToPay(callback){
    setTimeout(()=>{
        console.log("Payment Done")
        callback()
    },3000);
    
}
function PlaceOrder(callback){
    setTimeout(()=>{
        console.log("Order Place")
        callback()
    },3000);
}
checkLogin(()=>{
    verifyCart(()=>{
        proceedToPay(()=>{
            PlaceOrder(()=>{
                console.log("All task done")
            })
        })
        
    })
})
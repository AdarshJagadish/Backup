// function greet (name,callback){
//     console.log('helo'+' '+name)
//     callback()
// }
// function sayhello(){
//     console.log('good evenig')
// }
// greet('akash',sayhello)




// ---------------------- Call Back hell ------------------- //

console.log("start")

function fetchUser(callback){
    setTimeout(()=>{
        console.log("step 1: user fetched");
        callback();
    },1000);
}
function verifyUser(callback){
    setTimeout(()=>{
        console.log("step 2: user verified");
        callback();
    },1000);
}
function fetchOrders(callback){
    setTimeout(()=>{
        console.log("step 3: Orders fetched");
        callback();
    },1000);
}
function processPayment(callback){
    setTimeout(()=>{
        console.log("step 4: Payment processed");
        callback();
    },1000);
}
function sendEmail(callback){
    setTimeout(()=>{
        console.log("step 5: Confoirmation email sent");
        callback();
    },1000);
}
//Calling function with deeply nested callbacks
fetchUser(() => {
    verifyUser(() => {
        fetchOrders(() => {
            processPayment(() => {
                sendEmail(() => {
                    console.log("All steps completed!")
                })
            })
        })
    })
})

console.log("End")
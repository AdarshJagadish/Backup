// Syntax: 
// let myPromise = new Promise(function(resolve,reject){
//     resolve()
//     reject()
// })
// myPromise
//     .then(function)
//     .catch(function)

//------------------------------------------------------//

// let myPromise = new Promise((resolve,reject) => {
//     let Success = True
//     if (Success){
//         resolve('Success')
//     }
//     else{
//         reject('fetched')
//     }
// })
// myPromise
// .then(result => console.log(result))
// .catch(error => console.log(error))

//------------------------------------------------------//
//                Promise Chaining
//------------------------------------------------------//

console.log("start");
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1: User fetched");
            reject();
        }, 1000);
});
}

function verifyUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step2: User verified");
            resolve();
        }, 1000);
    })
}

function fetchOrder() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Step 3: Order fetched")
            resolve();
        }, 1000);
    });
}

function processPayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 4: Payment processed");
            resolve();
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 5: Confirmation email sent");
            resolve();
        }, 1000);
    });
}

// Using Promise Chaining
fetchUser()
.then(verifyUser)
.then(fetchOrder)
.then(processPayment)
.then(sendEmail)
.then(() => console.log("All steps completed!"))
.catch((error) => console.log("Error:",error));

console.log("End");
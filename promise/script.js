// Syntax: 
// let myPromise = new Promise(function(resolve,reject){
//     resolve()
//     reject()
// })
// myPromise
//     .then(function)
//     .catch(function)

//------------------------------------------------------//

let myPromise = new Promise((resolve,reject) => {
    let Success = True
    if (Success){
        resolve('Success')
    }
    else{
        reject('fetched')
    }
})
myPromise
.then(result => console.log(result))
.catch(error => console.log(error))
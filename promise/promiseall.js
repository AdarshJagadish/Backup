// let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1 ✅"), 1000));
// 		let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2 ✅"), 2000));
// 		let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3 ✅"), 3000));

// 		Promise.all([p1, p2, p3])
// 			.then(results => console.log("All Tasks Done:", results))
// 			.catch(error => console.log("Error:", error));




//-----------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------//




// 	let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1 ✅"), 1000));
// let p2 = new Promise((resolve,reject) => setTimeout(() => resolve("Task 2 ✅"), 2000));
// let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3 ✅"), 3000));

// Promise.race([p1, p2, p3])
// 	.then(results => console.log("All Tasks Done:", results))
// 	.catch(error => console.log("Error:", error));                 // only return first resolve/reject




//-----------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------//




// let p1 = new Promise(resolve => setTimeout(() => resolve("Task 1 ✅"), 1000));
// let p2 = new Promise((resolve,reject) => setTimeout(() => reject("Task 2 ✅"), 2000));
// let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3 ✅"), 3000));
                                                                          // returns both resolve and reject
// Promise.allSettled([p1, p2, p3])
// .then(results => console.log("All Tasks Done:", results))
// .catch(error => console.log("Error:", error));




// let p1 = new Promise((resolve,reject) => setTimeout(() => reject("Task 1 ✅"), 1000));
// let p2 = new Promise(resolve => setTimeout(() => resolve("Task 2 ✅"), 2000));
// let p3 = new Promise(resolve => setTimeout(() => resolve("Task 3 ✅"), 3000));

// Promise.any([p1, p2, p3])
// .then(results => console.log("All Tasks Done:", results))        // only return first resolve/reject
// .catch(error => console.log("Error:", error));
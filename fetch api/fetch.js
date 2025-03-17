// syntax: 
//     fetch('url')
//     .then(fn())
//     .
//     .
//     .then(fn())
//     .catch(fn())

function fetchdata(){
    fetch('https://dummyjson.com/posts')
.then(responses=>responses.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))
}
fetchdata();
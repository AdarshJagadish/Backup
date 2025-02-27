// try{
//     let x = y + 10
//     console.log(x)
// }
// catch(error){
//     console.log('Error occured:',error.message)
// }
// finally{
//     //exicute when error occured or not
//     console.log('Exicution completed')
// }


//-------------creating new error(trow)--------------//

function canVote(age){
    if(age<18){
        throw new Error('You are not eligible')
    }
    return 'you are eligible'
}
try{
    console.log(canVote(15))
}
catch(error){
    console.log('Error occured:',error.message)
}
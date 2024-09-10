// function factorial(num){
//     let arr= Array.from(Array(num+1).keys())
//     console.log(arr.slice(1,))
//     let x= (arr.slice(1,)).reduce((a,b)=> {
//       return a*b
//     })
//     return x;
// }

// using for loops
function forfact(number){
    let fact=1;
    for (let index = 1; index <= number; index++) {
        console.log(index)
       fact= fact*index
    }

    return fact
}
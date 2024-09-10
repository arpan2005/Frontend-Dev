// let arr=[2,5,13,12]
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// console.log(newarr)
let arr=[2,5,13,12]
let newarr= arr.map((e)=>{
  return e**2
})
console.log(newarr)
let b= ((e)=>{
   if(e>100){
    return true
   }
   else 
   return false
})
console.log(newarr.filter(b))

let c=[1,2,4,5,6]
let add=((a,b)=>{
 return a*b
})
console.log(c.reduce(add))
let a =Math.random()
let first,second,third
//for first
if(a<0.33){
    first="crazy"
}
else if(a<0.66 && a>0.33){
    first="amazing"
}
else{
    first="fire"
}
//for second
 a =Math.random()
if(a<0.33){
    second="Engine"
}
else if(a<0.66 && a>0.33){
    second="Food"
}
else{
    second="Garments"
}
//for third
a =Math.random()
if(a<0.33){
    third="Bros"
}
else if(a<0.66 && a>0.33){
    third="Limited"
}
else{
    third="Hub"
}
console.log(`${first} ${second} ${third}`)
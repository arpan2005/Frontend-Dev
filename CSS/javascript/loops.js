let i=0;
for(i=0;i<5;i++){
    console.log(i);
}
let obj={
    name:"arpan",
    role:"Engineer",
    company:"Tata Power"
}
for (const key in obj) {
        const element = obj[key];
       console.log(key,element)
}
for (const element of "Arpan") {
    console.log(element);
}
//for each loop
let arr=[1,5,8,71,56]
arr.forEach((value,index,arr) => {
    console.log(value,index,arr)
});
//for in loop
let obj1={
    a:2,
    b:5,
    c:10
}
for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];
        console.log(key,element)
        
    }
}
// for off loop
for (const element of arr) {
    console.log(element)
}
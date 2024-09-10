console.log("Arpan")
//class selector

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[1].style.backgroundColor="yellow"


//id selector
// document.getElementById("yellow").style.backgroundColor="yellow"

//query selector
document.querySelector(".box").style.backgroundColor="yellow" //only select the first element 
//it select all the elements inside a class

console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(a=>{
     a.style.backgroundColor="yellow"
})
console.log(document.getElementsByTagName("div"))
let c=(document.getElementsByTagName("div"))
console.log(c[3].matches("#yellow"))

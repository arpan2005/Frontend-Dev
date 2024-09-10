console.log("hello")
let boxes=document.getElementsByClassName("box")

// let boxes=document.querySelector(".container").children
function randomcolor(){
    let r=Math.ceil(0+Math.random()*255);
    let g=Math.ceil(0+Math.random()*255);
    let b=Math.ceil(0+Math.random()*255);
    return`rgb(${r},${g},${b})`
}
Array.from(boxes).forEach(a=>{
    a.style.backgroundColor=randomcolor()
    a.style.color=randomcolor()
})

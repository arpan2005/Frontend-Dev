document.querySelector(".childcontainer").addEventListener("click",(a)=>{
    a.stopPropagation() // This method stops bubbling 
    alert("child was clicked")
})

document.querySelector(".childcontainer").addEventListener("click",(a)=>{
    a.stopPropagation()
    alert("childcontainer was clicked")
})
document.querySelector(".childcontainer").addEventListener("click",(a)=>{
    a.stopPropagation()
    alert("container was clicked")
})
function randomcolor(){
    let r=Math.ceil(0+Math.random()*255);
    let g=Math.ceil(0+Math.random()*255);
    let b=Math.ceil(0+Math.random()*255);
    return`rgb(${r},${g},${b})`
}
 setInterval(() => {
    document.querySelector(".childcontainer").style.background=randomcolor()
    document.querySelector(".child").style.background=randomcolor()
    document.querySelector(".container").style.background=randomcolor()

 }, 500);
//  setTimeout(() => {
//     document.querySelector(".childcontainer").style.background="red"
//  }, 1000);

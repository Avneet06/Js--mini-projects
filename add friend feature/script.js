var istatus=document.querySelector("h5")
var add=document.querySelector("#add") 
var removef=document.querySelector("#remove")

add.addEventListener("click",function(){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
}) 
removef.addEventListener("click",function(){
    istatus.innerHTML="Strangers"
    istatus.style.color="red"
})


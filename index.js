let elements = document.querySelector(".content-box").children
let home = document.getElementById("home")
let contact = document.getElementById("contact")
let info = document.getElementById("info")
let guide = document.getElementById("guide")
let menu = document.getElementById("menu-image")

home.addEventListener("click",()=>{
    console.log("Element Clicked")
    for(let i of elements)
    {
        i.style.display = "none"
    }
    document.getElementById("home-content").style.display = "block";
})

contact.addEventListener("click",()=>{
    console.log("Element Clicked")
    for(let i of elements)
    {
        i.style.display = "none"
    }
    document.getElementById("contact-content").style.display = "block";
})

info.addEventListener("click",()=>{
    console.log("Element Clicked")
    for(let i of elements)
    {
        i.style.display = "none"
    }
    document.getElementById("information-content").style.display = "block";
})

guide.addEventListener("click",()=>{
    console.log("Element Clicked")
    for(let i of elements)
    {
        i.style.display = "none"
    }
    document.getElementById("guide-content").style.display = "block";
})

menu.addEventListener("click",()=>{
    console.log("button Clicked")
    let list=document.getElementById("list")
    if(list.style.display==="block")
    {
        list.style.display = "none";
        document.querySelector(".leftpanel").style.width = "4vw"
        document.querySelector(".leftpanel").style.min_width = "0px"
    }
    else
    {
        list.style.display = "block";
        document.querySelector(".leftpanel").style.width = "150px"
    }
})
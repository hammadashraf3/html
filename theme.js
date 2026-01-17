let main = document.querySelector(".main")
let head = document.querySelector(".head")
let paragraph = document.querySelector(".paragraph")
let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

function Darkmode(){
    main.style.backgroundColor = "black"
    head.style.color = "white"
    paragraph.style.color = "white"
    btn.style.backgroundColor = "white"
    btn.style.color = "black"
    btn1.style.backgroundColor = "white"
    btn1.style.color = "black"
    btn2.style.backgroundColor = "white"
    btn2.style.color = "black"
}

function Lightmode(){
    main.style.backgroundColor = "white"
    head.style.color = "black"
    paragraph.style.color = "black"
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn1.style.backgroundColor = "black"
    btn1.style.color = "white"
    btn2.style.backgroundColor = "black"
    btn2.style.color = "white"
}
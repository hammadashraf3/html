let count = 0
let counter = document.querySelector(".count")

function Increase(){
    count++
    counter.innerText = count
}
function Decrease(){
    if(count==0){
        return
    }
    count--
    counter.innerText = count
}
function Reset(){
    count = 0
    counter.innerText = count
}
const count_num = document.getElementById("count-num");
const buttons = document.querySelector(".button-holders")

buttons.addEventListener('click', (e)=>{
    let id = e.target.id
    if (id == "add") {
        count_num.innerHTML++
    } else if (id == "res") {
        count_num.innerHTML = 0
    } else if (id == "sub") {
        count_num.innerHTML--
    } 
})
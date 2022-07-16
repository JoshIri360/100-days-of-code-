const genRandNum = () => Math.floor(Math.random()*100 + 1)

document.getElementById("btn_gen").addEventListener("click", ()=>{
    document.getElementById("ran_num").innerHTML = Math.floor(Math.random()*100 + 1)
})
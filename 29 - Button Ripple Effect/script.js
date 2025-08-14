const btnEl=document.querySelector(".btn")
btnEl.addEventListener("mouseover", (event)=>{
    const x=event.offsetX
    const y=event.offsetY
    console.log(x, y)
    btnEl.style.setProperty("--xPos", x+"px")
    btnEl.style.setProperty("--yPos", y+"px")
})

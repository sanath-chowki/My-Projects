const textAreaEl=document.getElementById("textarea")
const totalCounterEl=document.getElementById("total-counter")
const remCounterEl=document.getElementById("rem-counter")
textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
})
function updateCounter() {
    totalCounterEl.innerText=textAreaEl.value.length
    remCounterEl.innerText=textAreaEl.getAttribute("maxlength")-textAreaEl.value.length
}
updateCounter()

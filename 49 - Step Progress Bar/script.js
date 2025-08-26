const nextEl=document.getElementById("next")
const prevEl=document.getElementById("prev")
const stepsEl=document.querySelectorAll(".step")
const progressEl=document.querySelector(".progress-bar-front")
let currectChecked=1
nextEl.addEventListener("click", ()=>{
    currectChecked++
    if(currectChecked>stepsEl.length) {
        currectChecked=stepsEl.length
    }
    updateStepProgress()
})
prevEl.addEventListener("click", ()=>{
    currectChecked--
    if(currectChecked<1) {
        currectChecked=1
    }
    updateStepProgress()
})
function updateStepProgress() {
    stepsEl.forEach((stepEl, idx)=>{
        if(idx<currectChecked) {
            stepEl.classList.add("checked")
            stepEl.innerHTML=`
            <i class="fa-solid fa-check"></i>
            <small>${idx===0?"Start":idx===stepsEl.length-1?"Final":"Step "+idx}</small>
            `
        }
        else {
            stepEl.classList.remove("checked")
            stepEl.innerHTML=`
            <i class="fa-solid fa-times"></i>
            `
        }
    })
    const checkedNum=document.querySelectorAll(".checked")
    progressEl.style.width=((checkedNum.length-1)/(stepsEl.length-1))*100+"%"
    if(currectChecked===1) {
        prevEl.disabled=true
    }
    else if(currectChecked===stepsEl.length) {
        nextEl.disabled=true
    }
    else {
        prevEl.disabled=false
        nextEl.disabled=false
    }
}

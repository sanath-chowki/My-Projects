const startEl=document.getElementById("start")
const stopEl=document.getElementById("stop")
const resetEl=document.getElementById("reset")
const timerEl=document.getElementById("timer")
startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)
let interval
let timeLeft=1500
function startTimer() {
   interval=setInterval(()=>{
    timeLeft--
    updateTimer()
    if(timeLeft===0) {
        clearInterval(interval)
        alert("Time's up!")
        timeLeft=1500
    }
   }, 1000)
}
function updateTimer() {
    let minutes=Math.floor(timeLeft/60)
    let seconds=timeLeft%60
    let res=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    timerEl.innerHTML=res
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    clearInterval(interval)
    timeLeft=1500
    updateTimer()
}

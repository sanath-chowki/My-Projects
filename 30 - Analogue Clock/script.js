const hourEl=document.querySelector(".hour")
const minuteEl=document.querySelector(".minute")
const secondEl=document.querySelector(".second")
function updateClock() {
    const currentDate=new Date()
    setTimeout(updateClock, 1000);
    const hour=currentDate.getHours()
    const minute=currentDate.getMinutes()
    const second=currentDate.getSeconds()
    const hourDegree=(hour/12)*360
    hourEl.style.transform=`rotate(${hourDegree}deg)`
    const minuteDegree=(minute/60)*360
    minuteEl.style.transform=`rotate(${minuteDegree}deg)`
    const secondDegree=(second/60)*360
    secondEl.style.transform=`rotate(${secondDegree}deg)`
}
updateClock()

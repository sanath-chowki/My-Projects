const btn=document.getElementById('btn')
const birthday=document.getElementById('birthday')
const result=document.getElementById('result')
btn.addEventListener("click", calculateAge)
function calculateAge() {
    const birthdayValue=birthday.value
    if(birthdayValue=="") {
        alert("Please enter your birth date")
    }
    else {
        const age=getAge(birthdayValue)
        result.innerText=`Your age is ${age} ${(age>1?"years":"year")}`
    }
}
function getAge(birthdayValue) {
    const cDate=new Date()
    const bDate=new Date(birthdayValue)
    let age=cDate.getFullYear()-bDate.getFullYear()
    let month=cDate.getMonth()-bDate.getMonth()
    if(month<0 || (month===0 && cDate.getDate()<bDate.getDate())) {
        age--
    }
    return age
}

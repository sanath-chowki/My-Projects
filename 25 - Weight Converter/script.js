const input=document.getElementById('input')
const error=document.getElementById('error')
const result=document.getElementById('result')
let errorTime
let resultTime
input.addEventListener("input", updateResults)
function updateResults() {
    if(input.value<=0 || isNaN(input.value)) {
        error.innerText="Please enter a valid number"
        clearTimeout(errorTime)
        errorTime=setTimeout(()=>{
            input.value=""
            error.innerText=""
            result.innerText=""
        }, 2000);
    }
    else {
        result.innerText=(+input.value/2.2).toFixed(2)
        clearTimeout(resultTime)
        resultTime=setTimeout(()=>{
            input.value=""
            result.innerText=""
        }, 10000);
    }
}

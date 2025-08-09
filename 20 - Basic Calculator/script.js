const button=document.querySelectorAll("button")
const inputField=document.getElementById("result")
for(let i=0; i<button.length; i++) {
    button[i].addEventListener("click", ()=>{
        const buttonValue=button[i].textContent
        if(buttonValue==="AC") clearResult();
        else if(buttonValue==="=") calculateResult();
        else if(buttonValue==="DEL") deleteResult();
        else appendValue(buttonValue);
    })
}
function clearResult() {
    inputField.value=""
}
function calculateResult() {
    inputField.value=eval(inputField.value)
}
function deleteResult() {
    inputField.value=inputField.value.slice(0, -1)
}
function appendValue(buttonValue) {
    inputField.value+=buttonValue
}

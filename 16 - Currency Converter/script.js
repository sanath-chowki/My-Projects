console.log("script.js is working...")
const btn = document.querySelector(".btn")
const populate = async (value, currency) => {
    let myStr=""
    // link in private.js
    url = link+currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"
    for(let key of Object.keys(rJson["data"])) {
        myStr +=   `<tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"]*value)}</td>
                    </tr>`
    }
    const tableBody = document.querySelector("tbody")
    tableBody.innerHTML = myStr
}
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})

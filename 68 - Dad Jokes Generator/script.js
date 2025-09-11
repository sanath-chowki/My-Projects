const btnEl=document.getElementById("btn")
const jokeEl=document.getElementById("joke")
btnEl.addEventListener("click", getJoke)
const apiKey="h/AlULTa2MD4ygTQ/Sdstg==LWtNkBHkCLtl1F2g"
const options={
    method: "GET",
    headers: {"X-Api-Key": apiKey, },
}
const apiUrl="https://api.api-ninjas.com/v1/dadjokes"
async function getJoke() {
    try {
        jokeEl.innerText="Updating..."
        btnEl.disabled=true
        btnEl.innerText="Loading..."
        const response=await fetch(apiUrl, options)
        const data=await response.json()
        jokeEl.innerText=data[0].joke
        btnEl.disabled=false
        btnEl.innerText="Tell me a joke"
    }
    catch(error) {
        jokeEl.innerText="An error happened, try again later!"
        btnEl.disabled=false
        btnEl.innerText="Tell me a joke"
    }
}

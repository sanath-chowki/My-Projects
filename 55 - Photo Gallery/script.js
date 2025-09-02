const btnEl = document.getElementById("btn")
const errorMessageEl = document.getElementById("errorMessage")
const galleryEl = document.getElementById("gallery")
btnEl.addEventListener("click", fetchImage)
async function fetchImage() {
    const imageValue = document.getElementById('input').value
    if (imageValue > 10 || imageValue < 1) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "Number should be between 1 and 10"
        return
    }
    let imgs = ""
    try {
        btnEl.style.display = "none"
        const loading=`<img src="img/spinner.svg">`
        galleryEl.innerHTML=loading
        await fetch(`https://api.unsplash.com/photos?per_page=${imageValue}&page=${Math.round(Math.random() * 1000)}&client_id=dn_Hp64yMsu9eiCcYJcoCjbsFi-yu_Q-ymocLxVHFqs`
        ).then(
            (res) => res.json().then((data) => {
                if (data) {
                    data.forEach((pic) => {
                        imgs += `<img src=${pic.urls.small} alt="image">`
                        galleryEl.style.display = "block"
                        galleryEl.innerHTML = imgs
                        btnEl.style.display = "block"
                        errorMessageEl.style.display = "none"
                    })
                }
            })
        )
    }
    catch (error) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "An error happened, try again later"
        btnEl.style.display = "block"
        galleryEl.style.display = "none"
    }
}

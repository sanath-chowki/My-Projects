const searxhBarcontainerEl=document.querySelector(".search-bar-container")
const magnifierEl=document.querySelector(".magnifier")
magnifierEl.addEventListener("click", ()=>{
    searxhBarcontainerEl.classList.toggle("active")
})

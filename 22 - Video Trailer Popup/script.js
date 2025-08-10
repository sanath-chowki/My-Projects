const button=document.querySelector('.btn')
const close=document.querySelector('.close-icon')
const trailerContainer=document.querySelector('.trailer-container')
const video=document.querySelector('video')
button.addEventListener('click',()=>{
    trailerContainer.classList.remove('active')
    video.play()
})
close.addEventListener('click',()=>{
    trailerContainer.classList.add('active')
    video.pause()
    video.currentTime=0
})

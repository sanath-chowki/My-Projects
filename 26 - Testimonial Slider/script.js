const testimonials = [
    {
        img: 'img/naruto.jpg',
        text: 'Naruto is a determined and resilient individual who never gives up, no matter the odds.',
        name: 'Naruto Uzumaki'
    },
    {
        img: 'img/sasuke.jpg',
        text: 'Sasuke is highly skilled and driven, with an unwavering focus on his goals.',
        name: 'Sasuke Uchiha'
    },
    {
        img: 'img/sakura.jpg',
        text: 'Sakura is intelligent and compassionate, always ready to support her friends in times of need.',
        name: 'Sakura Haruno'
    },
    {
        img: 'img/kakashi.jpg',
        text: 'Kakashi is a wise and skilled leader who combines experience with a calm, composed demeanor.',
        name: 'Kakashi Hatake'
    }
];
const imgEl=document.querySelector('img')
const textEl=document.querySelector('.text')
const nameEl=document.querySelector('.username')
let idx=0
updateTestimonial()
function updateTestimonial() {
    const {img, text, name}= testimonials[idx];
    imgEl.src=img;
    textEl.innerText=text;
    nameEl.innerText=name;
    idx++
    if(idx===testimonials.length) {
        idx=0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 2000);
}

const btnEl=document.getElementById('btn');
const apiURL="https://dummyjson.com/quotes";
const quoteEl=document.getElementById('quote');
const authorEl=document.getElementById('author');
async function getQuote() {
    try {
        btnEl.innerText="Loading...";
        btnEl.disabled=true;
        quoteEl.innerText="Updating...";
        authorEl.innerText="Updating...";
        const response=await fetch(apiURL);
        const data=await response.json();
        const randomIndex=Math.floor(Math.random() * data.quotes.length);
        const quoteContent=data.quotes[randomIndex].quote;
        const quoteAuthor=data.quotes[randomIndex].author;
        quoteEl.innerText=quoteContent;
        authorEl.innerText=quoteAuthor;
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText="An error happened, try again later";
        authorEl.innerText="";
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    }
}
getQuote();
btnEl.addEventListener("click", getQuote);

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loading'); 

let apiQuotes = []; 

// Show quote loading
function loading() {
    loader.hidden = false; 
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
function newQuote(){
    loading();
    // Pick random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // authorText.textContent = quote.author; 
    // Check if author field is blank and replace it with "author unknown"
    if (!quote.author) {
        authorText.textContent = 'Author Unknown';
    }else {
        authorText.textContent = quote.author; 
    }
    // check quote length to determine styling
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote'); 
    }

    // Set Quote, Hide Loader
    quoteText.textContent = quote.text; 
    complete();
}

// Get quotes from API

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes'; 
    try {
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
    console.log('Whoops, no quote here. Carry on', error)
    }
}

// Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`; 
    window.open(twitterUrl, '_blank'); 
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// Onload
getQuotes();
// 
// loading();
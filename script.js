let apiQuotes = []; 

// Show new quote
function newQuote(){
    // Pick random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

// Get quotes from API

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'; 
    try {
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
    // catch error here
    }
}

// Onload
getQuotes();
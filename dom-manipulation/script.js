// quotes array
var quotes = [
  { text: "First quote", category: "General" },
  { text: "Second quote", category: "Life" }
];

// REQUIRED function name
function showRandomQuote() {
  var quoteDisplay = document.getElementById("quoteDisplay");

  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];

  // REQUIRED: innerHTML
  quoteDisplay.innerHTML = quote.text + " - " + quote.category;
}

// addQuote function
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  quotes.push({
    text: text,
    category: category
  });

  showRandomQuote();
}

// REQUIRED event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

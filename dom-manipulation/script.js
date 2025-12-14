// Quotes array
const quotes = [
  { text: "The only way to learn is to build.", category: "learning" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "programming" },
  { text: "Small steps every day.", category: "motivation" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");

// REQUIRED function
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // DOM update WITHOUT innerHTML
  quoteDisplay.textContent = quote.text + " (" + quote.category + ")";
}

// REQUIRED function
function addQuote() {
  // Add new quote to array
  quotes.push({
    text: "Added quote",
    category: "added"
  });

  // Update DOM
  displayRandomQuote();
}

// REQUIRED event listener
newQuoteButton.addEventListener("click", displayRandomQuote);

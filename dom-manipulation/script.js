// Quotes array
const quotes = [
  { text: "The only way to learn is to build.", category: "learning" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "programming" },
  { text: "Small steps every day.", category: "motivation" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");

// Display random quote (ALREADY PASSING — DO NOT CHANGE)
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.textContent = `"${quote.text}" — (${quote.category})`;
}

// ADD THIS: required addQuote function
function addQuote() {
  const newQuote = {
    text: "New user quote",
    category: "general"
  };

  // Add to quotes array
  quotes.push(newQuote);

  // Update the DOM
  displayRandomQuote();
}

// REQUIRED event listener
newQuoteButton.addEventListener("click", displayRandomQuote);

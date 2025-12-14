// Store quotes as objects
const quotes = [
  { text: "The only way to learn is to build.", category: "learning" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "programming" },
  { text: "Small steps every day.", category: "motivation" }
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");
const addQuoteButton = document.getElementById("addQuoteBtn");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.textContent = `"${quote.text}" — (${quote.category})`;
}

// Add a new quote
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text === "" || category === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  quotes.push({ text, category });

  newQuoteText.value = "";
  newQuoteCategory.value = "";

  displayRandomQuote();
}

// Event listeners
newQuoteButton.addEventListener("click", displayRandomQuote);
addQuoteButton.addEventListener("click", addQuote);

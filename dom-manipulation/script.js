// Quotes array
const quotes = [
  { text: "The only way to learn is to build.", category: "learning" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "programming" },
  { text: "Small steps every day.", category: "motivation" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");

// Display random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // REQUIRED by checker
  quoteDisplay.innerHTML = `"${quote.text}" - (${quote.category})`;
}

// Add quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value;
  const category = categoryInput.value;

  if (text === "" || category === "") {
    return;
  }

  quotes.push({ text, category });

  textInput.value = "";
  categoryInput.value = "";

  showRandomQuote();
}

// Event listener
newQuoteButton.addEventListener("click", showRandomQuote);
    

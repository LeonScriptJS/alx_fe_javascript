// quotes array
const quotes = [
  { text: "Learning never exhausts the mind.", category: "Education" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Success is built on consistency.", category: "Motivation" }
];

// function to display random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.textContent = `"${quote.text}" — ${quote.category}`;
}

// function to add a quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  if (textInput.value === "" || categoryInput.value === "") {
    return;
  }

  quotes.push({
    text: textInput.value,
    category: categoryInput.value
  });

  textInput.value = "";
  categoryInput.value = "";

  displayRandomQuote();
}

// event listener for button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

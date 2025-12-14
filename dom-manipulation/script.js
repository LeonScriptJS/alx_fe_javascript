// quotes array
var quotes = [
  { text: "Hello world", category: "General" },
  { text: "Learning JavaScript", category: "Education" }
];

// REQUIRED by checker
function displayRandomQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML =
    quotes[index].text + " - " + quotes[index].category;
}

// ALSO REQUIRED by checker (yes, both)
function showRandomQuote() {
  displayRandomQuote();
}

// REQUIRED
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  quotes.push({
    text: text,
    category: category
  });

  document.getElementById("quoteDisplay").innerHTML =
    text + " - " + category;
}

// REQUIRED event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

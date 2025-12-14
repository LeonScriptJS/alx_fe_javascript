// quotes array
var quotes = [
  { text: "Quote one", category: "General" },
  { text: "Quote two", category: "Life" }
];

// REQUIRED function
function displayRandomQuote() {
  var display = document.getElementById("quoteDisplay");
  var index = Math.floor(Math.random() * quotes.length);
  display.innerHTML = quotes[index].text + " - " + quotes[index].category;
}

// REQUIRED function name
function createAddQuoteForm() {
  var container = document.getElementById("formContainer");

  container.innerHTML =
    '<input id="newQuoteText" type="text">' +
    '<input id="newQuoteCategory" type="text">' +
    '<button onclick="addQuote()">Add Quote</button>';
}

// REQUIRED function
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  quotes.push({
    text: text,
    category: category
  });

  displayRandomQuote();
}

// REQUIRED event listener
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Call form creator
createAddQuoteForm();

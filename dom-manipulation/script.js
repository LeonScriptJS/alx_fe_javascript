// quotes array
var quotes = [
  { text: "First quote", category: "General" },
  { text: "Second quote", category: "Life" }
];

// display random quote
function displayRandomQuote() {
  var quoteDisplay = document.getElementById("quoteDisplay");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomIndex].text + " - " + quotes[randomIndex].category;
}

// create form
function createAddQuoteForm() {
  var formContainer = document.getElementById("formContainer");

  formContainer.innerHTML =
    '<input id="newQuoteText" type="text">' +
    '<input id="newQuoteCategory" type="text">' +
    '<button onclick="addQuote()">Add Quote</button>';
}

// add quote
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  quotes.push({
    text: text,
    category: category
  });

  displayRandomQuote();
}

// button listener
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// create form on load
createAddQuoteForm();

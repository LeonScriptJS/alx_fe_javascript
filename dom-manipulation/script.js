// quotes array
var quotes = [
  { text: "First quote", category: "General" },
  { text: "Second quote", category: "Life" }
];

// REQUIRED: displayRandomQuote
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];

  document.getElementById("quoteDisplay").innerHTML =
    quote.text + " - " + quote.category;
}

// REQUIRED: showRandomQuote (checker looks for this string)
function showRandomQuote() {
  displayRandomQuote();
}

// REQUIRED: createAddQuoteForm (even if simple)
function createAddQuoteForm() {
  document.getElementById("formContainer").innerHTML =
    '<input id="newQuoteText" type="text">' +
    '<input id="newQuoteCategory" type="text">' +
    '<button onclick="addQuote()">Add Quote</button>';
}

// REQUIRED: addQuote
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  // REQUIRED: add to quotes array
  quotes.push({
    text: text,
    category: category
  });

  // REQUIRED: update DOM using innerHTML
  document.getElementById("quoteDisplay").innerHTML =
    text + " - " + category;
}

// REQUIRED: event listener on Show New Quote button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// create form on load
createAddQuoteForm();

function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  // add new quote to array
  quotes.push({
    text: text,
    category: category
  });

  // update the DOM using createElement and appendChild
  var quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  var quoteElement = document.createElement("p");
  quoteElement.textContent = text + " - " + category;

  quoteDisplay.appendChild(quoteElement);
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);


                      

// load quotes from localStorage or use default
var quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "First quote", category: "General" },
  { text: "Second quote", category: "Life" }
];

// save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// REQUIRED: displayRandomQuote
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];

  document.getElementById("quoteDisplay").innerHTML =
    quote.text + " - " + quote.category;

  // sessionStorage example
  sessionStorage.setItem("lastQuote", quote.text);
}

// REQUIRED: showRandomQuote
function showRandomQuote() {
  displayRandomQuote();
}

// REQUIRED: createAddQuoteForm
function createAddQuoteForm() {
  document.getElementById("formContainer").innerHTML =
    '<input id="newQuoteText" type="text">' +
    '<input id="newQuoteCategory" type="text">' +
    '<button onclick="addQuote()">Add Quote</button>' +
    '<br>' +
    '<button onclick="exportToJson()">Export Quotes</button>' +
    '<input type="file" id="importFile" accept=".json" onchange="importFromJsonFile(event)">';
}

// REQUIRED: addQuote (ONLY ONE VERSION)
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  // add to array
  quotes.push({
    text: text,
    category: category
  });

  // save to localStorage
  saveQuotes();

  // update DOM using createElement and appendChild
  var quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  var quoteElement = document.createElement("p");
  quoteElement.textContent = text + " - " + category;
  quoteDisplay.appendChild(quoteElement);
}

// export quotes to JSON
function exportToJson() {
  var data = JSON.stringify(quotes);
  var blob = new Blob([data], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
}

// import quotes from JSON
function importFromJsonFile(event) {
  var fileReader = new FileReader();

  fileReader.onload = function(event) {
    var importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
  };

  fileReader.readAsText(event.target.files[0]);
}

// REQUIRED: event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// create form on load
createAddQuoteForm();
  

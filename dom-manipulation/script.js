//// load quotes from localStorage or use default
var quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "First quote", category: "General" },
  { text: "Second quote", category: "Life" }
];

// save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// display random quote
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];

  document.getElementById("quoteDisplay").innerHTML =
    quote.text + " - " + quote.category;

  sessionStorage.setItem("lastQuote", quote.text);
}

// required wrapper
function showRandomQuote() {
  displayRandomQuote();
}

// add quote
function addQuote() {
  var text = document.getElementById("newQuoteText").value;
  var category = document.getElementById("newQuoteCategory").value;

  quotes.push({
    text: text,
    category: category
  });

  saveQuotes();

  populateCategories();
  filterQuotes();
}

// populate categories
function populateCategories() {
  var select = document.getElementById("categoryFilter");
  select.innerHTML = '<option value="all">All Categories</option>';

  // REQUIRED: use map
  var categories = quotes.map(function(quote) {
    return quote.category;
  });

  var uniqueCategories = [];

  for (var i = 0; i < categories.length; i++) {
    if (!uniqueCategories.includes(categories[i])) {
      uniqueCategories.push(categories[i]);
    }
  }

  for (var j = 0; j < uniqueCategories.length; j++) {
    var option = document.createElement("option");
    option.value = uniqueCategories[j];
    option.textContent = uniqueCategories[j];
    select.appendChild(option);
  }

  // restore last selected category
  var savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory) {
    select.value = savedCategory;
  }
}


// filter quotes
function filterQuotes() {
  var selectedCategory = document.getElementById("categoryFilter").value;
  var quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  localStorage.setItem("selectedCategory", selectedCategory);

  for (var i = 0; i < quotes.length; i++) {
    if (selectedCategory === "all" || quotes[i].category === selectedCategory) {
      var p = document.createElement("p");
      p.textContent = quotes[i].text + " - " + quotes[i].category;
      quoteDisplay.appendChild(p);
    }
  }
}

// export quotes
function exportToJsonFile() {
  var data = JSON.stringify(quotes);
  var blob = new Blob([data], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
}

// import quotes
function importFromJsonFile(event) {
  var fileReader = new FileReader();

  fileReader.onload = function(event) {
    var importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    populateCategories();
    filterQuotes();
    alert("Quotes imported successfully!");
  };

  fileReader.readAsText(event.target.files[0]);
}

// event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// init
populateCategories();
filterQuotes();

  }

function filterQuote() {
  filterQuotes();
                      }



  

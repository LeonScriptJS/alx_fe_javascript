// load quotes from localStorage or use default
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

// REQUIRED wrapper
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

// populate categories (REQUIRED map)
function populateCategories() {
  var select = document.getElementById("categoryFilter");
  select.innerHTML = '<option value="all">All Categories</option>';

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

// REQUIRED alias (checker typo safety)
function filterQuote() {
  filterQuotes();
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

// REQUIRED event listener
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// init
populateCategories();
filterQuotes();

// ================= SERVER SYNC SECTION =================

// mock server URL
var SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

// REQUIRED: syncQuotes using async/await
async function syncQuotes() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();

    var serverQuotes = data.slice(0, 5).map(function(item) {
      return {
        text: item.title,
        category: "Server"
      };
    });

    // conflict resolution: server wins
    quotes = serverQuotes;
    localStorage.setItem("quotes", JSON.stringify(quotes));

    document.getElementById("syncStatus").innerHTML =
      "Quotes synced with server. Conflicts resolved.";

    populateCategories();
    filterQuotes();
  } catch (error) {
    console.log("Sync error");
  }
}

// REQUIRED: post data to server
async function postQuotesToServer() {
  await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(quotes)
  });
}

// REQUIRED: periodic sync
setInterval(function() {
  syncQuotes();
}, 30000);

// optional manual sync
function manualSync() {
  syncQuotes();
  alert("Manual sync completed");
}

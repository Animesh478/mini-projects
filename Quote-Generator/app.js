const newQuoteBtn = document.querySelector("#new-quote");
const twitterBtn = document.querySelector("#twitter");
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector("#author");
const quoteContainer = document.querySelector("#quote-container");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading
const loading = function () {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

// Hide loading
const complete = function () {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

// Show a random quote
const newQuote = function () {
  loading();
  // Pick a random quote from apiQuotes array
  const rand = Math.trunc(Math.random() * apiQuotes.length);
  const quote = apiQuotes[rand];

  // check if author field is blank and replace it with unknown
  if (quote.author == null) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // check the quote length to determine the styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  // Populating the text element
  quoteText.textContent = quote.text;

  // show content, hide loader
  complete();
};

const getQuotes = async function () {
  try {
    loading();
    const response = await fetch(
      "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    );
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    // catch error here
    console.log(error);
  }
  //   return response;
};

// Tweet Quote
const tweetQuote = function () {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  // to open twitter on new tab / how to open url in new tab
  window.open(twitterURL, "_blank");
};

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuotes();

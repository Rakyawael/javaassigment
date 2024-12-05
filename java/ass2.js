const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" }
];

let lastIndex = -1;

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    const quote = quotes[randomIndex];
      console.log("Random Index:", randomIndex);
      document.getElementById("quote").innerHTML = 
      `"${quote.text}"<br><br>— ${quote.author}`;
  
}


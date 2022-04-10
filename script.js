const button = document.querySelector(".detail");
const title = document.querySelector(".card-title");
const description = document.querySelector(".card-text");

const loadQuote = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  title.textContent = `ADVICE #${json.slip.id}`;
  description.textContent = json.slip.advice;
};

button.onclick = () => {
  loadQuote();
};

loadQuote();

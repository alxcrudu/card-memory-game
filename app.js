const cardsArray = [
  {
    name: "ten",
    img: "images/10-spades.png",
  },
  {
    name: "jack",
    img: "images/jack-spades.png",
  },
  {
    name: "queen",
    img: "images/queen-spades.png",
  },
  {
    name: "king",
    img: "images/king-spades.png",
  },
  {
    name: "ace",
    img: "images/ace-spades.png",
  },
  {
    name: "ten",
    img: "images/10-hearts.png",
  },
  {
    name: "jack",
    img: "images/jack-hearts.png",
  },
  {
    name: "queen",
    img: "images/queen-hearts.png",
  },
  {
    name: "king",
    img: "images/king-hearts.png",
  },
  {
    name: "ace",
    img: "images/ace-hearts.png",
  },
];

cardsArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const score = document.querySelector("#score");
const title = document.querySelector(".title");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/back-card.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.append(card);
  }
};
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const cardId1 = cardsChosenIds[0];
  const cardId2 = cardsChosenIds[1];

  if (cardId1 == cardId2) {
    cards[cardId1].setAttribute("src", "images/back-card.png");
    cards[cardId2].setAttribute("src", "images/back-card.png");
    alert("You clicked on the same image");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("You got one!");
    cards[cardId1].classList.toggle("hide");
    cards[cardId2].classList.toggle("hide");
    cards[cardId1].removeEventListener("click", flipCard);
    cards[cardId2].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[cardId1].setAttribute("src", "images/back-card.png");
    cards[cardId2].setAttribute("src", "images/back-card.png");
    alert("Sorry, try again!");
  }

  score.innerHTML = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardsArray.length / 2) {
    score.innerHTML = "";
    title.innerHTML = "Congratulations! You got them all, please refresh the page to play again!";
  }
};

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardsArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardsArray[cardId].img);
  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
};

import { DOMSelectors } from "./dom";
import "../css/style.css";

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

let roundNumber = 1;
let deckOfCards = [];

function startGame() {
  deckOfCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13,
  ];
  shuffleDeck(deckOfCards);

  DOMSelectors.roundNumber.innerHTML = `Round ${roundNumber}`;
}

function playRound() {
  if (deckOfCards.length < 2) {
    startGame();
  }

  const card1 = deckOfCards.pop();
  const card2 = deckOfCards.pop();

  DOMSelectors.player1Number.innerHTML = card1;
  DOMSelectors.player2Number.innerHTML = card2;

  if (card1 > card2) {
    DOMSelectors.result.innerHTML = "Player 1 wins the round!";
  } else if (card2 > card1) {
    DOMSelectors.result.innerHTML = "Player 2 wins the round!";
  } else {
    DOMSelectors.result.innerHTML = "It's a tie!";
  }

  DOMSelectors.roundNumber.innerHTML = `Round ${roundNumber++}`;
}

DOMSelectors.play.addEventListener("click", playRound);

startGame();

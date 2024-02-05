import { DOMSelectors } from "./dom";
import "../css/style.css";

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

let roundNumber = 1;
let player1Score = 0;
let player2Score = 0;
let deckOfCards = [];

function startGame() {
  deckOfCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13,
  ];
  shuffleDeck(deckOfCards);
  DOMSelectors.roundNumber.innerHTML = `Round ${roundNumber}`;
  updateScoreboard();
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
    player1Score++;
  } else if (card2 > card1) {
    DOMSelectors.result.innerHTML = "Player 2 wins the round!";
    player2Score++;
  } else {
    DOMSelectors.result.innerHTML = "It's a tie!";
  }

  DOMSelectors.roundNumber.innerHTML = `Round ${roundNumber++}`;
  updateScoreboard();
}

function updateScoreboard() {
  DOMSelectors.player1Score.innerHTML = `Player 1 Score: ${player1Score}`;
  DOMSelectors.player2Score.innerHTML = `Player 2 Score: ${player2Score}`;
}

DOMSelectors.play.addEventListener("click", playRound);

startGame();

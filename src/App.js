import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import React, {useState, useEffect} from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [selects, setSelects] = useState([]);
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);

  useEffect(() => {
    function getCards() {
      let currentCards = cards;
      let currentSelects = selects;

      for(let i = 0; i < 25; i++) {
        const currentCard = <Card imageLocation="https://picsum.photos/200/200"/>
        //currentSelects[i] = 0;
        currentCards.push(currentCard);
        /*
        currentCard.addEventListener("click", () => {
          currentSelects[i] = 1;
          setSelects(currentSelects);
        })*/
      }

      function addScore() {
        setScore(score + 1);
      }

      function resetScore() {
        setScore(0);
      }

      function newHigh() {
        setHigh(score);
      }
      //setSelects(currentSelects);
      setCards(cards => [...cards, currentCards]);
      console.log(cards);
    }

    getCards();
  }, [])

  return (
    <div className="content">
      <h1>Memory Game</h1>
      <h2>How to Play</h2>
      <p>Select as many unique cards in a row as possible.</p>
      <p>If you select a card that you have already selected, the score will reset.</p>
      <p>Let's begin!</p>
      <div>Score: {score} Highest Score: {high}</div>
      <div className="cards">
        {cards[Math.random() * (25 - 0) + 25]}
        {cards[Math.random() * (25 - 0) + 25]}
        {cards[Math.random() * (25 - 0) + 25]}
        {cards[Math.random() * (25 - 0) + 25]}
        {cards[Math.random() * (25 - 0) + 25]}
        {cards[Math.random() * (25 - 0) + 25]}
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import React, {useState, useEffect} from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function getCards() {
      let generatedCards = [];
      for(let i = 0; i < 25; i++) {
        const currentCard = <Card imageLocation="https://picsum.photos/200/200"/>
        
        generatedCards.push(currentCard);
      }
      //setCards(generatedCards);
    }

    //getCards();
  })

  return (
    <div className="content">
      <h1>Memory Game</h1>
      <h2>How to Play</h2>
      <p>Select as many unique cards in a row as possible.</p>
      <p>If you select a card that you have already selected, the score will reset.</p>
      <p>Let's begin!</p>
      <div className="cards">
        <Card imageLocation="https://picsum.photos/300/300" />
        <Card imageLocation="https://picsum.photos/300/300" />
        <Card imageLocation="https://picsum.photos/300/300" />
        <Card imageLocation="https://picsum.photos/300/300" />
        <Card imageLocation="https://picsum.photos/300/300" />
        <Card imageLocation="https://picsum.photos/300/300" />
      </div>
    </div>
  );
}

export default App;

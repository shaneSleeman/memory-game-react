import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards'
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
        const currentCard = <div onClick={checkSelect}><Card location={i} imageLocation={"https://picsum.photos/200/200?" + i}/></div>
        //currentSelects[i] = 0;
        currentCards.push(currentCard);
        currentSelects.push(0);
      }

      function checkSelect(e) {
        console.log(e.target.className);
        /*
        let location;
        for(let i = 0; i < 25; i++) {
          if($(e.target).hasClass(`${i}`)) location = i;
        }
        console.log(location);*/
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
      <Cards cardsList={cards} />
      
    </div>
  );

  /*
  <div className="cards">
        {cards[Math.floor(Math.random() * 25)]}
        {cards[Math.floor(Math.random() * 25)]}
        {cards[Math.floor(Math.random() * 25)]}
        {cards[Math.floor(Math.random() * 25)]}
        {cards[Math.floor(Math.random() * 25)]}
        {cards[Math.floor(Math.random() * 25)]}
      </div>
  */
}

export default App;

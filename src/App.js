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
  const [indexes, setIndexes] = useState([-1,-1,-1,-1,-1,-1]);

  useEffect(() => {
    function getCards() {
      let currentCards = cards;
      let currentSelects = selects;
      let scoreCopy = score;
      let highCopy = high;

      for(let i = 0; i < 25; i++) {
        const currentCard = <div onClick={checkSelect}><Card location={i} imageLocation={"https://picsum.photos/200/200?" + i}/></div>
        //currentSelects[i] = 0;
        currentCards.push(currentCard);
        currentSelects.push(0);
      }

      function randomIndexes() {
        let empty = [];
        //setIndexes(empty => empty);
        let indexCopy = [-1, -1, -1, -1, -1, -1];
        //console.log(indexCopy);
        for(let i = 0; i < 6; i++) {
          let isNew = false;
          let newIndex;
          while(!isNew) {
              newIndex = Math.floor(Math.random() * 25)
              if(!indexCopy.includes(newIndex)) {
                  isNew = true;
              }
          }
          indexCopy.push(newIndex);
        }
        setIndexes(empty => [indexCopy]);
      }

      randomIndexes();

      function checkSelect(e) {
        randomIndexes();
        // Need to update something in Card to rerender
        let location = e.target.className;

        let selectsCopy = selects;

        if(selectsCopy[location] == 1) {
          
          // Reset score and all selects
          
          for(let i = 0; i < selectsCopy.length; i++) selectsCopy[i] = 0;
          //setSelects(empty => [reset]);
          //getCards();
          setScore(0);
        }
        else {
          // Increment score
          setScore(score => score + 1);
          console.log(score);
          if(score > high) setHigh(score => score);
          selectsCopy[location] = 1;
        }

        let empty = [];
        setSelects(empty => [selectsCopy]);
      }

      //setSelects(currentSelects);
      setCards(cards => [...cards, currentCards]);
      let empty = [];
      setSelects(empty => currentSelects);
      console.log(cards);
    }

    getCards();
  }, [])

  return (
    <div className="content">
      <h1>Memory Game</h1>
      <h2>How to Play</h2>
      <p>Select as many unique photos in a row as possible.</p>
      <p>If you select a photo that you have already selected, the score will reset.</p>
      <p>Let's begin!</p>
      <div>Score: {score} Longest Streak: {high}</div>
      <Cards cardsList={cards} index={indexes} />
      
    </div>
  );
}

export default App;

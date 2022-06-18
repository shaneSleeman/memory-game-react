import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="content">
      <h1>Memory Game</h1>
      <h2>How to Play</h2>
      <p>Select as many unique cards in a row as possible.</p>
      <p>If you select a card that you have already selected, the score will reset.</p>
      <p>Let's begin!</p>
      <Card name="Item1" image="Test" />
    </div>
  );
}

export default App;

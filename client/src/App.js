import './App.css';
import Players from './components/players';
import Game from './components/game';
import Button from './components/button';
import Scores from './components/scores';



function App() {
  return (
    <div className="App">
      Guess My Number
      <br></br>
      <br></br>

      <Game />

      <br></br>
      <Scores />

      <br></br>
      <Button text = "New Player" />
      <Players />
      <br></br>

      <Button text = "Returning" />
      <br></br>

    </div>
  );
}

export default App;

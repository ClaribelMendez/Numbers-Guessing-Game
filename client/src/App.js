import './App.css';
import Players from './components/players';
import Game from './components/game';
import Button from './components/button';


function App() {
  return (
    <div className="App">
      Guess My Number
      <br></br>
      <Button text = "New Player" />
      <Players />


      <Button text = "Returning" />

      <Game />
    </div>
  );
}

export default App;

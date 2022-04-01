import { useState } from 'react'
// import Players from './players';

function Game() {
    const [count, setCount] = useState();

    const handleGuessInput = (event) => {
        const guess = event.target.value;
        setCount(guess) ;

    }

    const handleSubmit = event => {
        event.preventDefault();
        alert('testing handleSubmit');
      };
        
    
    return(
    <form onSubmit={handleSubmit}>
      <label>Guess</label>
        <input
          type="number"
          id="add-user-guess"
          placeholder="Enter a number"
          required
          value = {count}
          onChange={handleGuessInput}
          />
          <button type="submit">Add</button>

    </form>
    )

}
export default Game
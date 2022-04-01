import { useState } from 'react'

function Game() {
    const [count, setCount] = useState(5);
    const [guess, setGuess] = useState()
    const [number, setNumber] = useState(10)
    console.log(number)

   
 

    const handleGuessInput = (event) => {
        const guess = event.target.value;
        setGuess(guess) ;
    }

    const handleSubmit = event => {
        event.preventDefault();

        if({guess} === number){
            alert('YOU WON!')
            setCount(count + 1)
            setNumber(Math.floor(Math.random() * (20 - 1) + 1))
        }else(alert('WRONG!'))
            setCount(count - 1)

          };
    
    return(

        <>
            <div>
                <h3>{count}</h3> 
                {/* <button id="20" type="button" onClick={range}>1-20</button> */}
                {/* <button id="40" type="button" onClick={this.handleClick}>20-40</button>
                <button id="60" type="button" onClick={this.handleClick}>40-60</button> */}
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Guess</label>
                <input
                    type="number"
                    id="add-user-guess"
                    placeholder="Enter a number"
                    required
                    value={guess}
                    onChange={handleGuessInput} />
                <button type="submit">Add</button>

            </form>
        </>
    )

}
export default Game
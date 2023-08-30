import React, { useContext } from 'react';
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, setGameOver, correctWord, currentAttempt } = useContext(AppContext);

  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? "You got it !" : "Better luck next time"}</h3>
      <h1> The Correct word was: {correctWord}</h1>
      {gameOver.guessedWord && (<h1> You guessed in {currentAttempt.attempt} attempts</h1>)}
    </div>

  )
}

export default GameOver
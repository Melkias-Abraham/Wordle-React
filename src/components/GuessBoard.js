import React from 'react'
import { boardDefault } from '../Words'

function GuessBoard() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className='Guessboard'>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div>

    </div>
  )
}

export default GuessBoard
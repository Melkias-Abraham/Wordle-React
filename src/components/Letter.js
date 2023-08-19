import React from 'react'

function Letter({letterPos, attemptValue}) {
  const letter = Guessboard[attemptValue][letterPos]
  return (
    <div className='letter'> {letter} </div>
  )
}

export default Letter
import React, { useContext} from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext)

  const seletLetter = () => {
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos + 1})
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={seletLetter}>
      {keyVal}
    </div>
  );
}

export default Key;

import React, { useContext} from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard } = useContext(AppContext)

  const seletLetter = () => {
    const newBoard = [...board]
    newBoard[0][0] = keyVal
    setBoard(newBoard)
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={seletLetter}>
      {keyVal}
    </div>
  );
}

export default Key;

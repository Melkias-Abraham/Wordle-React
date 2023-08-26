import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const {
    onDelete,
    onEnter,
    onSelectLetter,
  } = useContext(AppContext);

  const seletLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey && "big"} onClick={seletLetter}>
      {keyVal}
    </div>
  );
}

export default Key;

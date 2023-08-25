import "./App.css";
import GuessBoard from "./components/GuessBoard";
import KeyBoard from "./components/KeyBoard";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <div className="game">
          <GuessBoard />
          <KeyBoard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import './App.css';
import GuessBoard from './components/GuessBoard';
import KeyBoard from './components/KeyBoard';

import { createContext } from 'react';

export const AppContent = createContext();


function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value = { {board, setBoard}} >
      <GuessBoard />
      <KeyBoard />
      </AppContext.Provider>
    </div>
  );
}

export default App;

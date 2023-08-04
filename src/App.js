import './App.css';
import GuessBoard from './components/GuessBoard';
import KeyBoard from './components/KeyBoard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <GuessBoard />
      <KeyBoard />
    </div>
  );
}

export default App;

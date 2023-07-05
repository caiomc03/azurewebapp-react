//import logo from './logo.svg';
import './App.css';

function App() {
  const Img = 'https://caiomc03bucket.blob.core.windows.net/container2/pog.png'
  return (
    <div className="App">
      <header className="App-header">
        <img src={Img} className="App-logo" alt="logo" />
        <p>
          Do you know PogChamp?
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

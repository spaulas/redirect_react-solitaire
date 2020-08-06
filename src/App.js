import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This url is no longer valid. The new deploy url is:
        </p>
        <a
          className="App-link"
          href="https://spaulas.github.io/react-solitaire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Solitaire
        </a>
      </header>
    </div>
  );
}

export default App;

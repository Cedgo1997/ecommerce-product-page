import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BoldText } from './components/GlobalComponents/GlobalComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BoldText>
        Edit <code>src/App.tsx</code> and save to reload.
        </BoldText>
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

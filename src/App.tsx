import React from 'react';
import './App.css';
import { ReactComponent as Hold } from './hold.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hold style={{ backgroundColor: 'yellow' }}/>
      </header>
    </div>
  );
}

export default App;

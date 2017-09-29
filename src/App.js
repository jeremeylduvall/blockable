import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blockable</h1>
        </header>
        <div>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;

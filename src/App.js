import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar';
import AddItemView from './Views/AddItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Blockable</h1>
                </header>
                <div className="calendar">
                    <Calendar />
                </div>
                <AddItemView/>
            </div>
        )
    }
}

export default App;

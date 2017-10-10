import React, { Component } from 'react';
import './App.css';
import CalendarView from './views/calendar';
import AddItemView from './views/additem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Blockable</h1>
                </header>
                <div className="blockable">
                    <CalendarView />
                    <AddItemView />
                </div>
            </div>
        )
    }
}

export default App;

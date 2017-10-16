import React, { Component } from 'react';
import './App.css';
import CalendarView from './views/calendar';
import AddItemView from './views/additem';
import Heart from 'genericons-neue-react/icons/heart';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="blockable-header">
                    <h1 className="blockable-title">Blockable</h1>
                </header>
                <div className="blockable">
                    <CalendarView />
                    <AddItemView />
                </div>
                <footer className="blockable-footer">
                    <span>Made with <Heart fill='#F67280'/> by <a href="https://jeremey.blog">Jeremey</a> - <a href="https://github.com/jeremeylduvall/blockable">Find out more on GitHub</a></span>
                </footer>
            </div>
        )
    }
}

export default App;

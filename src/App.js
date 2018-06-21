import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class What extends Component {
    render() {
        return (
            <h1>heisann sveisann på degsann</h1>
        )
    }
}

class App extends Component {
        
    render() {
        const wot = new What();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    {wot.render()}
                </p>
            </div>

        );
    }
}

export default App;

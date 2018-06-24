import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleCard from './simplecard';
import Graph from './graph';
import StationData from './stationdata.js';

class App extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="App">
                <SimpleCard
                    content={
                        <Graph data={new StationData().getGraphJsData()} width="500" height="300"/>
                    }
                />
            </div>

        );
    }
}

export default App;

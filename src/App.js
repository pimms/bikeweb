import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';

import './App.css';
import Bar from './appbar';
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
                <CssBaseline />
                <Bar />
                <SimpleCard
                    content={
                        <Graph
                            data={new StationData().getGraphJsData()}
                            width = "1000"
                            height="300"/>
                    }
                />
                <SimpleCard
                    content={
                        <Graph
                            data={new StationData().getGraphJsData()}
                            width = "1000"
                            height="300"/>
                    }
                />
            </div>

        );
    }
}

export default App;

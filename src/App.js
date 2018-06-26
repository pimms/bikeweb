import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';

import './App.css';
import Bar from './appbar';
import StationCard from './stationcard'

import SimpleCard from './simplecard';
import Graph from './graph';
import StationData from './stationdata.js';

class App extends Component {
    state = {
        stationCards: []
    }


    constructor() {
        super();
        this.stationChanged = this.stationChanged.bind(this);
    }

    stationChanged(station) {
        let cards = this.state.stationCards.filter((c) => {
            return c.props.station.selected;
        });

        if (station.selected) {
            const jsx = <StationCard station={station} />;
            cards.push(jsx);
        }

        this.setState({
            stationCards: cards,
        })
    }

    render() {
        return (
            <div className="App">
                <CssBaseline />
                <Bar stationChanged={this.stationChanged} />
                {this.state.stationCards}
            </div>
        );
    }
}

export default App;
